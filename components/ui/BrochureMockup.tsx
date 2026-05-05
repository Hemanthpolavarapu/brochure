"use client";

type BrochureMockupProps = {
  fold?: "bi-fold" | "tri-fold" | "z-fold" | "gate-fold" | string;
  finish?: string;
  active?: boolean;
};

export default function BrochureMockup({
  fold = "tri-fold",
  finish = "Soft-touch",
  active = false
}: BrochureMockupProps) {
  const panelCount = fold === "bi-fold" ? 2 : fold === "gate-fold" ? 4 : 3;
  const panels = Array.from({ length: panelCount });

  return (
    <div
      className="brochure-mockup"
      data-fold={fold}
      data-active={active}
    >
      <div className="mock-shadow" />
      <div className="mock-sheet">
        {panels.map((_, index) => (
          <span
            key={index}
            className="mock-panel"
          >
            <i />
            <b />
          </span>
        ))}
      </div>
      <div className="mock-finish">{finish}</div>
    </div>
  );
}
