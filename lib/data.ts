import {
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  Boxes,
  Brush,
  Clock3,
  CreditCard,
  FileStack,
  GraduationCap,
  Handshake,
  HeartPulse,
  Hotel,
  Landmark,
  Layers3,
  Megaphone,
  Palette,
  Printer,
  ReceiptText,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Store,
  Truck,
  WandSparkles
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
    specs: ["Short runs", "Bulk runs", "CMYK control", "Preflight"],
    leadTime: "2-10 business days"
  }
];

export const serviceCards = [
  {
    title: "Brochure Printing",
    Icon: BookOpen
  },
  {
    title: "Branding Materials",
    Icon: Palette
  },
  {
    title: "Marketing Print",
    Icon: Megaphone
  },
  {
    title: "Multi-Page Print",
    Icon: FileStack
  },
  {
    title: "Brand Essentials",
    Icon: CreditCard
  },
  {
    title: "Production",
    Icon: Printer
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
    Icon: Printer
  },
  {
    title: "Fast Delivery",
    copy: "Production schedules are built around real launch dates, with quick proofs and reliable dispatch windows.",
    Icon: Clock3
  },
  {
    title: "Modern Printing Technology",
    copy: "Digital and offset workflows support short runs, bulk production, accurate color, and flexible finishing.",
    Icon: BadgeCheck
  },
  {
    title: "Creative Design Support",
    copy: "From file cleanup to layout guidance, the studio helps your brand look intentional in print.",
    Icon: WandSparkles
  },
  {
    title: "Reliable Service",
    copy: "Clear proofs, practical recommendations, and consistent communication keep every print order moving.",
    Icon: ShieldCheck
  },
  {
    title: "Affordable Solutions",
    copy: "Smart material choices and production planning help you get premium results without waste.",
    Icon: Sparkles
  }
];

export const portfolioItems = [
  {
    id: "estate",
    title: "Luxury Property Brochure",
    category: "Brochures",
    finish: "Velvet matte stock, foil detail, precision folds",
    image: "/visuals/portfolio-estate.png",
    height: "tall"
  },
  {
    id: "clinic",
    title: "Healthcare Service Flyer",
    category: "Flyers",
    finish: "Silk stock, bright CMYK, clean trim",
    image: "/visuals/portfolio-clinic.png",
    height: "medium"
  },
  {
    id: "gallery",
    title: "Gallery Event Poster",
    category: "Posters",
    finish: "Large-format matte print, gallery-grade contrast",
    image: "/visuals/portfolio-gallery.png",
    height: "short"
  },
  {
    id: "hotel",
    title: "Hospitality Brand Kit",
    category: "Corporate",
    finish: "Folders, cards, menus, and guest collateral",
    image: "/visuals/portfolio-hotel.png",
    height: "tall"
  },
  {
    id: "startup",
    title: "Startup Sales Deck Print",
    category: "Booklets",
    finish: "Soft-touch booklet with calibrated brand color",
    image: "/visuals/portfolio-startup.png",
    height: "medium"
  },
  {
    id: "menu",
    title: "Restaurant Menu Print",
    category: "Menus",
    finish: "Durable laminated inserts with premium touch",
    image: "/visuals/portfolio-menu.png",
    height: "short"
  },
  {
    id: "civic",
    title: "Institutional Welcome Pack",
    category: "Corporate",
    finish: "Folders, inserts, letterheads, and guides",
    image: "/visuals/portfolio-civic.png",
    height: "medium"
  },
  {
    id: "wellness",
    title: "Wellness Program Catalog",
    category: "Catalogs",
    finish: "Silk catalog pages with spot UV cover",
    image: "/visuals/portfolio-wellness.png",
    height: "tall"
  },
  {
    id: "retail",
    title: "Retail Campaign Prints",
    category: "Branding",
    finish: "Flyers, cards, posters, and promotional inserts",
    image: "/visuals/portfolio-retail.png",
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

export const industries = [
  { title: "Retail and Showrooms", Icon: Store },
  { title: "Real Estate", Icon: Building2 },
  { title: "Healthcare", Icon: HeartPulse },
  { title: "Hospitality", Icon: Hotel },
  { title: "Education", Icon: GraduationCap },
  { title: "Finance and Corporate", Icon: Landmark }
];

export const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Quote", href: "#quote" }
];

export const processIcons = [Handshake, Brush, BadgeCheck, Boxes, Truck];
