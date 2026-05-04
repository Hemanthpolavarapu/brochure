"use client";

import { motion } from "framer-motion";
import { Calculator, Layers3, Palette, Ruler, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import BrochureMockup from "@/components/ui/BrochureMockup";
import MagneticButton from "@/components/ui/MagneticButton";
import Reveal from "@/components/ui/Reveal";
import { finishOptions, paperOptions, sizeOptions } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import "./Configurator.css";

export default function Configurator() {
  const [paper, setPaper] = useState(paperOptions[1]);
  const [finish, setFinish] = useState(finishOptions[1]);
  const [size, setSize] = useState(sizeOptions[0]);
  const [quantity, setQuantity] = useState(500);

  const estimate = useMemo(() => {
    const runFactor = quantity / 500;
    const economy = Math.max(0.72, 1 - (quantity - 500) / 9000);
    return Math.round((size.base + paper.modifier + finish.modifier) * runFactor * economy);
  }, [finish.modifier, paper.modifier, quantity, size.base]);

  const previewPalette = [
    paper.tone,
    finish.id === "foil" ? "var(--accent)" : "var(--primary)",
    "var(--text)"
  ];

  return (
    <section className="configurator-section" id="configurator">
      <div className="section-shell config-grid">
        <Reveal className="config-copy">
          <span className="eyebrow">Live print configurator</span>
          <h2 className="section-heading text-balance">Tune the tactile system before you request a proof.</h2>
          <p className="section-copy">
            Paper, finish, size, and run length update the preview and quote estimate in real time,
            keeping the production logic close to the creative decision.
          </p>
        </Reveal>

        <Reveal className="configurator panel" delay={0.08}>
          <div className="config-controls">
            <div className="control-group">
              <div className="control-label">
                <Palette size={17} aria-hidden="true" />
                <span>Paper</span>
              </div>
              <div className="segmented-control">
                {paperOptions.map((option) => (
                  <button
                    className="control-button"
                    data-active={paper.id === option.id}
                    type="button"
                    key={option.id}
                    onClick={() => setPaper(option)}
                    aria-pressed={paper.id === option.id}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="control-group">
              <div className="control-label">
                <SlidersHorizontal size={17} aria-hidden="true" />
                <span>Finish</span>
              </div>
              <div className="segmented-control">
                {finishOptions.map((option) => (
                  <button
                    className="control-button"
                    data-active={finish.id === option.id}
                    type="button"
                    key={option.id}
                    onClick={() => setFinish(option)}
                    aria-pressed={finish.id === option.id}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="control-group">
              <div className="control-label">
                <Ruler size={17} aria-hidden="true" />
                <span>Size</span>
              </div>
              <div className="segmented-control">
                {sizeOptions.map((option) => (
                  <button
                    className="control-button"
                    data-active={size.id === option.id}
                    type="button"
                    key={option.id}
                    onClick={() => setSize(option)}
                    aria-pressed={size.id === option.id}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="control-group">
              <label className="control-label" htmlFor="quantity">
                <Layers3 size={17} aria-hidden="true" />
                <span>Quantity</span>
                <strong>{quantity.toLocaleString()}</strong>
              </label>
              <input
                id="quantity"
                className="quantity-range"
                type="range"
                min="250"
                max="5000"
                step="250"
                value={quantity}
                onChange={(event) => setQuantity(Number(event.target.value))}
              />
            </div>
          </div>

          <motion.div
            className="config-preview"
            key={`${paper.id}-${finish.id}-${size.id}-${quantity}`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            <BrochureMockup
              fold={size.id.includes("gate") ? "gate-fold" : size.id.includes("bifold") ? "bi-fold" : "tri-fold"}
              palette={previewPalette}
              finish={`${paper.grams} / ${finish.label}`}
              active
            />
            <div className="estimate-panel">
              <span>
                <Calculator size={17} aria-hidden="true" />
                Estimate
              </span>
              <strong>{formatCurrency(estimate)}</strong>
              <p>
                {size.panels} on {paper.grams}, {finish.label.toLowerCase()} finish.
              </p>
              <MagneticButton href="#quote" variant="accent">
                Request proof
              </MagneticButton>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
