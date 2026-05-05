import {
  BadgeCheck,
  Boxes,
  Clock3,
  Layers3,
  Printer,
  ShieldCheck,
  Sparkles,
  Truck
} from "lucide-react";

export const brochureTypes = [
  {
    id: "bi-fold",
    name: "Bi-fold Launch",
    tagline: "A clean four-panel reveal for product launches and local campaigns.",
    fold: "Bi-fold",
    paper: "300gsm velvet matte",
    finish: "Soft-touch with spot UV",
    price: "From $220",
    specs: ["4 panels", "A4 or letter", "48h digital proof", "250+ units"],
    leadTime: "4-6 business days"
  },
  {
    id: "tri-fold",
    name: "Tri-fold Sales Kit",
    tagline: "Six sharp panels for service menus, sales journeys, and event handouts.",
    fold: "Tri-fold",
    paper: "250gsm silk coated",
    finish: "Aqueous seal",
    price: "From $186",
    specs: ["6 panels", "Roll or accordion", "CMYK rich black", "500+ units"],
    leadTime: "3-5 business days"
  },
  {
    id: "z-fold",
    name: "Z-fold Storyline",
    tagline: "A kinetic unfold for maps, property launches, and guided brand stories.",
    fold: "Z-fold",
    paper: "270gsm natural uncoated",
    finish: "Edge tint optional",
    price: "From $260",
    specs: ["6 panels", "Map-grade creasing", "Low-glare finish", "250+ units"],
    leadTime: "5-7 business days"
  },
  {
    id: "gate-fold",
    name: "Gate-fold Signature",
    tagline: "A dramatic opening moment for luxury real estate and premium offers.",
    fold: "Gate-fold",
    paper: "350gsm cover stock",
    finish: "Foil stamp and deboss",
    price: "From $420",
    specs: ["8 panels", "Center reveal", "Foil-ready dies", "150+ units"],
    leadTime: "7-10 business days"
  }
];

export const storySteps = [
  {
    label: "Idea",
    title: "Campaign intent becomes a print architecture.",
    copy: "We map the audience, message sequence, panel pacing, and response path before design starts."
  },
  {
    label: "Design",
    title: "Layouts are built around the fold, not trapped by it.",
    copy: "Typography, image rhythm, and conversion moments are tuned to the way the brochure opens in hand."
  },
  {
    label: "Proof",
    title: "Color, stock, and finish are validated before press.",
    copy: "Digital proofing catches hierarchy, trim, bleed, paper feel, and finish placement early."
  },
  {
    label: "Print",
    title: "Press checks protect the tactile premium.",
    copy: "CMYK calibration, creasing pressure, varnish alignment, and finishing passes are controlled as one system."
  },
  {
    label: "Delivery",
    title: "Packed, counted, and staged for campaign launch.",
    copy: "Finished work ships with practical boxing, batch labels, and schedule visibility."
  }
];

export const paperOptions = [
  { id: "silk", label: "Silk Coated", grams: "250gsm", modifier: 0 },
  { id: "velvet", label: "Velvet Matte", grams: "300gsm", modifier: 42 },
  { id: "natural", label: "Natural Uncoated", grams: "270gsm", modifier: 28 }
];

export const finishOptions = [
  { id: "aqueous", label: "Aqueous Seal", modifier: 0, shine: "low" },
  { id: "soft-touch", label: "Soft-touch", modifier: 58, shine: "matte" },
  { id: "spot-uv", label: "Spot UV", modifier: 86, shine: "gloss" },
  { id: "foil", label: "Foil Stamp", modifier: 148, shine: "metal" }
];

export const sizeOptions = [
  { id: "letter-trifold", label: "Letter Tri-fold", panels: "6 panels", base: 186 },
  { id: "a4-bifold", label: "A4 Bi-fold", panels: "4 panels", base: 220 },
  { id: "square-gate", label: "Square Gate-fold", panels: "8 panels", base: 346 }
];

