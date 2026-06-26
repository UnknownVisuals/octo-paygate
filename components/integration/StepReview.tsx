"use client";

import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const featureLabels: Record<string, string> = {
  card_payments: "Card Payments",
  ewallet: "E-Wallet",
  bank_transfer: "Bank Transfer",
  qris: "QRIS",
  webhook: "Webhooks",
  recurring: "Recurring Billing",
};

interface StepReviewProps {
  data: {
    name: string;
    description: string;
    website: string;
    mode: "live" | "test";
    features: string[];
  };
}

export function StepReview({ data }: StepReviewProps) {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold text-octo-dark">Review Your Integration</h2>
        <p className="text-sm text-octo-gray-500 mt-1">
          Please review your configuration before creating the integration.
        </p>
      </div>

      <Card>
        <CardContent className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-octo-gray-500">Application Name</p>
              <p className="font-semibold text-octo-dark">{data.name}</p>
            </div>
            <div>
              <p className="text-sm text-octo-gray-500">Mode</p>
              <Badge variant={data.mode === "live" ? "success" : "warning"}>
                {data.mode === "live" ? "Live / Production" : "Test / Sandbox"}
              </Badge>
            </div>
            <div className="col-span-2">
              <p className="text-sm text-octo-gray-500">Description</p>
              <p className="text-octo-dark">{data.description || "No description"}</p>
            </div>
            <div className="col-span-2">
              <p className="text-sm text-octo-gray-500">Website URL</p>
              <p className="text-octo-dark">{data.website || "Not provided"}</p>
            </div>
            <div className="col-span-2">
              <p className="text-sm text-octo-gray-500 mb-2">Features ({data.features.length})</p>
              <div className="flex flex-wrap gap-2">
                {data.features.map((f) => (
                  <Badge key={f} variant="info">
                    {featureLabels[f] || f}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
