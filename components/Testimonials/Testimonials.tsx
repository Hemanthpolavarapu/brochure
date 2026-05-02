"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/lib/data";
import "./Testimonials.css";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 5200);

    return () => window.clearInterval(id);
  }, []);

  function go(direction: number) {
    setIndex((current) => (current + direction + testimonials.length) % testimonials.length);
  }

  return (
    <section className="testimonial-section" aria-label="Client testimonials">
      <div className="section-shell testimonial-grid">
        <Reveal>
          <span className="eyebrow">Client signal</span>
          <h2 className="section-heading text-balance">The handoff feels calm because the details are already handled.</h2>
        </Reveal>
        <Reveal className="testimonial-panel panel" delay={0.08}>
          <Quote className="quote-mark" size={40} aria-hidden="true" />
          <AnimatePresence mode="wait">
            <motion.figure
              key={active.name}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote>{active.quote}</blockquote>
              <figcaption>
                <strong>{active.name}</strong>
                <span>{active.role}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
          <div className="testimonial-controls">
            <button className="icon-button" type="button" onClick={() => go(-1)} aria-label="Previous testimonial">
              <ArrowLeft size={18} aria-hidden="true" />
            </button>
            <div className="testimonial-dots" aria-label="Testimonial position">
              {testimonials.map((item, dotIndex) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Show testimonial ${dotIndex + 1}`}
                  aria-pressed={index === dotIndex}
                  onClick={() => setIndex(dotIndex)}
                />
              ))}
            </div>
            <button className="icon-button" type="button" onClick={() => go(1)} aria-label="Next testimonial">
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