export const trustStats = [
  { label: "brochures printed", value: 1280000, suffix: "+" },
  { label: "active brand clients", value: 420, suffix: "+" },
  { label: "color proofs approved", value: 98, suffix: "%" },
  { label: "years on press", value: 14, suffix: "" }
];

export const trustCards = [
  {
    title: "Print engineering",
    copy: "Fold tolerances, paper grain, and finish registration are specified before the art goes to press.",
    Icon: Printer
  },
  {
    title: "Campaign reliability",
    copy: "Proofs, batch labels, and delivery windows are managed like a launch plan, not a loose print order.",
    Icon: Clock3
  },
  {
    title: "Premium finishes",
    copy: "Foil, spot UV, soft-touch, debossing, and edge tints are paired with the right stock.",
    Icon: Sparkles
  },
  {
    title: "Brand protection",
    copy: "Color targets, typography checks, and preflight QA keep every run consistent.",
    Icon: ShieldCheck
  }
];

export const portfolioItems = [
  {
    id: "estate",
    title: "Estate Launch Booklet",
    category: "Real Estate",
    finish: "Velvet matte, bronze foil",
    image: "/visuals/portfolio-estate.png",
    height: "tall"
  },
  {
    id: "clinic",
    title: "Clinic Service Tri-fold",
    category: "Healthcare",
    finish: "Silk stock, aqueous seal",
    image: "/visuals/portfolio-clinic.png",
    height: "medium"
  },
  {
    id: "gallery",
    title: "Gallery Opening Map",
    category: "Culture",
    finish: "Natural stock, edge tint",
    image: "/visuals/portfolio-gallery.png",
    height: "short"
  },
  {
    id: "hotel",
    title: "Boutique Hotel Compendium",
    category: "Hospitality",
    finish: "Gate-fold, spot UV",
    image: "/visuals/portfolio-hotel.png",
    height: "tall"
  },
  {
    id: "startup",
    title: "Investor Product Foldout",
    category: "Technology",
    finish: "Z-fold, soft-touch",
    image: "/visuals/portfolio-startup.png",
    height: "medium"
  },
  {
    id: "menu",
    title: "Seasonal Menu Insert",
    category: "Food and Beverage",
    finish: "Uncoated, blind deboss",
    image: "/visuals/portfolio-menu.png",
    height: "short"
  },
  {
    id: "civic",
    title: "Civic Welcome Foldout",
    category: "Culture",
    finish: "Natural stock, map crease",
    image: "/visuals/portfolio-civic.png",
    height: "medium"
  },
  {
    id: "wellness",
    title: "Wellness Program Guide",
    category: "Healthcare",
    finish: "Silk stock, spot UV",
    image: "/visuals/portfolio-wellness.png",
    height: "tall"
  },
  {
    id: "retail",
    title: "Retail Launch Mailer",
    category: "Retail",
    finish: "Soft-touch, high-gloss seal",
    image: "/visuals/portfolio-retail.png",
    height: "short"
  }
];

export const testimonials = [
  {
    quote:
      "The brochure felt like a product demo in paper form. People kept opening it again before they called us.",
    name: "Mara Benton",
    role: "Brand Director, Atrium Homes"
  },
  {
    quote:
      "Their proofing process caught issues we usually discover too late. The finished folds were immaculate.",
    name: "Julian Park",
    role: "Marketing Lead, Northline Health"
  },
  {
    quote:
      "We needed premium but fast. The team gave us stock, finish, and delivery choices without making the job feel chaotic.",
    name: "Elena Rossi",
    role: "Founder, Lumen Table"
  }
];

export const footerLinks = [
  { label: "Showcase", href: "#brochures" },
  { label: "Configurator", href: "#configurator" },
  { label: "Work", href: "#work" },
  { label: "Quote", href: "#quote" }
];

export const processIcons = [Layers3, BadgeCheck, Boxes, Truck];
