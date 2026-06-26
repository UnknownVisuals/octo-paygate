import { FadeIn, FadeInStagger, StaggerItem } from "@/components/animations/FadeIn";

const steps = [
  {
    step: 1,
    title: "Create Your Account",
    description: "Sign up for free and set up your business profile in minutes.",
  },
  {
    step: 2,
    title: "Get Your API Key",
    description: "Generate a unique API key for your integration with one click.",
  },
  {
    step: 3,
    title: "Integrate the SDK",
    description: "Use our SDKs or REST API to start accepting payments right away.",
  },
  {
    step: 4,
    title: "Go Live & Grow",
    description: "Launch in production and start processing real transactions.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-octo-dark">
              How It <span className="text-octo-red">Works</span>
            </h2>
            <p className="mt-4 text-lg text-octo-gray-500">
              Get started with your payment gateway in just a few steps.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger staggerDelay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <StaggerItem key={s.step}>
                <div className="relative text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-octo-red-light text-octo-red flex items-center justify-center mx-auto mb-5 group-hover:bg-octo-red group-hover:text-white transition-all duration-300">
                    <span className="text-2xl font-bold">{s.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-octo-dark mb-2">{s.title}</h3>
                  <p className="text-sm text-octo-gray-500 leading-relaxed">{s.description}</p>
                  {s.step < 4 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-[calc(100%-24px)] h-0.5 border-t-2 border-dashed border-octo-gray-200" />
                  )}
                </div>
              </StaggerItem>
            ))}
          </div>
        </FadeInStagger>
      </div>
    </section>
  );
}
