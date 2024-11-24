import Link from "next/link";
import { UserNav } from "./user-nav";
import { Shield } from "lucide-react";

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4">
        <Link
          href="/"
          className="flex items-center space-x-2 text-2xl font-bold text-blue-600"
        >
          <Shield className="h-6 w-6" />
          <span className="font-bold">Horizon</span>
        </Link>
        <div className="ml-auto flex items-center space-x-4">
          <Link href="/mails" className="text-sm font-medium">
            Mails
          </Link>
          <Link href="/learn/modules" className="text-sm font-medium">
            Learn
          </Link>
          <Link href="/dashboard" className="text-sm font-medium">
            Dashboard
          </Link>
          <UserNav />
        </div>
      </div>
    </nav>
  );
}
