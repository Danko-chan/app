import { Shield, Mail, Globe, Key } from "lucide-react";
import LearningModuleCard from "../components/learningModuleCard";

const modules = [
  {
    id: 1,
    title: "Introduction to Phishing",
    description: "Learn the basics of phishing attacks and how they work.",
    slug: "introduction-to-phishing",
    icon: Shield,
  },
  {
    id: 2,
    title: "Identifying Suspicious Emails",
    description: "Discover key indicators of phishing attempts in emails.",
    slug: "identifying-suspicious-emails",
    icon: Mail,
  },
  {
    id: 3,
    title: "Safe Browsing Practices",
    description:
      "Explore techniques for safe browsing to avoid phishing traps.",
    slug: "safe-browsing-practices",
    icon: Globe,
  },
  {
    id: 4,
    title: "Password Security",
    description:
      "Learn how to create and manage secure passwords to prevent unauthorized access.",
    slug: "password-security",
    icon: Key,
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Phishing Prevention Learning Modules
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {modules.map((module) => (
          <LearningModuleCard key={module.id} {...module} />
        ))}
      </div>
    </main>
  );
}
