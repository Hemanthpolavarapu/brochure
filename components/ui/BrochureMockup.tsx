"use client";

import { motion } from "framer-motion";

type BrochureMockupProps = {
  fold?: "bi-fold" | "tri-fold" | "z-fold" | "gate-fold" | string;
  palette?: string[];
  finish?: string;
  active?: boolean;
};

export default function BrochureMockup({
  fold = "tri-fold",
  palette = ["#D9D0C7", "#A05B3C", "#2C1C1D"],
  finish = "Soft-touch",
  active = false
}: BrochureMockupProps) {
  const panelCount = fold === "bi-fold" ? 2 : fold === "gate-fold" ? 4 : 3;
  const panels = Array.from({ length: panelCount });

  return (
    <motion.div
      className="brochure-mockup"
      data-fold={fold}
      data-active={active}
      animate={{ rotate: active ? -1.5 : 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={
        {
          "--tone-a": palette[0],
          "--tone-b": palette[1],
          "--tone-c": palette[2]
        } as React.CSSProperties
      }
    >
      <div className="mock-shadow" />
      <div className="mock-sheet">
        {panels.map((_, index) => (
          <motion.span
            key={index}
            className="mock-panel"
            initial={false}
            animate={{
              rotateY:
                active && fold === "gate-fold"
                  ? index < 2
                    ? -8 + index * 3
                    : 8 - index
                  : active && fold === "z-fold"
                    ? index % 2 === 0
                      ? -5
                      : 6
                    : active
                      ? index * 2 - 2
                      : 0
            }}
            transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
          >
            <i />
            <b />
          </motion.span>
        ))}
      </div>
      <div className="mock-finish">{finish}</div>
    </motion.div>
  );
}
