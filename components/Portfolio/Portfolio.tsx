"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Filter, X } from "lucide-react";
import { useMemo, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { portfolioItems } from "@/lib/data";
import "./Portfolio.css";

type PortfolioItem = (typeof portfolioItems)[number];

export default function Portfolio() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(portfolioItems.map((item) => item.category)))],
    []
  );
  const [category, setCategory] = useState("All");
  const [active, setActive] = useState<PortfolioItem | null>(null);

  const visible = category === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === category);

  return (
    <section className="portfolio-section" id="work">
      <div className="section-shell portfolio-intro">
        <Reveal>
          <span className="eyebrow">Print showcase</span>
          <h2 className="section-heading text-balance">A gallery of print that feels polished before a word is read.</h2>
        </Reveal>
        <Reveal className="portfolio-filter-wrap" delay={0.08}>
          <div className="portfolio-filter" aria-label="Portfolio filters">
            <Filter size={17} aria-hidden="true" />
            {categories.map((item) => (
              <button
                className="control-button"
                data-active={category === item}
                type="button"
                key={item}
                onClick={() => setCategory(item)}
                aria-pressed={category === item}
              >
                {item}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="section-shell masonry-grid">
        <AnimatePresence mode="popLayout">
          {visible.map((item) => (
            <motion.button
              type="button"
              className={`portfolio-tile portfolio-${item.height}`}
              key={item.id}
              onClick={() => setActive(item)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              aria-label={`Open ${item.title} portfolio preview`}
            >
              <Image
                src={item.image}
                alt={`${item.title} commercial print sample`}
                fill
                sizes="(max-width: 720px) 100vw, (max-width: 1120px) 50vw, 33vw"
                className="portfolio-image"
              />
              <span className="portfolio-overlay">
                <strong>{item.title}</strong>
                <em>{item.finish}</em>
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="portfolio-lightbox"
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolio-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button className="portfolio-backdrop" type="button" onClick={() => setActive(null)} aria-label="Close portfolio preview" />
            <motion.div
              className="portfolio-preview panel"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.97 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              <button className="icon-button preview-close" type="button" onClick={() => setActive(null)} aria-label="Close portfolio preview">
                <X size={18} aria-hidden="true" />
              </button>
              <div className="preview-image-wrap">
                <Image
                  src={active.image}
                  alt={`${active.title} full commercial print preview`}
                  fill
                  sizes="(max-width: 920px) 100vw, 58vw"
                  className="preview-image"
                />
              </div>
              <div className="preview-copy">
                <span className="tag">{active.category}</span>
                <h3 id="portfolio-title">{active.title}</h3>
                <p>{active.finish}</p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
