"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertTriangle,
  FileWarning,
  Clock,
  UserCheck,
  Link,
  Mail,
  AlertCircle,
  CheckCircle2,
  ShieldAlert,
  ExternalLink,
  CheckCircle,
  Circle,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Module {
  id: number;
  title: string;
  slug: string;
}

const modules: Module[] = [
  {
    id: 1,
    title: "Introduction to Phishing",
    slug: "introduction-to-phishing",
  },
  {
    id: 2,
    title: "Identifying Suspicious Emails",
    slug: "identifying-suspicious-emails",
  },
  { id: 3, title: "Safe Browsing Practices", slug: "safe-browsing-practices" },
  { id: 4, title: "Password Security", slug: "password-security" },
];

function Sidebar({
  modules,
  activeModule,
  setActiveModule,
  completedModules,
}: {
  modules: Module[];
  activeModule: Module;
  setActiveModule: (module: Module) => void;
  completedModules: number[];
}) {
  return (
    <nav className="w-64 bg-muted p-4 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Learning Roadmap</h2>
      <ul className="space-y-2">
        {modules.map((module) => (
          <li key={module.id}>
            <button
              onClick={() => setActiveModule(module)}
              className={cn(
                "flex items-center w-full p-2 rounded-lg text-left transition-colors",
                activeModule.id === module.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted-foreground/10"
              )}
            >
              {completedModules.includes(module.id) ? (
                <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
              ) : (
                <Circle className="w-5 h-5 mr-2" />
              )}
              <span>{module.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function ModulePage() {
  const [activeModule, setActiveModule] = useState(modules[1]); // Start with "Identifying Suspicious Emails"
  const [completedModules, setCompletedModules] = useState<number[]>([]);

  const handleMarkComplete = () => {
    if (!completedModules.includes(activeModule.id)) {
      setCompletedModules([...completedModules, activeModule.id]);
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar
        modules={modules}
        activeModule={activeModule}
        setActiveModule={setActiveModule}
        completedModules={completedModules}
      />
      <div className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center">
            {activeModule.title}
          </h1>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-primary">
                <AlertTriangle className="mr-2" />
                Why It's Important
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                Phishing emails are a common tactic used by attackers to trick
                individuals into revealing sensitive information like passwords,
                credit card numbers, or personal details. Recognizing these
                emails can help protect you and your organization from security
                breaches.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-primary">
                <AlertCircle className="mr-2" />
                Key Indicators of Suspicious Emails
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  {
                    icon: FileWarning,
                    title: "Unexpected Attachments",
                    content:
                      "Be cautious of attachments from unknown senders, especially those with file types like .exe, .zip, or .docm that can execute malicious code.",
                  },
                  {
                    icon: Clock,
                    title: "Urgent or Alarming Language",
                    content:
                      'Messages that create panic or urgency (e.g., "Your account will be deactivated!") are designed to prompt quick action without careful thought.',
                  },
                  {
                    icon: UserCheck,
                    title: "Requests for Personal Information",
                    content:
                      "Legitimate organizations rarely ask for sensitive details (e.g., passwords or social security numbers) via email.",
                  },
                  {
                    icon: Mail,
                    title: "Inconsistent Email Addresses",
                    content:
                      "Look for slight misspellings or inconsistencies in the sender's email address (e.g., support@amzon.com instead of support@amazon.com).",
                  },
                  {
                    icon: Link,
                    title: "Spoofed Links",
                    content:
                      "Hover over links to inspect their actual destination before clicking. Phishing emails often disguise malicious URLs to appear legitimate.",
                  },
                  {
                    icon: AlertTriangle,
                    title: "Generic Greetings",
                    content:
                      'Emails that begin with phrases like "Dear Customer" or "Dear User" instead of your name could be phishing attempts.',
                  },
                  {
                    icon: AlertCircle,
                    title: "Grammar and Spelling Errors",
                    content:
                      "Poorly written emails with typos and awkward phrasing are red flags.",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <item.icon className="w-6 h-6 mr-2 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <strong>{item.title}:</strong> {item.content}
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-primary">
                <CheckCircle2 className="mr-2" />
                Steps to Verify Email Authenticity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <strong>Check the Sender:</strong> Ensure the sender's email
                  address matches the official domain of the organization (e.g.,
                  @company.com).
                </li>
                <li>
                  <strong>Hover Over Links:</strong> Before clicking, hover over
                  any links to preview their actual destination.
                </li>
                <li>
                  <strong>Contact the Organization Directly:</strong> If in
                  doubt, contact the organization using verified contact
                  information from their official website.
                </li>
                <li>
                  <strong>Use a Spam Filter:</strong> Ensure your email
                  provider's spam filter is activated to automatically block
                  suspicious emails.
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-primary">
                <ShieldAlert className="mr-2" />
                Common Phishing Tactics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Attackers use various tactics to make their emails appear
                legitimate. Be aware of the following:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <strong>Impersonation:</strong> Pretending to be a trusted
                  entity like your bank, employer, or a popular service (e.g.,
                  PayPal or Netflix).
                </li>
                <li>
                  <strong>Urgency Scams:</strong> Claims of account suspensions,
                  fraudulent activities, or prizes that require "immediate
                  action."
                </li>
                <li>
                  <strong>Attachments with Malware:</strong> Files that, when
                  opened, install malicious software on your device.
                </li>
                <li>
                  <strong>Fake Invoices:</strong> Emails with fraudulent billing
                  statements to trick you into paying.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-primary">
                <CheckCircle2 className="mr-2" />
                Best Practices to Stay Safe
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  Always think before clicking links or downloading attachments.
                </li>
                <li>
                  Enable two-factor authentication (2FA) on your accounts for
                  added security.
                </li>
                <li>
                  Use email services with robust spam filters and report
                  phishing emails.
                </li>
                <li>
                  Regularly update your passwords and avoid reusing them across
                  platforms.
                </li>
                <li>
                  Stay informed about the latest phishing techniques and scams.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-primary">
                <AlertTriangle className="mr-2" />
                What to Do If You Suspect a Phishing Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside">
                <li>Do not reply to the email or provide any information.</li>
                <li>Do not click on links or download attachments.</li>
                <li>
                  Report the email to your email provider or IT department.
                </li>
                <li>Delete the email and block the sender.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-primary">
                <ExternalLink className="mr-2" />
                Additional Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                For more information about phishing prevention and cyber
                security, visit trusted sites like:
              </p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.consumer.ftc.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    FTC Consumer Information
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.cyberaware.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    National Cyber Security Centre
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <Button size="lg" className="px-8" onClick={handleMarkComplete}>
              Mark as Complete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
