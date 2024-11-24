"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  { name: "Legitimate", value: 7500 },
  { name: "Phishing", value: 1500 },
  { name: "Suspicious", value: 1000 },
];

const COLORS = ["#10B981", "#EF4444", "#F59E0B"];

export function PhishingStatsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Phishing Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            legitimate: {
              label: "Legitimate",
              color: "hsl(var(--chart-1))",
            },
            phishing: {
              label: "Phishing",
              color: "hsl(var(--chart-2))",
            },
            suspicious: {
              label: "Suspicious",
              color: "hsl(var(--chart-3))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="mt-4 flex justify-center space-x-4">
          {data.map((entry, index) => (
            <div key={`legend-${index}`} className="flex items-center">
              <div
                className="h-3 w-3 mr-1"
                style={{ backgroundColor: COLORS[index] }}
              ></div>
              <span className="text-sm">{entry.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
