import { EmailList } from "./components/email-list";
import { FetchMoreEmails } from "./components/fetch-more-emails";

export default function EmailPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold mb-4">Email Inbox</div>
        <FetchMoreEmails />
      </div>

      <EmailList />
    </div>
  );
}
