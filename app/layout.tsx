import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Brochear.com | Premium Brochure Printing and Advertising";
const description =
  "Premium brochure printing, fold engineering, paper selection, specialty finishes, and delivery for brands that need tactile advertising work.";

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
    "advertising printing",
    "tri-fold brochures",
    "premium print finishes",
    "custom brochure design"
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
        alt: "Premium printed brochure sheets in warm terracotta and plum tones"
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
