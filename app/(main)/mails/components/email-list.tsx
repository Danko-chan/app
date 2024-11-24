import { EmailItem } from "./email-item";

async function getEmails() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    subject: `Email subject ${i + 1}`,
    sender: `sender${i + 1}@example.com`,
    excerpt: `This is a brief excerpt of email ${i + 1}...`,
    isPhishing: Math.random() < 0.3, // 30% chance of being a phishing email
    threatRating: Math.floor(Math.random() * 10) + 1, // 1-10 rating
    threatLevel: ["Low", "Medium", "High"][Math.floor(Math.random() * 3)], // Random threat level
  }));
}

export async function EmailList() {
  const initialEmails = await getEmails();

  return (
    <div className="space-y-4 mt-4">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {initialEmails.map((email) => (
          <EmailItem key={email.id} email={email} />
        ))}
      </div>
    </div>
  );
}
