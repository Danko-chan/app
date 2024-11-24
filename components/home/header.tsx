import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link
            href="/"
            className="flex items-center space-x-2 text-2xl font-bold text-blue-600"
          >
            <Shield className="h-6 w-6" />
            <span className="font-bold">Horizon</span>
          </Link>
          <nav className="hidden md:flex space-x-10">
            <Link
              href="#features"
              className="text-gray-500 hover:text-gray-900"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-500 hover:text-gray-900"
            >
              How It Works
            </Link>
            <Link href="#pricing" className="text-gray-500 hover:text-gray-900">
              Pricing
            </Link>
          </nav>
          <Link href="/login">
            <Button className="bg-blue-600">Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
