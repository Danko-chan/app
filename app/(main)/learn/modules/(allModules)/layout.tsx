import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ModuleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="bg-gray-100 p-4">
        <div className="container mx-auto">
          <Link href="/learn/modules" passHref>
            <Button
              variant="ghost"
              className="flex items-center text-primary hover:text-primary/80"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back to Modules
            </Button>
          </Link>
        </div>
      </nav>
      {children}
    </div>
  );
}
