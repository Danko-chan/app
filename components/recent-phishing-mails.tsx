import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const recentMails = [
  {
    id: 1,
    subject: "Urgent: Update Your Account",
    status: "Phishing",
    date: "2023-04-01",
  },
  {
    id: 2,
    subject: "Your Package Has Arrived",
    status: "Suspicious",
    date: "2023-04-02",
  },
  {
    id: 3,
    subject: "Meeting Reminder",
    status: "Legitimate",
    date: "2023-04-03",
  },
  {
    id: 4,
    subject: "Claim Your Prize Now!",
    status: "Phishing",
    date: "2023-04-04",
  },
  {
    id: 5,
    subject: "New Security Update Required",
    status: "Suspicious",
    date: "2023-04-05",
  },
];

export function RecentPhishingMails() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Phishing Attempts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentMails.map((mail) => (
            <div key={mail.id} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">{mail.subject}</p>
                <p className="text-xs text-muted-foreground">{mail.date}</p>
              </div>
              <Badge
                variant={
                  mail.status === "Phishing"
                    ? "destructive"
                    : mail.status === "Suspicious"
                    ? "warning"
                    : "secondary"
                }
              >
                {mail.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
