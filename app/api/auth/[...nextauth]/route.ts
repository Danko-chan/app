import prisma from "@/lib/prisma";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          scope:
            "openid profile email https://www.googleapis.com/auth/gmail.readonly", // Add required scopes here
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account }) {
      try {
        // Save user details in the database
        await prisma.user.upsert({
          where: { email: user.email },
          update: {
            name: user.name,
            image: user.image,
          },
          create: {
            email: user.email!,
            name: user.name,
            image: user.image,
          },
        });
        return true; // Allow sign-in
      } catch (error) {
        console.error("Error saving user to the database:", error);
        return false; // Deny sign-in
      }
    },
    async session({ session, user, token }) {
      // Attach user details from the database to the session object
      if (session.user) {
        const dbUser = await prisma.user.findUnique({
          where: { email: session.user.email! },
        });
        if (dbUser) {
          session.user.id = dbUser.id; // Add custom fields to the session
        }
      }
      session.accessToken = token.accessToken;
      session.user.role = token.role;
      return session;
    },
    async jwt({ token, account, user }) {
      // Save the access token to the JWT during sign-in
      if (account && account.access_token) {
        token.accessToken = account.access_token;
        token.role = user.role || "user";
      }
      return token;
    },
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
