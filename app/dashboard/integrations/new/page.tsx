"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { StepWizard } from "@/components/integration/StepWizard";
import { StepAppInfo } from "@/components/integration/StepAppInfo";
import { StepFeatures } from "@/components/integration/StepFeatures";
import { StepReview } from "@/components/integration/StepReview";
import { StepApiKey } from "@/components/integration/StepApiKey";
import { useIntegrations } from "@/components/integration/useIntegrations";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SlideIn } from "@/components/animations/PageTransition";
import { FadeIn } from "@/components/animations/FadeIn";

export default function NewIntegrationPage() {
  const router = useRouter();
  const { addIntegration } = useIntegrations();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    website: "",
    mode: "test" as "live" | "test",
    features: [] as string[],
  });

  const updateData = (partial: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...partial }));
    setErrors({});
  };

  const validateStep = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (step === 0) {
      if (!formData.name.trim()) newErrors.name = "Application name is required";
      if (!formData.website.trim()) newErrors.website = "Website URL is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 0 && !validateStep()) return;
    if (step === 1 && formData.features.length === 0) return;
    if (step === 2) {
      setLoading(true);
      setTimeout(() => {
        const integration = addIntegration(formData);
        setApiKey(integration.apiKey);
        setLoading(false);
        setStep(3);
      }, 1000);
      return;
    }
    setStep((s) => Math.min(s + 1, 3));
  };

  const handleBack = () => {
    setStep((s) => Math.max(s - 1, 0));
  };

  const stepDirection = step === 0 ? "right" : step === 3 ? "left" : "right";

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <FadeIn direction="down" distance={10}>
        <div>
          <h1 className="text-2xl font-bold text-octo-dark">Create New Integration</h1>
          <p className="text-sm text-octo-gray-500 mt-1">
            Set up a new payment gateway integration for your application.
          </p>
        </div>
      </FadeIn>

      {step < 3 && <StepWizard currentStep={step} />}

      <Card>
        <CardContent className="p-6 lg:p-8">
          <AnimatePresence mode="wait">
            <SlideIn key={step} direction={stepDirection}>
              {step === 0 && (
                <StepAppInfo
                  data={formData}
                  onChange={updateData}
                  errors={errors}
                />
              )}
              {step === 1 && (
                <StepFeatures
                  selected={formData.features}
                  onChange={(features) => updateData({ features })}
                />
              )}
              {step === 2 && <StepReview data={formData} />}
              {step === 3 && <StepApiKey apiKey={apiKey} appName={formData.name} />}
            </SlideIn>
          </AnimatePresence>
        </CardContent>
      </Card>

      {step < 3 && (
        <div className="flex justify-between">
          <Button
            variant="ghost"
            onClick={step === 0 ? () => router.push("/dashboard/integrations") : handleBack}
          >
            {step === 0 ? "Cancel" : "Back"}
          </Button>
          <Button onClick={handleNext} loading={loading}>
            {step === 2 ? "Create Integration" : "Continue"}
          </Button>
        </div>
      )}
    </div>
  );
}
