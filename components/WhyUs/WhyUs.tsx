"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { trustCards, trustStats } from "@/lib/data";
import "./WhyUs.css";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let started = false;

    const runCounter = () => {
      if (started) {
        return;
      }

      started = true;

      if (reduceMotion) {
        setCount(value);
        return;
      }

      const duration = 1400;
      const start = performance.now();

      const tick = (time: number) => {
        const progress = Math.min((time - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(value * eased));

        if (progress < 1) {
          frame = requestAnimationFrame(tick);
        }
      };

      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runCounter();
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.12
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return <span ref={ref}>{`${count.toLocaleString()}${suffix}`}</span>;
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
        {trustCards.map(({ image, imageAlt, title }, index) => (
          <Reveal className="trust-card panel" delay={index * 0.05} key={title}>
            <div className="trust-icon">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="52px"
                className="trust-thumb"
              />
            </div>
            <h3>{title}</h3>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
