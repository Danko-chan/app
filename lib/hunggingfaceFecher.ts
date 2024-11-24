import fetch from "node-fetch";

const HUGGINGFACE_API_URL =
  "https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english";

export async function scanEmail(content) {
  try {
    const response = await fetch(HUGGINGFACE_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HF_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: content }),
    });

    if (!response.ok) {
      throw new Error(`Hugging Face API error: ${response.statusText}`);
    }

    const result = await response.json();
    return result[0]; // Example: {label: "NEGATIVE", score: 0.95}
  } catch (error) {
    console.error("Error scanning email:", error);
    return null;
  }
}
