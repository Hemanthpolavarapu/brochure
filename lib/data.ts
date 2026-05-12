import {
  BadgeCheck,
  Boxes,
  Brush,
  Handshake,
  Truck
} from "lucide-react";

export const brochureTypes = [
  {
    id: "bi-fold",
    name: "Brochure Printing",
    tagline: "Premium folded brochures with crisp color, confident paper, and layouts built to sell.",
    fold: "Marketing print",
    paper: "250-350gsm coated and matte stocks",
    finish: "Soft-touch, UV, foil, lamination",
    price: "Quote by run",
    image: "/visuals/print-photo/service-marketing-print.jpg",
    imageAlt: "Real marketing flyers and printed brochures on a desk with visible paper texture",
    specs: ["Bi-fold", "Tri-fold", "Z-fold", "Gate-fold"],
    leadTime: "3-7 business days"
  },
  {
    id: "tri-fold",
    name: "Catalog Printing",
    tagline: "Polished product catalogs that make every page feel intentional, sharp, and premium.",
    fold: "Multi-page print",
    paper: "Art paper, silk, matte, uncoated",
    finish: "Saddle stitch, perfect bind, UV",
    price: "Quote by pages",
    image: "/visuals/print-photo/service-multi-page.jpg",
    imageAlt: "Hands flipping pages of an open printed booklet in natural light",
    specs: ["Product catalogs", "Lookbooks", "Manuals", "Sales books"],
    leadTime: "5-10 business days"
  },
  {
    id: "z-fold",
    name: "Corporate Print Kits",
    tagline: "Business cards, folders, letterheads, profiles, and sales collateral aligned as one brand system.",
    fold: "Brand essentials",
    paper: "Premium card and writing stocks",
    finish: "Embossing, spot UV, foil, matte",
    price: "Quote by kit",
    image: "/visuals/print-photo/service-brand-essentials.jpg",
    imageAlt: "Premium stationery with envelopes and branded paper materials arranged on a wooden desk",
    specs: ["Cards", "Folders", "Profiles", "Stationery"],
    leadTime: "4-8 business days"
  },
  {
    id: "gate-fold",
    name: "Digital and Offset Printing",
    tagline: "Fast digital runs and high-volume offset production managed with the same quality discipline.",
    fold: "Production",
    paper: "Flexible stocks for short and bulk runs",
    finish: "Color calibration, trimming, binding",
    price: "Quote by quantity",
    image: "/visuals/print-photo/service-production.jpg",
    imageAlt: "Industrial printing press with ink rollers and sheets moving through the machine",
    specs: ["Short runs", "Bulk runs", "CMYK control", "Preflight"],
    leadTime: "2-10 business days"
  }
];

export const serviceCards = [
  {
    title: "Brochure Printing",
    image: "/visuals/print-photo/thumb-brochure-corner.jpg",
    imageAlt: "Close crop of printed brochure edges on a wooden table"
  },
  {
    title: "Branding Materials",
    image: "/visuals/print-photo/thumb-stationery-set.jpg",
    imageAlt: "Minimal stationery paper and envelope detail"
  },
  {
    title: "Marketing Print",
    image: "/visuals/print-photo/thumb-flyer-stack.jpg",
    imageAlt: "Stack of real printed flyers with paper grain"
  },
  {
    title: "Multi-Page Print",
    image: "/visuals/print-photo/thumb-booklet-pages.jpg",
    imageAlt: "Open printed booklet pages being turned by hand"
  },
  {
    title: "Brand Essentials",
    image: "/visuals/print-photo/thumb-menu-edge.jpg",
    imageAlt: "Rolled poster and printed paper edge detail"
  },
  {
    title: "Production",
    image: "/visuals/print-photo/thumb-press-sheets.jpg",
    imageAlt: "Printing press rollers with paper moving through production"
  }
];

export const storySteps = [
  {
    label: "Brief",
    title: "Your print goal becomes a clear production plan.",
    copy: "We align format, audience, quantity, budget, timeline, paper feel, and finish expectations before files move forward."
  },
  {
    label: "Artwork",
    title: "Creative files are refined for real-world print.",
    copy: "Layouts are checked for bleed, resolution, typography, color mode, hierarchy, and finish placement."
  },
  {
    label: "Proof",
    title: "Color and specifications are approved before production.",
    copy: "Digital and physical proofing help protect color accuracy, trim confidence, stock choice, and final presentation."
  },
  {
    label: "Print",
    title: "Press teams produce with disciplined quality control.",
    copy: "Digital or offset production is monitored for color consistency, registration, ink density, and finishing precision."
  },
  {
    label: "Finish",
    title: "Every piece is trimmed, packed, and ready to impress.",
    copy: "Binding, lamination, foil, UV, folding, packing, and dispatch are handled with clean handoff visibility."
  }
];

export const paperOptions = [
  { id: "silk", label: "Silk Coated", grams: "170-250gsm", modifier: 0 },
  { id: "velvet", label: "Velvet Matte", grams: "250-350gsm", modifier: 42 },
  { id: "natural", label: "Natural Uncoated", grams: "120-270gsm", modifier: 28 }
];

export const finishOptions = [
  { id: "aqueous", label: "Aqueous Seal", modifier: 0, shine: "low" },
  { id: "soft-touch", label: "Soft-touch", modifier: 58, shine: "matte" },
  { id: "spot-uv", label: "Spot UV", modifier: 86, shine: "gloss" },
  { id: "foil", label: "Foil Stamp", modifier: 148, shine: "metal" }
];

