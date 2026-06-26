"use client";

import { Card, CardContent } from "@/components/ui/Card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", amount: 24000000 },
  { day: "Tue", amount: 18500000 },
  { day: "Wed", amount: 32000000 },
  { day: "Thu", amount: 27800000 },
  { day: "Fri", amount: 45000000 },
  { day: "Sat", amount: 19200000 },
  { day: "Sun", amount: 15800000 },
];

function formatRupiah(value: number) {
  return `Rp ${(value / 1_000_000).toFixed(1)}M`;
}

export function TransactionChart() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-octo-dark">Transaction Volume</h2>
            <p className="text-sm text-octo-gray-500">Last 7 days</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-octo-gray-500">
            <span className="w-3 h-3 rounded-sm bg-octo-red" />
            <span>Payments</span>
          </div>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barSize={36} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6B7280", fontSize: 12 }}
              />
              <YAxis
                tickFormatter={formatRupiah}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6B7280", fontSize: 12 }}
              />
              <Tooltip
                formatter={(value) => [formatRupiah(Number(value)), "Volume"]}
                contentStyle={{
                  borderRadius: 8,
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
                  fontSize: 13,
                }}
              />
              <Bar
                dataKey="amount"
                fill="#D52B1E"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
