"use server";
import fetch from "node-fetch";
import { google } from "googleapis";

export const fetchAndStoreRecentEmail = async (accessToken: string) => {
  try {
    if (!accessToken) {
      throw new Error("No Gmail access token provided.");
    }

    // Step 1: Create OAuth2 client and set credentials
    const oauth2Client = new google.auth.OAuth2();
    oauth2Client.setCredentials({ access_token: accessToken });

    // Step 2: Initialize Gmail API client
    const gmail = google.gmail({ version: "v1", auth: oauth2Client });

    // Step 3: Fetch the user's most recent email
    const { data: listRes } = await gmail.users.messages.list({
      userId: "me",
      maxResults: 1,
      labelIds: ["INBOX"],
    });

    const message = listRes.messages?.[0];
    if (!message) {
      console.warn("No emails found in the inbox.");
      return null;
    }

    // Step 4: Fetch the full email data
    const { data: emailRes } = await gmail.users.messages.get({
      userId: "me",
      id: message.id,
    });

    if (!emailRes || !emailRes.payload) {
      console.warn("Email payload is missing. Unable to fetch email details.");
      return null;
    }

    // Extract email details
    const headers = emailRes.payload.headers || [];
    const from =
      headers.find((header) => header.name.toLowerCase() === "from")?.value ||
      "Unknown Sender";
    const subject =
      headers.find((header) => header.name.toLowerCase() === "subject")
        ?.value || "No Subject";
    let decodedBody = "No body content";

    // Decode the email body
    if (emailRes.payload.body?.data) {
      decodedBody = Buffer.from(emailRes.payload.body.data, "base64").toString(
        "utf-8"
      );
    } else if (emailRes.payload.parts) {
      const findBody = (parts: any[]): string | null => {
        for (const part of parts) {
          if (part.mimeType === "text/html" || part.mimeType === "text/plain") {
            return part.body?.data
              ? Buffer.from(part.body.data, "base64").toString("utf-8")
              : null;
          }
          if (part.parts) {
            const nestedBody = findBody(part.parts);
            if (nestedBody) return nestedBody;
          }
        }
        return null;
      };

      const bodyData = findBody(emailRes.payload.parts);
      if (bodyData) {
        decodedBody = bodyData;
      }
    }

    if (!decodedBody || decodedBody === "No body content") {
      console.warn("Email body is empty. Skipping analysis.");
      return null;
    }

    console.log("Email Details:");
    console.log("From:", from);
    console.log("Subject:", subject);
    console.log("Body:", decodedBody);

    // Step 5: Use Hugging Face API for phishing detection
    const emailContent = `${subject}\n\n${decodedBody}`;
    const response = await fetch(
      "https://api-inference.huggingface.co/models/textattack/bert-base-uncased-MR", // Replace with a phishing detection model
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HUGGING_FACE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: emailContent }),
      }
    );

    if (!response.ok) {
      const errorDetail = await response.json();
      console.error(
        `Hugging Face API error: ${response.status} - ${JSON.stringify(
          errorDetail
        )}`
      );
      throw new Error(
        `Failed to analyze email content. API returned: ${response.statusText}`
      );
    }

    const result = await response.json();

    console.log("Phishing Analysis Result:", result);

    return {
      email: {
        from,
        subject,
        body: decodedBody,
      },
      analysis: result,
    };
  } catch (error) {
    console.error("Error in phishing detection process:", error);
    return null;
  }
};
