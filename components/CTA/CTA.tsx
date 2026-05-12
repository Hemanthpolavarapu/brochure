"use client";

import { Mail, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import "./CTA.css";

export default function CTA() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
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

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (formData.phone && !/^\d{10,}$/.test(formData.phone.replace(/\D/g, ""))) {
      setError("Please enter a valid phone number.");
      return;
    }

    const emailBody = `
Name: ${formData.name}
Company: ${formData.company || "Not provided"}
Phone: ${formData.phone || "Not provided"}
Email: ${formData.email}

Message:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:hello@brochear.com?subject=Quote%20Request%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;

    setSent(true);
    setFormData({ name: "", company: "", phone: "", email: "", message: "" });
    setTimeout(() => setSent(false), 5000);
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
              <label htmlFor="email">Email Address *</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
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
            <button type="submit" aria-label="Send quote request">
              <Send size={18} aria-hidden="true" />
              <span>Send Request</span>
            </button>
            <div className="contact-options">
              <span className="or-divider">or contact us directly</span>
              <a href="mailto:hello@brochear.com" className="contact-link">
                <Mail size={16} aria-hidden="true" />
                <span>hello@brochear.com</span>
              </a>
              <a href="tel:+15550184" className="contact-link">
                <Phone size={16} aria-hidden="true" />
                <span>+1 555 0184</span>
              </a>
            </div>
          </div>

          {sent ? (
            <p className="form-state success">
              Quote request received. Brochear will reply with a clear print plan.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
