import { Card, CardContent } from "@/components/ui/Card";
import { FadeIn, FadeInStagger, StaggerItem } from "@/components/animations/FadeIn";

const features = [
  {
    title: "Multiple Payment Methods",
    description: "Accept credit cards, e-wallets, bank transfers, and more with a single integration.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    title: "Real-Time Analytics",
    description: "Monitor transactions, track revenue, and gain insights with live dashboards.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Enterprise Security",
    description: "PCI DSS compliant with end-to-end encryption and fraud detection.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Developer Friendly",
    description: "Simple REST API with comprehensive documentation and SDKs for major languages.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Automatic Webhooks",
    description: "Get real-time notifications for payment events with reliable webhook delivery.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: "Global Coverage",
    description: "Process payments in multiple currencies across 50+ countries worldwide.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export function FeaturesGrid() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-octo-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-octo-dark">
              Everything You Need to{" "}
              <span className="text-octo-red">Accept Payments</span>
            </h2>
            <p className="mt-4 text-lg text-octo-gray-500">
              A complete payment platform designed to help your business grow.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <StaggerItem key={f.title}>
                <Card hover>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-octo-red-light text-octo-red flex items-center justify-center mb-4">
                      {f.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-octo-dark mb-2">
                      {f.title}
                    </h3>
                    <p className="text-sm text-octo-gray-500 leading-relaxed">
                      {f.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </FadeInStagger>
      </div>
    </section>
  );
}
