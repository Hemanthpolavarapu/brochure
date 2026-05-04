"use client";

import { useEffect, useRef } from "react";
import { storySteps } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import "./StorySection.css";

export default function StorySection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    async function boot() {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion || !sectionRef.current) {
        return;
      }

      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.gsap;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const context = gsap.context(() => {
        const path = sectionRef.current?.querySelector<SVGPathElement>(".story-line-path");
        if (path) {
          const length = path.getTotalLength();
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
          gsap.to(path, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top center",
              end: "bottom center",
              scrub: 0.7
            }
          });
        }

        gsap.utils.toArray<HTMLElement>(".story-step").forEach((step) => {
          gsap.fromTo(
            step,
            { opacity: 0.32, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "power3.out",
              scrollTrigger: {
                trigger: step,
                start: "top 70%",
                end: "bottom 42%",
                scrub: 0.25
              }
            }
          );
        });
      }, sectionRef);

      cleanup = () => context.revert();
    }

    boot();

    return () => cleanup?.();
  }, []);

  return (
    <section className="story-section" id="process" ref={sectionRef}>
      <div className="section-shell story-intro">
        <Reveal>
          <span className="eyebrow">Scrollytelling workflow</span>
          <h2 className="section-heading text-balance">From blank panel to campaign-ready delivery.</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="section-copy">
            The production path stays visible while the page moves, connecting creative choices
            with press realities and fulfillment constraints.
          </p>
        </Reveal>
      </div>

      <div className="story-board section-shell">
        <div className="story-sticky panel" aria-hidden="true">
          <svg className="story-line" viewBox="0 0 500 620" fill="none">
            <path
              className="story-line-path"
              d="M84 68 C 360 86, 102 190, 306 250 S 410 424, 122 474 C 76 486, 104 548, 420 554"
              stroke="url(#storyGradient)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="storyGradient" x1="66" x2="430" y1="72" y2="552">
                <stop stopColor="var(--surface)" />
                <stop offset="0.48" stopColor="var(--accent)" />
                <stop offset="1" stopColor="var(--primary)" />
              </linearGradient>
            </defs>
          </svg>
          <div className="press-stage">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="story-steps">
          {storySteps.map((step, index) => (
            <article className="story-step panel" key={step.label}>
              <span className="story-index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.label}</h3>
              <strong>{step.title}</strong>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
