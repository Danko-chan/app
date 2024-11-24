import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "$29",
    features: [
      "Up to 10 users",
      "Basic threat detection",
      "Email alerts",
      "24/7 support",
    ],
  },
  {
    name: "Professional",
    price: "$99",
    features: [
      "Up to 100 users",
      "Advanced AI analysis",
      "Real-time monitoring",
      "API access",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited users",
      "Custom AI models",
      "Dedicated account manager",
      "On-premise deployment option",
      "Advanced reporting",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Choose the Right Plan for Your Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white rounded-lg shadow-md p-8 border border-gray-200 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {plan.name}
              </h3>
              <p className="text-4xl font-bold text-gray-900 mb-6">
                {plan.price}
                <span className="text-base font-normal text-gray-500">
                  /month
                </span>
              </p>
              <ul className="mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center mb-3">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
