import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Email {
  id: number;
  subject: string;
  sender: string;
  excerpt: string;
  isPhishing: boolean;
  threatRating: number;
  threatLevel: string;
}

export function EmailItem({ email }: { email: Email }) {
  return (
    <Card className={email.isPhishing ? "border-red-500" : ""}>
      <CardHeader>
        <CardTitle className="text-lg">{email.subject}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2">
          From: {email.sender}
        </p>
        <p className="text-sm mb-2">{email.excerpt}</p>
        <div className="flex justify-between items-center">
          <div>
            <span
              className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                email.isPhishing
                  ? "bg-red-100 text-red-800"
                  : "bg-green-100 text-green-800"
              }`}
            >
              {email.isPhishing ? "Potential Phishing" : "Safe"}
            </span>
          </div>
          <div className="text-sm">
            <span className="font-semibold">Threat:</span>
            <span
              className={`ml-1 ${
                email.threatLevel === "High"
                  ? "text-red-600"
                  : email.threatLevel === "Medium"
                  ? "text-yellow-600"
                  : "text-green-600"
              }`}
            >
              {email.threatLevel} ({email.threatRating}/10)
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={"/mails/view-mail"}>
          <Button variant="outline" size="sm">
            View
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
