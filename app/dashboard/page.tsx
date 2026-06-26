"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import { useIntegrations } from "@/components/integration/useIntegrations";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/animations/FadeIn";
import { TransactionChart } from "@/components/dashboard/TransactionChart";
import Link from "next/link";

function StatCard({
  label,
  value,
  icon,
  delay,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  delay?: number;
}) {
  return (
    <FadeIn direction="up" delay={delay} distance={20}>
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-octo-gray-500 mb-1">{label}</p>
              <p className="text-2xl font-bold text-octo-dark">{value}</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-octo-red-light text-octo-red flex items-center justify-center">
              {icon}
            </div>
          </div>
        </CardContent>
      </Card>
    </FadeIn>
  );
}

export default function DashboardPage() {
  const { user } = useAuth();
  const { integrations } = useIntegrations();

  const stats = [
    {
      label: "Total Transactions",
      value: "Rp 156.2M",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      label: "Active Integrations",
      value: String(integrations.length),
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      label: "Success Rate",
      value: "99.8%",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      label: "Pending Payouts",
      value: "Rp 4.8M",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <FadeIn direction="down" distance={10}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-octo-dark">
              Welcome back, {user?.name}
            </h1>
            <p className="text-sm text-octo-gray-500 mt-1">
              Here&apos;s what&apos;s happening with your payments today.
            </p>
          </div>
          <Link
            href="/dashboard/integrations/new"
            className="inline-flex items-center px-4 py-2.5 rounded-lg bg-octo-red text-white text-sm font-semibold hover:bg-octo-red-dark transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            New Integration
          </Link>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <StatCard key={s.label} {...s} delay={i * 0.1} />
        ))}
      </div>

      <FadeIn direction="up" delay={0.25}>
        <TransactionChart />
      </FadeIn>

      <FadeIn direction="up" delay={0.35}>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-octo-dark mb-4">
              Recent Integrations
            </h2>
            {integrations.length === 0 ? (
              <div className="text-center py-12">
                <svg
                  className="w-12 h-12 text-octo-gray-300 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
                <p className="text-octo-gray-500 mb-2">No integrations yet</p>
                <Link
                  href="/dashboard/integrations/new"
                  className="text-octo-red text-sm font-semibold hover:underline"
                >
                  Create your first integration
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {integrations.map((integration) => (
                  <Link
                    key={integration.id}
                    href={`/dashboard/integrations/${integration.id}`}
                    className="flex items-center justify-between p-4 rounded-lg border border-octo-gray-200 hover:border-octo-red/20 transition-colors"
                  >
                    <div>
                      <p className="font-medium text-octo-dark">
                        {integration.name}
                      </p>
                      <p className="text-sm text-octo-gray-500">
                        Created{" "}
                        {new Date(integration.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <Badge
                      variant={
                        integration.mode === "live" ? "success" : "warning"
                      }
                    >
                      {integration.mode}
                    </Badge>
                  </Link>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
}
