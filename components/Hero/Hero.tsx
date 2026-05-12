"use client";

import Image from "next/image";
import { ArrowDown, Menu, MousePointer2, X } from "lucide-react";
import {
  motion,
  useReducedMotion
} from "framer-motion";
import { Fragment, useState } from "react";
import MagneticButton from "@/components/ui/MagneticButton";
import "./Hero.css";

const words = [
  { text: "Printing", mobileBreak: true },
  { text: "that", mobileBreak: false },
  { text: "makes", mobileBreak: true },
  { text: "brands", mobileBreak: true },
  { text: "feel premium.", mobileBreak: false }
];
const navItems = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Quote", href: "#quote" }
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="hero paper-noise" id="top">
      <header className="site-header section-shell">
        <a className="brand-lockup" href="#top" aria-label="Brochear.com home">
          <span className="brand-mark">
            <Image
              src="/logo.png"
              alt="Brochear.com"
              width={894}
              height={1015}
              priority
              className="brand-logo"
            />
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="icon-button mobile-menu"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
          <MagneticButton href="#quote" variant="accent">
            Start a quote
          </MagneticButton>
        </div>
        <nav
          className="mobile-nav"
          id="mobile-navigation"
          data-open={menuOpen}
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="mobile-nav-quote" href="#quote" onClick={() => setMenuOpen(false)}>
            Start a quote
          </a>
        </nav>
      </header>

      <div className="hero-grid section-shell">
        <div className="hero-copy">
          <motion.span
            className="eyebrow"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
          >
            Commercial printing for modern businesses
          </motion.span>
          <h1 className="hero-title" aria-label="Printing that makes brands feel premium.">
            {words.map((word, index) => (
              <Fragment key={word.text}>
                <motion.span
                  initial={reduceMotion ? false : { opacity: 0, y: 64, rotateX: 18 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.58,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.1 + index * 0.07
                  }}
                >
                  {word.text}
                </motion.span>
                {word.mobileBreak ? <br className="mobile-break" /> : null}
              </Fragment>
            ))}
          </h1>
          <motion.p
            className="hero-subtitle"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1], delay: 0.42 }}
          >
            Professional printing solutions for modern businesses. Brochear turns brochures,
            catalogs, flyers, cards, posters, and corporate collateral into sharp physical brand
            experiences that earn attention the moment they are held.
          </motion.p>
          <motion.div
            className="hero-cta-row"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1], delay: 0.52 }}
          >
            <MagneticButton href="#quote">Get a Quote</MagneticButton>
            <a className="ghost-link" href="#services">
              <MousePointer2 size={18} aria-hidden="true" />
              Explore Services
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92, y: 42 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
        >
          <div className="press-orbit" aria-hidden="true" />
          <div className="hero-paper hero-paper-main">
            <Image
              src="/visuals/hero-paper-1.jpeg"
              alt="Premium commercial print sheets arranged in a modern studio"
              width={900}
              height={900}
              priority
              className="hero-paper-image"
            />
          </div>
          <div className="hero-paper hero-paper-left" aria-hidden="true">
            <Image
              src="/visuals/hero-paper-2.jpeg"
              alt=""
              width={640}
              height={820}
              className="hero-paper-image"
            />
          </div>
          <div className="hero-paper hero-paper-right" aria-hidden="true">
            <Image
              src="/visuals/hero-paper-3.jpeg"
              alt=""
              width={640}
              height={820}
              className="hero-paper-image"
            />
          </div>
          <div className="hero-paper hero-paper-low" aria-hidden="true">
            <Image
              src="/visuals/hero-paper-4.jpeg"
              alt=""
              width={640}
              height={820}
              className="hero-paper-image"
            />
          </div>
          <div className="floating-proof panel">
            <span>Proof accuracy</span>
            <strong>98%</strong>
          </div>
          <div className="ink-register" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </motion.div>
      </div>

      <div className="hero-meta section-shell">
        <span>Offset and digital printing</span>
        <span>CMYK calibration</span>
        <span>Premium finishing</span>
      </div>

      <a className="scroll-cue" href="#services" aria-label="Scroll to printing services">
        <ArrowDown size={18} aria-hidden="true" />
      </a>
    </section>
  );
}
