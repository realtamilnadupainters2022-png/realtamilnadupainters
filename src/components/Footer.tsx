import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import logoImg from "@/assets/logo.png";

const WHATSAPP_URL = "https://wa.me/918680046800?text=Hi%20Real%20Tamilnadu%20Painters%2C%20I%27d%20like%20to%20get%20a%20free%20estimate%20for%20painting%20service%20for%20my%20property.%20Please%20tell%20me%20more%20about%20it.";

const serviceAreas = [
  "Coimbatore", "Chennai", "Madurai", "Trichy", "Salem", "Erode",
  "Tiruppur", "Karur", "Namakkal", "Hosur", "Vellore", "Tirunelveli",
];

const services = [
  "Interior Painting", "Exterior Painting", "Texture Painting",
  "Waterproof Painting", "Wood Polish", "Commercial Painting",
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoImg} alt="Real Tamilnadu Painters" width={40} height={40} className="rounded-lg" loading="lazy" />
              <div>
                <span className="text-lg font-bold text-background block font-[var(--font-heading)]">Real Tamilnadu</span>
                <span className="text-xs font-medium text-brand-light tracking-wider uppercase">Painters</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-background/60 mb-4">
              Tamil Nadu's most trusted premium painting contractors. Professional interior & exterior painting services with luxury finishing.
            </p>
            <div className="flex items-center gap-2 text-sm mb-2">
              <Phone className="w-4 h-4 text-brand-light" />
              <a href="tel:+918680046800" className="hover:text-brand-light transition-colors">+91 86800 46800</a>
            </div>
            <div className="flex items-center gap-2 text-sm mb-2">
              <Mail className="w-4 h-4 text-brand-light" />
              <a href="mailto:realtamilnadupainters2022@gmail.com" className="hover:text-brand-light transition-colors text-xs">realtamilnadupainters2022@gmail.com</a>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="w-4 h-4 text-brand-light mt-0.5 shrink-0" />
              <span className="text-background/60">10 Sindhu Nagar, Anjugam Nagar, Chinnavedampatti, Coimbatore, Tamil Nadu 641049</span>
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold text-background mb-4 font-[var(--font-heading)]">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Our Services" },
                { to: "/gallery", label: "Project Gallery" },
                { to: "/reviews", label: "Client Reviews" },
                { to: "/blog", label: "Painting Blog" },
                { to: "/contact", label: "Contact Us" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to as "/"} className="text-sm text-background/60 hover:text-brand-light transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-background mb-4 font-[var(--font-heading)]">Our Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-background/60 hover:text-brand-light transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-background mb-4 font-[var(--font-heading)]">Service Areas</h3>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((a) => (
                <span key={a} className="text-xs px-2.5 py-1 rounded-full bg-background/10 text-background/70">{a}</span>
              ))}
            </div>
            <div className="mt-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold gradient-brand text-[oklch(1_0_0)] shadow-brand hover:opacity-90 transition-opacity"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-background/40">
              © {new Date().getFullYear()} Real Tamilnadu Painters. All rights reserved. Best Painting Contractors in Tamil Nadu.
            </p>
            <div className="flex gap-4">
              <span className="text-xs text-background/40">Coimbatore</span>
              <span className="text-xs text-background/40">Chennai</span>
              <span className="text-xs text-background/40">Madurai</span>
              <span className="text-xs text-background/40">Kerala</span>
              <span className="text-xs text-background/40">Karnataka</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <iframe
          title="Real Tamilnadu Painters Location - Coimbatore"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2!2d76.94!3d11.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAxJzEyLjAiTiA3NsKwNTYnMjQuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </footer>
  );
}