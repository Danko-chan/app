import { google } from "googleapis";

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

export const getGmailClient = (token) => {
  oauth2Client.setCredentials({ access_token: token });
  return google.gmail({ version: "v1", auth: oauth2Client });
};
