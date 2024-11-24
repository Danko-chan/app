"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { EmailItem } from "./email-item";
import { fetchAndStoreRecentEmail } from "@/lib/action";
import { useSession } from "next-auth/react";

export function FetchMoreEmails() {
  const [loading, setLoading] = useState(false);
  const [emails, setEmails] = useState<[]>([]);
  const { data: session } = useSession();
  console.log(session?.accessToken);
  const handleFetchMore = async () => {
    setLoading(true);
    try {
      const fetchedMail = await fetchAndStoreRecentEmail(
        session?.accessToken as string
      );
    } catch (error) {
      console.error("Failed to fetch more emails:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end mb-4">
        <Button onClick={handleFetchMore} disabled={loading}>
          {loading ? "Loading..." : "Fetch Emails"}
        </Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {emails.map((email) => (
          <EmailItem key={email.id} email={email} />
        ))}
      </div>
    </div>
  );
}
