import { NextResponse } from "next/server";
import { processAndStoreEmails } from "@/lib/action";

// Handle POST requests
export async function POST(request: Request) {
  try {
    const body = await request.json(); // Parse the request body
    const { accessToken } = body;

    if (!accessToken) {
      return NextResponse.json(
        { error: "Access token is required" },
        { status: 400 }
      );
    }

    // Process and store emails
    const emails = await processAndStoreEmails(accessToken);
    return NextResponse.json({ emails }, { status: 200 });
  } catch (error) {
    console.error("Error processing emails:", error);
    return NextResponse.json(
      { error: "Failed to process emails" },
      { status: 500 }
    );
  }
}

// Method not allowed for other HTTP methods
export function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
