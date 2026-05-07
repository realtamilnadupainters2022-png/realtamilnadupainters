import { Link } from "@tanstack/react-router";
import { ChevronRight, Star, Phone, CheckCircle } from "lucide-react";
import type { ReactNode } from "react";
import Breadcrumbs from "./Breadcrumbs";
import SectionHeading from "./SectionHeading";

const WHATSAPP_URL = "https://wa.me/918680046800?text=Hi%20Real%20Tamilnadu%20Painters%2C%20I%20need%20painting%20services%20for%20my%20property";

interface ServiceHubProps {
  title: string;
  breadcrumbLabel: string;
  heroTitle: string;
  heroSubtitle: string;
  introTitle: string;
  introText: string[];
  benefits: string[];
  subServices: { title: string; desc: string }[];
  cities: { name: string; text: string }[];
  faqs: { q: string; a: string }[];
  relatedLinks: { to: string; label: string }[];
}

export default function ServiceHubPage({
  breadcrumbLabel,
  heroTitle,
  heroSubtitle,
  introTitle,
  introText,
  benefits,
  subServices,
  cities,
  faqs,
  relatedLinks,
}: ServiceHubProps) {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: breadcrumbLabel }]} />
          <SectionHeading badge="Premium Service" title={heroTitle} subtitle={heroSubtitle} />
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-bold gradient-brand text-[oklch(1_0_0)] shadow-brand hover:opacity-90 transition-all hover:scale-105">
              Get Free Estimate <ChevronRight className="w-5 h-5" />
            </a>
            <a href="tel:+918680046800" className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-bold border-2 border-brand text-brand hover:bg-brand hover:text-[oklch(1_0_0)] transition-all">
              <Phone className="w-5 h-5" /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Intro + Benefits */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-foreground font-[var(--font-heading)] mb-6">{introTitle}</h2>
              {introText.map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
              ))}
            </div>
            <div className="lg:col-span-2">
              <div className="glass-card rounded-2xl p-8 shadow-premium sticky top-28">
                <h3 className="text-xl font-bold text-foreground font-[var(--font-heading)] mb-5">Why Choose Us</h3>
                <ul className="space-y-3">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-2">
                  <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}</div>
                  <span className="text-sm font-semibold text-foreground">5.0</span>
                  <span className="text-xs text-muted-foreground">· 41+ Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-services */}
      <section className="py-20 sm:py-28 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="What We Offer" title="Our Specialized Services" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subServices.map((s) => (
              <div key={s.title} className="glass-card rounded-2xl p-8 hover-lift">
                <h3 className="text-lg font-bold text-foreground font-[var(--font-heading)] mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City Sections for Local SEO */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Service Areas" title="Available Across Tamil Nadu" subtitle="We provide premium painting services in all major cities." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((c) => (
              <div key={c.name} className="glass-card rounded-2xl p-6 hover-lift">
                <h3 className="text-lg font-bold text-foreground font-[var(--font-heading)] mb-2">{c.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 bg-secondary/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="FAQ" title="Frequently Asked Questions" />
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="glass-card rounded-xl p-6 group">
                <summary className="text-base font-semibold text-foreground cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <ChevronRight className="w-5 h-5 text-brand transition-transform group-open:rotate-90 shrink-0 ml-4" />
                </summary>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services / Internal Links */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Explore More" title="Related Services" />
          <div className="grid sm:grid-cols-2 gap-4">
            {relatedLinks.map((l) => (
              <Link key={l.to} to={l.to as "/"} className="glass-card rounded-xl p-5 flex items-center justify-between hover-lift group">
                <span className="font-semibold text-foreground">{l.label}</span>
                <ChevronRight className="w-5 h-5 text-brand group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
            <Link to="/services" className="glass-card rounded-xl p-5 flex items-center justify-between hover-lift group">
              <span className="font-semibold text-foreground">All Services</span>
              <ChevronRight className="w-5 h-5 text-brand group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="glass-card rounded-xl p-5 flex items-center justify-between hover-lift group">
              <span className="font-semibold text-foreground">Contact Us</span>
              <ChevronRight className="w-5 h-5 text-brand group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 gradient-brand">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[oklch(1_0_0)] font-[var(--font-heading)]">Ready to Get Started?</h2>
          <p className="mt-4 text-lg text-[oklch(1_0_0_/_80%)]">Get a free, no-obligation estimate for your painting project today.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-bold bg-[oklch(1_0_0)] text-brand shadow-lg hover:scale-105 transition-all">
            Get Free Estimate on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}