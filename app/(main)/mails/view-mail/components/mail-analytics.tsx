import { AlertTriangle, ShieldCheck } from "lucide-react";

export default function MailAnalytics() {
  const phishingProbability = 0.92;
  const rating = 9.2;

  return (
    <div className="w-full md:w-1/3 p-6 bg-gray-50">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Mail Analytics
      </h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-2">
            Phishing Probability
          </h3>
          <div className="flex items-center space-x-2">
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-red-500 h-4 rounded-full"
                style={{ width: `${phishingProbability * 100}%` }}
              ></div>
            </div>
            <span className="text-lg font-bold text-red-500">
              {(phishingProbability * 100).toFixed(0)}%
            </span>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-2">
            Threat Rating
          </h3>
          <div className="flex items-center space-x-2">
            <div className="text-3xl font-bold text-red-500">
              {rating.toFixed(1)}
            </div>
            <div className="text-gray-500">/ 10</div>
          </div>
        </div>
        <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="text-red-500" />
            <h3 className="text-lg font-semibold text-red-700">
              High Risk: Potential Phishing
            </h3>
          </div>
          <p className="mt-2 text-red-600">
            This email exhibits multiple characteristics commonly associated
            with phishing attempts. Exercise extreme caution and do not click on
            any links or provide any personal information.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-gray-700">Key Indicators:</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Urgent call to action</li>
            <li>Request for personal information</li>
            <li>Suspicious link</li>
            <li>Threat of account suspension</li>
          </ul>
        </div>
        <div className="bg-indigo-100 border-l-4 border-indigo-500 p-4 rounded">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="text-indigo-500" />
            <h3 className="text-lg font-semibold text-indigo-700">
              Horizon Protection
            </h3>
          </div>
          <p className="mt-2 text-indigo-600">
            Horizon has flagged this email as potentially dangerous. We
            recommend deleting it immediately and not interacting with its
            contents.
          </p>
        </div>
      </div>
    </div>
  );
}
