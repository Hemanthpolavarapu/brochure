"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import MagneticButton from "@/components/ui/MagneticButton";
import "./CTA.css";

export default function CTA() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section className="cta-section" id="quote">
      <div className="section-shell cta-panel">
        <div className="cta-copy">
          <span className="eyebrow">Get a print quote</span>
          <h2>Make your next print run look unmistakably premium.</h2>
          <p>
            Tell us what you need printed and we&apos;ll recommend the right production path,
            paper, finish, quantity, and delivery plan for a result your business can trust.
          </p>
        </div>
        <form className="quote-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Work email</label>
          <div className="email-row">
            <input id="email" name="email" type="email" placeholder="you@company.com" required />
            <button className="icon-button" type="submit" aria-label="Send quote request">
              <Send size={18} aria-hidden="true" />
            </button>
          </div>
          <MagneticButton href="mailto:hello@brochear.com?subject=Printing%20quote" variant="accent">
            Email Brochear
          </MagneticButton>
          {sent ? <p className="form-state">Quote request received. Brochear will reply with a clear print plan.</p> : null}
        </form>
      </div>
    </section>
  );
}
