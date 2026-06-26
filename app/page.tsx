import { PublicHeader } from "@/components/layout/PublicHeader";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { Hero } from "@/components/landing/Hero";
import { FeaturesGrid } from "@/components/landing/FeaturesGrid";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Benefits } from "@/components/landing/Benefits";
import { CTA } from "@/components/landing/CTA";

export default function Home() {
  return (
    <>
      <PublicHeader />
      <main>
        <Hero />
        <FeaturesGrid />
        <HowItWorks />
        <Benefits />
        <CTA />
      </main>
      <PublicFooter />
    </>
  );
}
