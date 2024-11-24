import { Shield, Eye, Zap, Lock } from "lucide-react";

const features = [
  {
    name: "Advanced Threat Detection",
    description:
      "Our AI-powered system identifies even the most sophisticated phishing attempts.",
    icon: Shield,
  },
  {
    name: "Real-time Monitoring",
    description:
      "Continuous analysis of incoming emails to catch threats as they arrive.",
    icon: Eye,
  },
  {
    name: "Quick Response",
    description:
      "Instant alerts and automated actions to neutralize potential threats.",
    icon: Zap,
  },
  {
    name: "Secure Integration",
    description:
      "Seamlessly integrates with your existing email infrastructure.",
    icon: Lock,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Powerful Features to Keep You Safe
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-md mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {feature.name}
              </h3>
              <p className="text-base text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
