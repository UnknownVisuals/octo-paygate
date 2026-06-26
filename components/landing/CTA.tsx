import { FadeIn } from "@/components/animations/FadeIn";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-linear-to-br from-octo-red to-octo-red-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn direction="up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ready to Transform Your Payment Experience?
          </h2>
        </FadeIn>
        <FadeIn direction="up" delay={0.15}>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            Join thousands of businesses that trust OCTOPayGate for their
            payment processing. Start your free trial today — no credit card
            required.
          </p>
        </FadeIn>
        <FadeIn direction="up" delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/login"
              className="inline-flex items-center px-8 py-3.5 rounded-xl bg-white text-octo-red font-semibold text-base hover:bg-octo-gray-100 transition-all duration-200 shadow-lg"
            >
              Get Started Free
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
              href="#"
              className="inline-flex items-center px-8 py-3.5 rounded-xl border-2 border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-all duration-200"
            >
              Talk to Sales
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
