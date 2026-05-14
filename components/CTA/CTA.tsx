"use client";

import { MessageCircle, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import "./CTA.css";

const whatsappNumber = "919951499488";
const callNumber = "9951499488";
const whatsappBaseUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}`;

export default function CTA() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: ""
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSending(false);

    if (!formData.name || !formData.phone || !formData.message) {
      setError("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ""))) {
      setError("Please enter a valid phone number.");
      return;
    }

    const whatsappMessage = `Hello Aureleaf Organics,

New Quote Request:

Name: ${formData.name}
Company: ${formData.company || "Not provided"}
Phone: ${formData.phone}
Email: ${formData.email || "Not provided"}
Requirement: ${formData.message}

Please contact the customer.
    `.trim();

    const whatsappUrl = `${whatsappBaseUrl}&text=${encodeURIComponent(whatsappMessage)}`;
    setSending(true);
    const whatsappWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    if (!whatsappWindow) {
      window.location.href = whatsappUrl;
    }

    setSent(true);
    setFormData({ name: "", company: "", phone: "", email: "", message: "" });
    setTimeout(() => {
      setSent(false);
      setSending(false);
    }, 5000);
  }

  return (
    <section className="cta-section" id="quote">
      <div className="section-shell cta-panel">
        <div className="cta-copy">
          <span className="eyebrow">Start a quote</span>
          <h2>Make your next print run look unmistakably premium.</h2>
        </div>

        <form className="quote-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company Name</label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Your company"
                value={formData.company}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Your phone number"
                required
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Requirement Message *</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your printing needs..."
              required
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>

          {error ? <p className="form-error">{error}</p> : null}

          <div className="form-actions">
            <button type="submit" aria-label="Send quote request on WhatsApp" disabled={sending}>
              <Send size={18} aria-hidden="true" />
              <span>{sending ? "Opening WhatsApp..." : "Send Request"}</span>
            </button>
            <div className="contact-options">
              <span className="or-divider">or contact us directly</span>
              <a
                href={whatsappBaseUrl}
                className="contact-link"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={16} aria-hidden="true" />
                <span>WhatsApp 9951499488</span>
              </a>
              <a href={`tel:${callNumber}`} className="contact-link">
                <Phone size={16} aria-hidden="true" />
                <span>Call 9951499488</span>
              </a>
            </div>
          </div>

          {sent ? (
            <p className="form-state success">
              WhatsApp is opening with your quote request.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
