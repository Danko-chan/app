import { Mail, Calendar, User } from "lucide-react";

export default function MailDetails() {
  return (
    <div className="w-full md:w-2/3 p-6 border-b md:border-b-0 md:border-r border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Mail Details
      </h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <User className="text-indigo-600" />
          <div>
            <p className="text-sm text-gray-500">From:</p>
            <p className="font-medium">John Doe &lt;john.doe@example.com&gt;</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Calendar className="text-indigo-600" />
          <div>
            <p className="text-sm text-gray-500">Date:</p>
            <p className="font-medium">May 15, 2023, 10:30 AM</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <Mail className="text-indigo-600 mt-1" />
          <div>
            <p className="text-sm text-gray-500">Subject:</p>
            <p className="font-medium">
              Urgent: Update Your Account Information
            </p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Message:</h3>
          <p className="text-gray-600 leading-relaxed">
            Dear valued customer,
            <br />
            <br />
            We have detected unusual activity on your account. To ensure the
            security of your information, please click the link below to verify
            your account details immediately:
            <br />
            <br />
            <a href="#" className="text-blue-600 hover:underline">
              https://secure-update.example.com
            </a>
            <br />
            <br />
            Failure to update your information within 24 hours may result in
            account suspension.
            <br />
            <br />
            Thank you for your prompt attention to this matter.
            <br />
            <br />
            Best regards,
            <br />
            Account Security Team
          </p>
        </div>
      </div>
    </div>
  );
}
