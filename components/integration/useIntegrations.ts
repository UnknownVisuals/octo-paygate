"use client";

import { useState, useCallback } from "react";

export interface Integration {
  id: string;
  name: string;
  description: string;
  website: string;
  mode: "live" | "test";
  features: string[];
  apiKey: string;
  createdAt: string;
}

function generateApiKey(): string {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const segments = [8, 4, 4, 12];
  return "octo_" + segments
    .map((len) =>
      Array.from({ length: len }, () => chars[Math.floor(Math.random() * chars.length)]).join("")
    )
    .join("_");
}

function getInitialIntegrations(): Integration[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem("octo_integrations");
  return stored ? JSON.parse(stored) : [];
}

function persist(updated: Integration[]) {
  localStorage.setItem("octo_integrations", JSON.stringify(updated));
}

export function useIntegrations() {
  const [integrations, setIntegrations] = useState<Integration[]>(getInitialIntegrations);

  const addIntegration = useCallback(
    (data: {
      name: string;
      description: string;
      website: string;
      mode: "live" | "test";
      features: string[];
    }) => {
      const integration: Integration = {
        id: crypto.randomUUID?.() ?? Date.now().toString(36),
        ...data,
        apiKey: generateApiKey(),
        createdAt: new Date().toISOString(),
      };
      const updated = [integration, ...integrations];
      setIntegrations(updated);
      persist(updated);
      return integration;
    },
    [integrations]
  );

  const getIntegrationById = useCallback(
    (id: string) => integrations.find((i) => i.id === id) ?? null,
    [integrations]
  );

  const removeIntegration = useCallback(
    (id: string) => {
      const updated = integrations.filter((i) => i.id !== id);
      setIntegrations(updated);
      persist(updated);
    },
    [integrations]
  );

  return { integrations, addIntegration, getIntegrationById, removeIntegration };
}
