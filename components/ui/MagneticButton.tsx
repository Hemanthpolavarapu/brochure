"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { ReactNode } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "light" | "dark";
  ariaLabel?: string;
};

export default function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  variant = "light",
  ariaLabel
}: MagneticButtonProps) {
  const reduceMotion = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 260, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 260, damping: 18 });

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (reduceMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.14);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  const props = {
    className: `magnetic-button ${className}`,
    "data-variant": variant,
    style: { x, y },
    onPointerMove: handlePointerMove,
    onPointerLeave: reset,
    whileTap: { scale: 0.97 },
    "aria-label": ariaLabel
  };

  if (href) {
    return (
      <motion.a href={href} {...props}>
        <span>{children}</span>
        <ArrowUpRight size={18} strokeWidth={2.3} aria-hidden="true" />
      </motion.a>
    );
  }

  return (
    <motion.button type="button" onClick={onClick} {...props}>
      <span>{children}</span>
      <ArrowUpRight size={18} strokeWidth={2.3} aria-hidden="true" />
    </motion.button>
  );
}
