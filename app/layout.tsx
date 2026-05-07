import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Brochear.com | Premium Commercial Printing Company";
const description =
  "Premium commercial printing for brochures, catalogs, flyers, business cards, posters, booklets, corporate materials, offset printing, and digital printing.";

export const metadata: Metadata = {
  metadataBase: new URL("https://brochure-atelier.example"),
  title: {
    default: title,
    template: "%s | Brochear.com"
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png"
  },
  description,
  keywords: [
    "brochure printing",
    "commercial printing",
    "catalog printing",
    "flyer printing",
    "business card printing",
    "offset printing",
    "digital printing",
    "premium print finishes",
    "corporate printing"
  ],
  openGraph: {
    title,
    description,
    url: "https://brochure-atelier.example",
    siteName: "Brochear.com",
    images: [
      {
        url: "/visuals/hero-press-sheet.png",
        width: 1200,
        height: 900,
        alt: "Premium commercial printed sheets in a modern printing studio"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/visuals/hero-press-sheet.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
