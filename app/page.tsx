import BrochureShowcase from "@/components/BrochureShowcase/BrochureShowcase";
import Configurator from "@/components/Configurator/Configurator";
import CTA from "@/components/CTA/CTA";
import DebugPaletteSwitcher from "@/components/DebugPaletteSwitcher/DebugPaletteSwitcher";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Portfolio from "@/components/Portfolio/Portfolio";
import SmoothScroll from "@/components/SmoothScroll";
import StorySection from "@/components/StorySection/StorySection";
import Testimonials from "@/components/Testimonials/Testimonials";
import WhyUs from "@/components/WhyUs/WhyUs";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Brochear.com",
    url: "https://brochure-atelier.example",
    logo: "https://brochure-atelier.example/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-0184",
      contactType: "sales",
      areaServed: "US",
      availableLanguage: ["English"]
    },
    sameAs: [
      "https://www.instagram.com/",
      "https://www.linkedin.com/",
      "https://www.behance.net/"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Custom Premium Brochure Printing",
    brand: {
      "@type": "Brand",
      name: "Brochure Atelier"
    },
    description:
      "Custom bi-fold, tri-fold, z-fold, and gate-fold brochures with premium paper stocks, specialty finishes, proofing, and delivery.",
    category: "Commercial Printing",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "186",
      highPrice: "1260",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock"
    }
  }
];

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main>
        <Hero />
        <BrochureShowcase />
        <StorySection />
        <Configurator />
        <WhyUs />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <DebugPaletteSwitcher />
    </>
  );
}
