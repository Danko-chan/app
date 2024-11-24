import { getServerSession, type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";

const VERCEL_DEPLOYMENT = !!process.env.VERCEL_URL;

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
      profile(profile) {
        return {
          id: profile.sub,
          name: `${profile?.name || "User"}`,
          gh_username: profile.email,
          email: profile.email,
          image: profile?.picture || "https://placehold.co/400",
        };
      },
    }),
  ],
  pages: {
    signIn: `/login`,
    verifyRequest: `/login`,
    error: "/login", // Error code passed in query string as ?error=
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  cookies: {
    sessionToken: {
      name: `${VERCEL_DEPLOYMENT ? "__Secure-" : ""}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
      },
    },
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        console.log(user);
        token.user = user;
      }
      return token;
    },
    session: async ({ session, token, user }: any) => {
      console.log(token);
      const updatedUser = await prisma.user.findUnique({
        where: { id: token?.user?.id },
      });
      session.user = {
        // ...session.user,
        ...updatedUser,
        id: token.sub,
        username: token?.user?.username || token?.user?.gh_username,
      };
      return session;
    },
  },
};

export function getSession() {
  console.log("dfddd");
  return getServerSession(authOptions) as Promise<{
    user: {
      id?: string;
      name: string;
      username: string;
      email: string;
      image: string;
    };
  } | null>;
}
