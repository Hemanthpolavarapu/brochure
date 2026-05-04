"use client";

import { motion } from "framer-motion";
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
        <motion.div
          className="cta-background"
          aria-hidden="true"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <div className="cta-copy">
          <span className="eyebrow">Press-ready next step</span>
          <h2>Bring the campaign into people&apos;s hands.</h2>
          <p>
            Share a short brief and get a paper, finish, fold, and price recommendation shaped
            around your launch window.
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
          <MagneticButton href="mailto:hello@brochureatelier.example?subject=Brochure%20quote" variant="accent">
            Email the studio
          </MagneticButton>
          {sent ? <p className="form-state">Brief received. The studio will reply with a proof path.</p> : null}
        </form>
      </div>
    </section>
  );
}
