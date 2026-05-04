"use client";

import { useEffect, useState } from "react";
import "./DebugPaletteSwitcher.css";

const palettes = [
  { key: "obsidian-neon", label: "Obsidian Neon" },
  { key: "royal-ember", label: "Royal Ember" },
  { key: "midnight-sapphire", label: "Midnight Sapphire" },
  { key: "carbon-flame", label: "Carbon Flame" }
] as const;

type PaletteKey = (typeof palettes)[number]["key"];

function isPaletteKey(value: string | null): value is PaletteKey {
  return palettes.some((palette) => palette.key === value);
}

export default function DebugPaletteSwitcher() {
  const [activePalette, setActivePalette] = useState<PaletteKey>("obsidian-neon");

  useEffect(() => {
    const savedPalette = window.localStorage.getItem("brochear-debug-palette");
    const nextPalette = isPaletteKey(savedPalette) ? savedPalette : "obsidian-neon";
    document.documentElement.dataset.palette = nextPalette;
    setActivePalette(nextPalette);
  }, []);

  function applyPalette(palette: PaletteKey) {
    document.documentElement.dataset.palette = palette;
    window.localStorage.setItem("brochear-debug-palette", palette);
    setActivePalette(palette);
  }

  return (
    <aside className="debug-palette-panel" aria-label="Debug palette switcher">
      <strong>Theme</strong>
      <div>
        {palettes.map((palette) => (
          <button
            key={palette.key}
            type="button"
            aria-pressed={activePalette === palette.key}
            onClick={() => applyPalette(palette.key)}
          >
            {palette.label}
          </button>
        ))}
      </div>
    </aside>
  );
}
