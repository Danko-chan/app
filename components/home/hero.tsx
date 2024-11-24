import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Protect Your Inbox from Phishing Attacks
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Horizon uses advanced AI to analyze and prevent phishing attempts,
              keeping your organization safe from cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="login">
                <Button size="lg" className="bg-blue-600">
                  Start Free Trial
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="flex justify-center align-middle md:w-1/2 mt-12 md:mt-0">
            <Image
              src="/home.jpeg"
              alt="Horizon Dashboard"
              width={1024}
              height={400}
              className="rounded-lg shadow-5xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
