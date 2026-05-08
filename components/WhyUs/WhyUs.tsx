"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Reveal from "@/components/ui/Reveal";
import { trustCards, trustStats } from "@/lib/data";
import "./WhyUs.css";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const next = Math.round(latest);
    return `${next.toLocaleString()}${suffix}`;
  });

  useEffect(() => {
    if (!inView) {
      return;
    }

    const controls = animate(count, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1]
    });

    return controls.stop;
  }, [count, inView, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function WhyUs() {
  return (
    <section className="why-section">
      <div className="section-shell why-grid">
        <Reveal>
          <span className="eyebrow">Why choose us</span>
          <h2 className="section-heading text-balance">Premium print quality with business-grade reliability.</h2>
        </Reveal>
        <div className="stats-grid" aria-label="Company proof points">
          {trustStats.map((stat) => (
            <Reveal className="stat-card panel" key={stat.label}>
              <Counter value={stat.value} suffix={stat.suffix} />
              <p>{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="section-shell trust-card-grid">
        {trustCards.map(({ Icon, title }, index) => (
          <Reveal className="trust-card panel" delay={index * 0.05} key={title}>
            <div className="trust-icon">
              <Icon size={22} aria-hidden="true" />
            </div>
            <h3>{title}</h3>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
