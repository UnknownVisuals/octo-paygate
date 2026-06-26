"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface StepApiKeyProps {
  apiKey: string;
  appName: string;
}

export function StepApiKey({ apiKey, appName }: StepApiKeyProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob(
      [
        `# OCTOPayGate API Key\n# Application: ${appName}\n# Generated: ${new Date().toISOString()}\n\nOCTO_API_KEY=${apiKey}\n`,
      ],
      { type: "text/plain" },
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${appName.toLowerCase().replace(/\s+/g, "-")}-api-key.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-5">
      <div className="text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-octo-dark">
          Integration Created!
        </h2>
        <p className="text-sm text-octo-gray-500 mt-1">
          Your API key has been generated. Save it somewhere safe — you
          won&apos;t be able to see it again.
        </p>
      </div>

      <Card className="border-2 border-octo-red/20">
        <CardContent className="p-6">
          <p className="text-xs font-medium text-octo-gray-500 uppercase tracking-wider mb-2">
            Your API Key
          </p>
          <div className="flex items-center gap-2 bg-octo-gray-50 rounded-lg p-3 border border-octo-gray-200">
            <code className="flex-1 text-sm font-mono text-octo-dark break-all">
              {apiKey}
            </code>
            <button
              onClick={handleCopy}
              className="shrink-0 p-2 rounded-lg hover:bg-octo-gray-200 transition-colors"
              title="Copy to clipboard"
            >
              {copied ? (
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-octo-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              )}
            </button>
          </div>
        </CardContent>
      </Card>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
        <div className="flex gap-3">
          <svg
            className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
          <div>
            <p className="text-sm font-semibold text-yellow-800">Important</p>
            <p className="text-sm text-yellow-700 mt-1">
              This is the only time you&apos;ll see your API key. Make sure to
              copy or download it now. For security, store it as an environment
              variable in your application.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" className="flex-1" onClick={handleDownload}>
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
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Download
        </Button>
        <Button variant="primary" className="flex-1" onClick={handleCopy}>
          {copied ? "Copied!" : "Copy Key"}
        </Button>
      </div>

      <div className="text-center">
        <Link
          href="/dashboard/integrations"
          className="text-sm font-semibold text-octo-red hover:underline"
        >
          Back to Integrations
        </Link>
      </div>
    </div>
  );
}