export const sizeOptions = [
  { id: "letter-trifold", label: "Marketing Flyer", panels: "single or folded sheet", base: 186 },
  { id: "a4-bifold", label: "Corporate Brochure", panels: "4-6 panel collateral", base: 220 },
  { id: "square-gate", label: "Catalog / Booklet", panels: "multi-page printed piece", base: 346 }
];

export const trustStats = [
  { label: "commercial pieces printed", value: 1280000, suffix: "+" },
  { label: "business clients served", value: 420, suffix: "+" },
  { label: "proof approval accuracy", value: 98, suffix: "%" },
  { label: "years of print craft", value: 14, suffix: "+" }
];

export const trustCards = [
  {
    title: "Premium Print Quality",
    copy: "Sharp color, clean trim, refined stocks, and finish control give every piece a high-end commercial feel.",
    image: "/visuals/print-photo/why-paper-texture.jpg",
    imageAlt: "Close-up of textured printed paper showing premium stock"
  },
  {
    title: "Fast Delivery",
    copy: "Production schedules are built around real launch dates, with quick proofs and reliable dispatch windows.",
    image: "/visuals/print-photo/why-cutting-precision.jpg",
    imageAlt: "Printed photo sheets arranged cleanly for finishing"
  },
  {
    title: "Modern Printing Technology",
    copy: "Digital and offset workflows support short runs, bulk production, accurate color, and flexible finishing.",
    image: "/visuals/print-photo/why-press-tech.jpg",
    imageAlt: "Offset printing press machinery with ink rollers"
  },
  {
    title: "Creative Design Support",
    copy: "From file cleanup to layout guidance, the studio helps your brand look intentional in print.",
    image: "/visuals/print-photo/why-design-support.jpg",
    imageAlt: "Business cards and stationery laid out for brand review"
  },
  {
    title: "Reliable Service",
    copy: "Clear proofs, practical recommendations, and consistent communication keep every print order moving.",
    image: "/visuals/print-photo/why-ink-detail.jpg",
    imageAlt: "Colorful printed poster rolls with rich ink and paper edges"
  },
  {
    title: "Affordable Solutions",
    copy: "Smart material choices and production planning help you get premium results without waste.",
    image: "/visuals/print-photo/why-premium-finish.jpg",
    imageAlt: "Minimal paper stationery with clean premium finish"
  }
];

export const portfolioItems = [
  {
    id: "estate",
    title: "Luxury Property Brochure",
    category: "Brochures",
    finish: "Velvet matte stock, foil detail, precision folds",
    image: "/visuals/print-photo/portfolio-brochures-table.jpg",
    height: "tall"
  },
  {
    id: "clinic",
    title: "Healthcare Service Flyer",
    category: "Flyers",
    finish: "Silk stock, bright CMYK, clean trim",
    image: "/visuals/print-photo/portfolio-marketing-flyers.jpg",
    height: "medium"
  },
  {
    id: "gallery",
    title: "Gallery Event Poster",
    category: "Posters",
    finish: "Large-format matte print, gallery-grade contrast",
    image: "/visuals/print-photo/portfolio-rolled-posters.jpg",
    height: "short"
  },
  {
    id: "hotel",
    title: "Hospitality Brand Kit",
    category: "Corporate",
    finish: "Folders, cards, menus, and guest collateral",
    image: "/visuals/print-photo/portfolio-brand-stationery.jpg",
    height: "tall"
  },
  {
    id: "startup",
    title: "Startup Sales Deck Print",
    category: "Booklets",
    finish: "Soft-touch booklet with calibrated brand color",
    image: "/visuals/print-photo/portfolio-magazine-hands.jpg",
    height: "medium"
  },
  {
    id: "menu",
    title: "Restaurant Menu Print",
    category: "Menus",
    finish: "Durable laminated inserts with premium touch",
    image: "/visuals/print-photo/portfolio-printed-photos.jpg",
    height: "short"
  },
  {
    id: "civic",
    title: "Institutional Welcome Pack",
    category: "Corporate",
    finish: "Folders, inserts, letterheads, and guides",
    image: "/visuals/print-photo/portfolio-business-cards.jpg",
    height: "medium"
  },
  {
    id: "wellness",
    title: "Wellness Program Catalog",
    category: "Catalogs",
    finish: "Silk catalog pages with spot UV cover",
    image: "/visuals/print-photo/portfolio-booklet-pages.jpg",
    height: "tall"
  },
  {
    id: "retail",
    title: "Retail Campaign Prints",
    category: "Branding",
    finish: "Flyers, cards, posters, and promotional inserts",
    image: "/visuals/print-photo/portfolio-print-press.jpg",
    height: "short"
  }
];

export const testimonials = [
  {
    quote:
      "Brochear made our printed launch materials feel like a serious brand asset. The color, paper, and finishing were exactly on point.",
    name: "Maya Benton",
    role: "Brand Director, Atrium Properties"
  },
  {
    quote:
      "Their proofing process caught problems before production and kept a tight deadline calm. The final print quality was excellent.",
    name: "Julian Park",
    role: "Marketing Lead, Northline Clinics"
  },
  {
    quote:
      "We needed premium catalogs, flyers, and cards for an exhibition. Everything arrived clean, consistent, and ready for the stand.",
    name: "Elena Rossi",
    role: "Founder, Lumen Studio"
  }
];

export const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Quote", href: "#quote" }
];

export const processIcons = [Handshake, Brush, BadgeCheck, Boxes, Truck];
