"use client";

import Reveal from "@/components/ui/Reveal";
import { industries } from "@/lib/data";
import "./Industries.css";

export default function Industries() {
  return (
    <section className="industries-section" id="industries">
      <div className="section-shell industries-intro">
        <Reveal>
          <span className="eyebrow">Industries served</span>
          <h2 className="section-heading text-balance">Print support for businesses that need every touchpoint to feel credible.</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="section-copy">
            We produce polished commercial print materials for teams across retail, real estate,
            healthcare, hospitality, education, finance, and professional services.
          </p>
        </Reveal>
      </div>

      <div className="section-shell industries-grid">
        {industries.map(({ Icon, title }, index) => (
          <Reveal className="industry-card panel" delay={index * 0.045} key={title}>
            <div className="industry-icon">
              <Icon size={22} aria-hidden="true" />
            </div>
            <div>
              <h3>{title}</h3>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
