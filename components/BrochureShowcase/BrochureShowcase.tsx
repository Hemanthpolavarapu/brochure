"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Maximize2, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { brochureTypes, serviceCards } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import "./BrochureShowcase.css";

type Brochure = (typeof brochureTypes)[number];

function ShowcaseCard({ item, onOpen }: { item: Brochure; onOpen: (item: Brochure) => void }) {
  return (
    <motion.button
      type="button"
      className="showcase-card panel"
      onClick={() => onOpen(item)}
      whileTap={{ scale: 0.985 }}
      aria-label={`Open ${item.name} details`}
    >
      <div className="showcase-card-top">
        <span className="tag">{item.fold}</span>
        <Maximize2 size={18} aria-hidden="true" />
      </div>
      <div className="showcase-photo-wrap">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 780px) 76vw, 265px"
          className="showcase-photo"
        />
      </div>
      <div className="showcase-card-copy">
        <h3>{item.name}</h3>
      </div>
      <div className="spec-drawer" aria-hidden="true">
        <span>{item.paper}</span>
        <strong>{item.price}</strong>
      </div>
    </motion.button>
  );
}

export default function BrochureShowcase() {
  const railRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState<Brochure | null>(null);

  function scrollByCard(direction: number) {
    railRef.current?.scrollBy({
      left: direction * Math.min(440, window.innerWidth * 0.82),
      behavior: "smooth"
    });
  }

  return (
    <section className="showcase-section" id="services">
      <div className="section-shell showcase-heading">
        <Reveal>
          <span className="eyebrow">Printing services</span>
          <h2 className="section-heading text-balance">Commercial print materials made to look expensive.</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="section-copy">
            From high-volume offset runs to fast digital projects, Brochear gives every printed
            piece the same premium discipline: sharp files, refined paper, clean finishing, and
            confident delivery.
          </p>
        </Reveal>
      </div>

      <div className="section-shell service-card-grid">
        {serviceCards.map(({ image, imageAlt, title }, index) => (
          <Reveal className="service-card panel" delay={index * 0.035} key={title}>
            <div className="service-icon">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="52px"
                className="service-thumb"
              />
            </div>
            <h3>{title}</h3>
          </Reveal>
        ))}
      </div>

      <div className="showcase-controls section-shell" aria-label="Featured print carousel controls">
        <button className="icon-button" type="button" onClick={() => scrollByCard(-1)} aria-label="Previous brochure">
          <ArrowLeft size={18} aria-hidden="true" />
        </button>
        <button className="icon-button" type="button" onClick={() => scrollByCard(1)} aria-label="Next brochure">
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>

      <div className="showcase-rail hide-scrollbar" ref={railRef} aria-label="Featured print format showcase">
        {brochureTypes.map((item) => (
          <ShowcaseCard item={item} key={item.id} onOpen={setActive} />
        ))}
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="detail-overlay"
            role="dialog"
            aria-modal="true"
            aria-labelledby="brochure-detail-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button className="detail-backdrop" type="button" aria-label="Close detail panel" onClick={() => setActive(null)} />
            <motion.div
              className="detail-panel panel"
              initial={{ opacity: 0, y: 36, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              <button className="icon-button detail-close" type="button" onClick={() => setActive(null)} aria-label="Close detail panel">
                <X size={18} aria-hidden="true" />
              </button>
              <div className="detail-photo-wrap">
                <Image
                  src={active.image}
                  alt={active.imageAlt}
                  fill
                  sizes="(max-width: 780px) 90vw, 420px"
                  className="showcase-photo"
                />
              </div>
              <div className="detail-copy">
                <span className="eyebrow">{active.fold}</span>
                <h3 id="brochure-detail-title">{active.name}</h3>
                <p>{active.tagline}</p>
                <dl>
                  <div>
                    <dt>Paper</dt>
                    <dd>{active.paper}</dd>
                  </div>
                  <div>
                    <dt>Finish</dt>
                    <dd>{active.finish}</dd>
                  </div>
                  <div>
                    <dt>Lead time</dt>
                    <dd>{active.leadTime}</dd>
                  </div>
                  <div>
                    <dt>Pricing</dt>
                    <dd>{active.price}</dd>
                  </div>
                </dl>
                <div className="detail-tags">
                  {active.specs.map((spec) => (
                    <span className="tag" key={spec}>
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
