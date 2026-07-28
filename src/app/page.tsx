import Header from "@/components/header";
import Hero from "@/components/hero";
import SocialProof from "@/components/social-proof";
import Projects from "@/components/projects";
import Features from "@/components/features";
import Certifications from "@/components/certifications";
import Achievements from "@/components/achievements";
import WhyChoose from "@/components/why-choose";
import Journey from "@/components/journey";
import FAQ from "@/components/faq";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";
import ChatWidget from "@/components/chat-widget";
import { getFAQSchema } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFAQSchema()),
        }}
      />

      {/* Floating AI Chat Assistant */}
      <ChatWidget />

      {/* Navigation Header */}
      <Header />

      {/* Main Page Layout */}
      <main className="flex flex-col gap-0">
        <Hero />
        <SocialProof />
        <Projects />
        <Features />
        <Certifications />
        <Achievements />
        <WhyChoose />
        <Journey />
        <FAQ />
        <CtaSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
