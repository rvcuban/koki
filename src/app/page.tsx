import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { CallToAction } from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />

        {/* Client logos — coming soon */}

        <HowItWorks />

        <section id="features" className="px-4 py-24">
          {/* Features section — coming soon */}
        </section>

        {/* Testimonials — coming soon */}

        <Pricing />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
