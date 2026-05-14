import BrochureShowcase from "@/components/BrochureShowcase/BrochureShowcase";
import Configurator from "@/components/Configurator/Configurator";
import CTA from "@/components/CTA/CTA";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Portfolio from "@/components/Portfolio/Portfolio";
import SmoothScroll from "@/components/SmoothScroll";
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
      telephone: "+91-9951499488",
      contactType: "sales",
      areaServed: "International",
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
    "@type": "Service",
    name: "Premium Commercial Printing",
    brand: {
      "@type": "Brand",
      name: "Brochear.com"
    },
    description:
      "Premium commercial printing for brochures, catalogs, flyers, business cards, posters, booklets, corporate materials, digital printing, and offset printing.",
    serviceType: "Commercial Printing",
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
        <Configurator />
        <WhyUs />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
