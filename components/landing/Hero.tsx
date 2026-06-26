import { FadeIn } from "@/components/animations/FadeIn";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-white via-octo-red-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn direction="up" distance={20}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-octo-red/10 text-octo-red text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-octo-red animate-pulse" />
              Now available for businesses
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.15} distance={20}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-octo-dark leading-tight">
              Power Your Business with{" "}
              <span className="text-octo-red">Seamless Payments</span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.3} distance={20}>
            <p className="mt-6 text-lg sm:text-xl text-octo-gray-500 leading-relaxed max-w-2xl mx-auto">
              OCTOPayGate provides a modern, secure, and scalable payment
              infrastructure for your business. Accept payments from anywhere in
              the world.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.45} distance={20}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/login"
                className="inline-flex items-center px-8 py-3.5 rounded-xl bg-octo-red text-white font-semibold text-base hover:bg-octo-red-dark transition-all duration-200 shadow-lg shadow-octo-red/25 hover:shadow-xl hover:shadow-octo-red/30"
              >
                Start Free Trial
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center px-8 py-3.5 rounded-xl border-2 border-octo-gray-300 text-octo-gray-700 font-semibold text-base hover:border-octo-red hover:text-octo-red transition-all duration-200"
              >
                Learn More
              </a>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-octo-red/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-octo-red/5 blur-3xl" />
    </section>
  );
}
