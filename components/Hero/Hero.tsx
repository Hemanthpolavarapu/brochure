"use client";

import Image from "next/image";
import { ArrowDown, Menu, MousePointer2 } from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform
} from "framer-motion";
import { Fragment } from "react";
import MagneticButton from "@/components/ui/MagneticButton";
import "./Hero.css";

const words = [
  { text: "Brochures", mobileBreak: true },
  { text: "built", mobileBreak: false },
  { text: "to", mobileBreak: true },
  { text: "move", mobileBreak: true },
  { text: "people.", mobileBreak: false }
];
const navItems = [
  { label: "Brochures", href: "#brochures" },
  { label: "Process", href: "#process" },
  { label: "Configurator", href: "#configurator" },
  { label: "Work", href: "#work" }
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const pointerX = useSpring(useMotionValue(0), { stiffness: 90, damping: 20 });
  const pointerY = useSpring(useMotionValue(0), { stiffness: 90, damping: 20 });
  const rotateX = useTransform(pointerY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(pointerX, [-0.5, 0.5], [-10, 10]);

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (reduceMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section className="hero paper-noise" id="top" onPointerMove={handlePointerMove}>
      <div className="hero-gradient" aria-hidden="true" />
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
          <button className="icon-button mobile-menu" type="button" aria-label="Open navigation">
            <Menu size={18} aria-hidden="true" />
          </button>
          <MagneticButton href="#quote" variant="accent">
            Start a quote
          </MagneticButton>
        </div>
      </header>

      <div className="hero-grid section-shell">
        <div className="hero-copy">
          <motion.span
            className="eyebrow"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
          >
            Premium advertising print
          </motion.span>
          <h1 className="hero-title" aria-label="Brochures built to move people.">
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
            High-touch brochure design, precision folds, premium paper, and campaign-ready
            delivery for brands that need print to feel as engineered as their digital product.
          </motion.p>
          <motion.div
            className="hero-cta-row"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1], delay: 0.52 }}
          >
            <MagneticButton href="#configurator">Build your brochure</MagneticButton>
            <a className="ghost-link" href="#work">
              <MousePointer2 size={18} aria-hidden="true" />
              Explore finished work
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          style={{ rotateX, rotateY }}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92, y: 42 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
        >
          <div className="press-orbit" aria-hidden="true" />
          <Image
            src="/visuals/hero-press-sheet.png"
            alt="Layered premium brochure sheets with warm paper, terracotta, and plum ink tones"
            width={900}
            height={900}
            priority
            className="hero-visual-image"
          />
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
        <span>Fold strategy</span>
        <span>CMYK calibration</span>
        <span>Finish prototyping</span>
      </div>

      <a className="scroll-cue" href="#brochures" aria-label="Scroll to brochure showcase">
        <ArrowDown size={18} aria-hidden="true" />
      </a>
    </section>
  );
}
