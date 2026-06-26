"use client";

import { Input } from "@/components/ui/Input";

interface StepAppInfoProps {
  data: {
    name: string;
    description: string;
    website: string;
    mode: "live" | "test";
  };
  onChange: (data: Partial<StepAppInfoProps["data"]>) => void;
  errors: Record<string, string>;
}

export function StepAppInfo({ data, onChange, errors }: StepAppInfoProps) {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold text-octo-dark">Application Information</h2>
        <p className="text-sm text-octo-gray-500 mt-1">
          Tell us about your application or website.
        </p>
      </div>

      <Input
        label="Application Name"
        placeholder="My E-Commerce Store"
        value={data.name}
        onChange={(e) => onChange({ name: e.target.value })}
        error={errors.name}
      />

      <div>
        <label className="block text-sm font-medium text-octo-gray-700 mb-1.5">
          Description
        </label>
        <textarea
          className="w-full px-4 py-2.5 rounded-lg border border-octo-gray-300 text-octo-gray-900 placeholder-octo-gray-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-octo-red focus:border-transparent hover:border-octo-gray-400 resize-none"
          rows={3}
          placeholder="Brief description of your application"
          value={data.description}
          onChange={(e) => onChange({ description: e.target.value })}
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-600">{errors.description}</p>
        )}
      </div>

      <Input
        label="Website URL"
        placeholder="https://example.com"
        value={data.website}
        onChange={(e) => onChange({ website: e.target.value })}
        error={errors.website}
      />

      <div>
        <label className="block text-sm font-medium text-octo-gray-700 mb-2">
          Environment Mode
        </label>
        <div className="flex gap-3">
          {(["test", "live"] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => onChange({ mode })}
              className={`flex-1 px-4 py-3 rounded-lg border-2 text-sm font-semibold transition-all duration-200 ${
                data.mode === mode
                  ? "border-octo-red bg-octo-red-light text-octo-red"
                  : "border-octo-gray-200 text-octo-gray-600 hover:border-octo-gray-300"
              }`}
            >
              {mode === "test" ? "Test / Sandbox" : "Live / Production"}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
