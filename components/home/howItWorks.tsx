import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Connect Your Email",
    description: "Easily integrate Horizon with your email provider.",
  },
  {
    title: "AI Analysis",
    description:
      "Our advanced AI scans every incoming email for potential threats.",
  },
  {
    title: "Threat Detection",
    description: "Suspicious emails are flagged and quarantined automatically.",
  },
  {
    title: "Stay Protected",
    description:
      "Receive alerts and detailed reports to stay informed and secure.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          How Horizon Protects You
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col items-center text-center mb-8 md:mb-0"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-base text-gray-500 max-w-xs">
                {step.description}
              </p>
              {index < steps.length && (
                <ArrowRight className="hidden md:block w-6 h-6 text-gray-400 mt-4 transform rotate-90 md:rotate-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
