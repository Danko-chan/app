import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">
          Ready to Secure Your Inbox?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Start your free trial today and experience the power of Horizon's
          phishing protection.
        </p>
        <Button size="lg" variant="secondary">
          Start Free Trial
        </Button>
      </div>
    </section>
  );
}
