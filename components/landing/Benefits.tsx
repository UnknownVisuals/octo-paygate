import { FadeIn, FadeInStagger, StaggerItem } from "@/components/animations/FadeIn";

const benefits = [
  {
    stat: "99.9%",
    label: "Uptime SLA",
    description: "Enterprise-grade infrastructure ensuring your payments never go down.",
  },
  {
    stat: "500ms",
    label: "Average Response Time",
    description: "Lightning-fast API responses for the best customer experience.",
  },
  {
    stat: "50+",
    label: "Supported Countries",
    description: "Global coverage with local payment method support.",
  },
  {
    stat: "10K+",
    label: "Active Merchants",
    description: "Trusted by thousands of businesses worldwide.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20 lg:py-28 bg-octo-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Built for <span className="text-octo-red">Performance</span>
            </h2>
            <p className="mt-4 text-lg text-octo-gray-400">
              Our platform is designed to scale with your business.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger staggerDelay={0.12}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <StaggerItem key={b.label}>
                <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur">
                  <div className="text-4xl sm:text-5xl font-bold text-octo-red mb-2">
                    {b.stat}
                  </div>
                  <div className="text-sm font-semibold text-white mb-2">{b.label}</div>
                  <p className="text-sm text-octo-gray-400">{b.description}</p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </FadeInStagger>
      </div>
    </section>
  );
}
