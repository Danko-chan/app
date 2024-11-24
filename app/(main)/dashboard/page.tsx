import { Navbar } from "@/components/navbar";
import { PhishingStatsChart } from "@/components/phishing-stat-chart";
import { RecentPhishingMails } from "@/components/recent-phishing-mails";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-4 md:p-6 space-y-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <PhishingStatsChart />
          <RecentPhishingMails />
        </div>
      </main>
    </div>
  );
}
