"use client";

import { useState, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useIntegrations } from "@/components/integration/useIntegrations";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { featureLabels } from "@/components/integration/constants";

export default function IntegrationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const { getIntegrationById, removeIntegration } = useIntegrations();
  const [showKey, setShowKey] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const integration = getIntegrationById(id);

  if (!integration) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-semibold text-octo-dark mb-2">Integration Not Found</h2>
        <p className="text-octo-gray-500 mb-6">
          The integration you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/dashboard/integrations">
          <Button>Back to Integrations</Button>
        </Link>
      </div>
    );
  }

  const handleDelete = () => {
    removeIntegration(integration.id);
    router.push("/dashboard/integrations");
  };

  const maskedKey = integration.apiKey.slice(0, 12) + "••••••••••••";

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <FadeIn direction="down" distance={10}>
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/integrations"
            className="p-2 rounded-lg text-octo-gray-400 hover:text-octo-dark hover:bg-octo-gray-100 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-octo-dark">{integration.name}</h1>
              <Badge variant={integration.mode === "live" ? "success" : "warning"}>
                {integration.mode}
              </Badge>
            </div>
            <p className="text-sm text-octo-gray-500 mt-1">Integration details</p>
          </div>
        </div>
      </FadeIn>

      <FadeIn direction="up" delay={0.1}>
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-octo-dark">General Information</h2>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-octo-gray-500">Application Name</p>
                <p className="font-semibold text-octo-dark">{integration.name}</p>
              </div>
              <div>
                <p className="text-sm text-octo-gray-500">Environment</p>
                <Badge variant={integration.mode === "live" ? "success" : "warning"}>
                  {integration.mode === "live" ? "Live / Production" : "Test / Sandbox"}
                </Badge>
              </div>
              <div>
                <p className="text-sm text-octo-gray-500">Website URL</p>
                <p className="font-semibold text-octo-dark">{integration.website || "—"}</p>
              </div>
              <div>
                <p className="text-sm text-octo-gray-500">Created</p>
                <p className="font-semibold text-octo-dark">
                  {new Date(integration.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm text-octo-gray-500 mb-1">Description</p>
              <p className="text-octo-dark">{integration.description || "No description provided"}</p>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      <FadeIn direction="up" delay={0.15}>
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-octo-dark">Enabled Features</h2>
          </CardHeader>
          <CardContent className="p-6">
            {integration.features.length === 0 ? (
              <p className="text-octo-gray-500 text-sm">No features enabled</p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {integration.features.map((f) => (
                  <Badge key={f} variant="info" className="px-3 py-1">
                    {featureLabels[f] || f}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </FadeIn>

      <FadeIn direction="up" delay={0.2}>
        <Card className="border-2 border-octo-red/10">
          <CardHeader>
            <h2 className="text-lg font-semibold text-octo-dark">API Key</h2>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-2 bg-octo-gray-50 rounded-lg p-3 border border-octo-gray-200">
              <code className="flex-1 text-sm font-mono text-octo-dark break-all">
                {showKey ? integration.apiKey : maskedKey}
              </code>
              <button
                onClick={() => setShowKey(!showKey)}
                className="p-2 rounded-lg hover:bg-octo-gray-200 transition-colors"
                title={showKey ? "Hide key" : "Show key"}
              >
                {showKey ? (
                  <svg className="w-5 h-5 text-octo-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-octo-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
              <button
                onClick={() => navigator.clipboard.writeText(integration.apiKey)}
                className="p-2 rounded-lg hover:bg-octo-gray-200 transition-colors"
                title="Copy key"
              >
                <svg className="w-5 h-5 text-octo-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <p className="text-xs text-yellow-700">
                Keep your API key secure. Never share it publicly or expose it in client-side code.
              </p>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      <FadeIn direction="up" delay={0.25}>
        <Card className="border-red-200">
          <CardHeader>
            <h2 className="text-lg font-semibold text-red-700">Danger Zone</h2>
          </CardHeader>
          <CardContent className="p-6">
            {confirmDelete ? (
              <div className="space-y-3">
                <p className="text-sm text-octo-gray-600">
                  Are you sure? This will permanently delete <strong>{integration.name}</strong> and all associated data. This action cannot be undone.
                </p>
                <div className="flex gap-3">
                  <Button variant="danger" onClick={handleDelete}>Yes, Delete</Button>
                  <Button variant="ghost" onClick={() => setConfirmDelete(false)}>Cancel</Button>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-sm text-octo-gray-500">
                  Once deleted, all API requests using this integration&apos;s key will stop working.
                </p>
                <Button variant="danger" onClick={() => setConfirmDelete(true)}>
                  Delete Integration
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
}
