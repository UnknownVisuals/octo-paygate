"use client";

import Link from "next/link";
import { useIntegrations } from "@/components/integration/useIntegrations";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn, FadeInStagger, StaggerItem } from "@/components/animations/FadeIn";
import { featureLabels } from "@/components/integration/constants";

export default function IntegrationsPage() {
  const { integrations } = useIntegrations();

  return (
    <div className="space-y-6">
      <FadeIn direction="down" distance={10}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-octo-dark">Integrations</h1>
            <p className="text-sm text-octo-gray-500 mt-1">
              Manage your payment gateway integrations.
            </p>
          </div>
          <Link href="/dashboard/integrations/new">
            <Button>
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              New Integration
            </Button>
          </Link>
        </div>
      </FadeIn>

      {integrations.length === 0 ? (
        <FadeIn direction="up" delay={0.1}>
          <Card>
            <CardContent className="p-12 text-center">
              <svg className="w-16 h-16 text-octo-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
              <h2 className="text-xl font-semibold text-octo-dark mb-2">No Integrations Yet</h2>
              <p className="text-octo-gray-500 mb-6">
                Create your first payment gateway integration to get started.
              </p>
              <Link href="/dashboard/integrations/new">
                <Button size="lg">Create Integration</Button>
              </Link>
            </CardContent>
          </Card>
        </FadeIn>
      ) : (
        <FadeInStagger>
          <div className="grid gap-4">
            {integrations.map((integration) => (
              <StaggerItem key={integration.id}>
                <Link href={`/dashboard/integrations/${integration.id}`}>
                  <Card hover>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-octo-dark">
                              {integration.name}
                            </h3>
                            <Badge
                              variant={integration.mode === "live" ? "success" : "warning"}
                            >
                              {integration.mode}
                            </Badge>
                          </div>
                          <p className="text-sm text-octo-gray-500 mb-3">
                            {integration.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {integration.features.map((f) => (
                              <Badge key={f} variant="info">
                                {featureLabels[f] || f}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="text-right text-sm text-octo-gray-400">
                          Created {new Date(integration.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </div>
        </FadeInStagger>
      )}
    </div>
  );
}
