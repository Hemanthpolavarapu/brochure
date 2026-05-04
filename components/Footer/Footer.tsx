import Image from "next/image";
import { footerLinks } from "@/lib/data";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-marquee" aria-hidden="true">
        <span>fold</span>
        <span>proof</span>
        <span>foil</span>
        <span>bind</span>
        <span>ship</span>
        <span>fold</span>
        <span>proof</span>
        <span>foil</span>
        <span>bind</span>
        <span>ship</span>
      </div>
      <div className="section-shell footer-grid">
        <a className="brand-lockup" href="#top" aria-label="Brochear.com home">
          <span className="brand-mark">
            <Image
              src="/logo.png"
              alt="Brochear.com"
              width={894}
              height={1015}
              className="brand-logo"
            />
          </span>
        </a>
        <nav aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <address>
          <a href="mailto:hello@brochureatelier.example">hello@brochureatelier.example</a>
          <a href="tel:+15550184">+1 555 0184</a>
          <span>Press floor 04, Design District</span>
        </address>
      </div>
    </footer>
  );
}
