"use client";

const availableFeatures = [
  {
    id: "card_payments",
    label: "Card Payments",
    description: "Accept Visa, Mastercard, and other credit/debit cards",
  },
  {
    id: "ewallet",
    label: "E-Wallet",
    description: "Accept payments from GoPay, OVO, Dana, LinkAja, ShopeePay",
  },
  {
    id: "bank_transfer",
    label: "Bank Transfer",
    description: "Accept payments via virtual account bank transfers",
  },
  {
    id: "qris",
    label: "QRIS",
    description: "Accept payments using QRIS standard QR codes",
  },
  {
    id: "webhook",
    label: "Webhooks",
    description: "Receive real-time payment status notifications",
  },
  {
    id: "recurring",
    label: "Recurring Billing",
    description: "Set up subscription and recurring payment plans",
  },
];

interface StepFeaturesProps {
  selected: string[];
  onChange: (features: string[]) => void;
}

export function StepFeatures({ selected, onChange }: StepFeaturesProps) {
  const toggle = (id: string) => {
    if (selected.includes(id)) {
      onChange(selected.filter((f) => f !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold text-octo-dark">Choose Features</h2>
        <p className="text-sm text-octo-gray-500 mt-1">
          Select the payment features you want to enable.
        </p>
      </div>

      <div className="grid gap-3">
        {availableFeatures.map((feature) => {
          const isSelected = selected.includes(feature.id);
          return (
            <button
              key={feature.id}
              type="button"
              onClick={() => toggle(feature.id)}
              className={`flex items-start gap-4 p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                isSelected
                  ? "border-octo-red bg-octo-red-light"
                  : "border-octo-gray-200 hover:border-octo-gray-300"
              }`}
            >
              <div
                className={`w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5 transition-colors ${
                  isSelected
                    ? "bg-octo-red border-octo-red"
                    : "border-octo-gray-300"
                }`}
              >
                {isSelected && (
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <div>
                <p className="font-semibold text-octo-dark">{feature.label}</p>
                <p className="text-sm text-octo-gray-500">{feature.description}</p>
              </div>
            </button>
          );
        })}
      </div>

      {selected.length === 0 && (
        <p className="text-sm text-octo-gray-400 text-center">
          Select at least one feature to continue
        </p>
      )}
    </div>
  );
}
