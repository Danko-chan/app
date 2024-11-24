import MailAnalytics from "./components/mail-analytics";
import MailDetails from "./components/mail-details";

export default function View() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <MailDetails />
            <MailAnalytics />
          </div>
        </div>
      </div>
    </div>
  );
}
