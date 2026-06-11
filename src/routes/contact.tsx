import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const WHATSAPP_URL = "https://wa.me/918680046800?text=Hi%20Real%20Tamilnadu%20Painters%2C%20I%27d%20like%20to%20get%20a%20free%20estimate%20for%20painting%20service%20for%20my%20property.%20Please%20tell%20me%20more%20about%20it.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Painting Contractor in Coimbatore | Free Estimate - Real Tamilnadu Painters" },
      { name: "description", content: "Contact Coimbatore's top painting contractor for a free estimate. Call or WhatsApp +91 86800 46800. Office: Chinnavedampatti, Coimbatore, Tamil Nadu 641049." },
      { property: "og:title", content: "Contact Real Tamilnadu Painters | Coimbatore" },
      { property: "og:description", content: "Free painting estimate in Coimbatore. Call or WhatsApp +91 86800 46800." },
      { property: "og:url", content: "https://realtamilnadupainters.com/contact" },
    ],
    links: [
      { rel: "canonical", href: "https://realtamilnadupainters.com/contact" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Real Tamilnadu Painters - Painting Contractor in Coimbatore",
          url: "https://realtamilnadupainters.com/contact",
          mainEntity: {
            "@type": "LocalBusiness",
            name: "Real Tamilnadu Painters",
            telephone: "+918680046800",
            email: "realtamilnadupainters2022@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "10 Sindhu Nagar, Anjugam Nagar, Chinnavedampatti",
              addressLocality: "Coimbatore",
              addressRegion: "Tamil Nadu",
              postalCode: "641049",
              addressCountry: "IN",
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
              opens: "08:00",
              closes: "20:00",
            },
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 86800 46800", href: "tel:+918680046800" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91 86800 46800", href: WHATSAPP_URL },
  { icon: Mail, label: "Email", value: "realtamilnadupainters2022@gmail.com", href: "mailto:realtamilnadupainters2022@gmail.com" },
  { icon: MapPin, label: "Address", value: "10 Sindhu Nagar, Anjugam Nagar, Chinnavedampatti, Coimbatore, Tamil Nadu 641049", href: "https://maps.google.com/?q=10+Sindhu+Nagar+Chinnavedampatti+Coimbatore" },
  { icon: Clock, label: "Working Hours", value: "Mon - Sat: 8:00 AM - 8:00 PM", href: undefined },
];

function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Contact Us"
            title="Get Your Free Painting Estimate"
            subtitle="Reach out to us for a free, no-obligation quote for your painting project. We serve all major cities in Tamil Nadu."
          />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground font-[var(--font-heading)] mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center shrink-0">
                      <c.icon className="w-6 h-6 text-[oklch(1_0_0)]" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">{c.label}</div>
                      {c.href ? (
                        <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-muted-foreground text-sm hover:text-brand transition-colors break-all">
                          {c.value}
                        </a>
                      ) : (
                        <span className="text-muted-foreground text-sm">{c.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold gradient-brand text-[oklch(1_0_0)] shadow-brand hover:opacity-90 transition-opacity">
                  WhatsApp Us Now
                </a>
                <a href="tel:+918680046800" className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold border-2 border-brand text-brand hover:bg-brand hover:text-[oklch(1_0_0)] transition-all">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 shadow-premium">
              <h3 className="text-xl font-bold text-foreground font-[var(--font-heading)] mb-6">Send Us a Message</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const fd = new FormData(e.currentTarget);
                  const name = fd.get("name") || "";
                  const phone = fd.get("phone") || "";
                  const service = fd.get("service") || "";
                  const msg = fd.get("message") || "";
                  const text = `Hi Real Tamilnadu Painters,%0AI'm ${name}.%0APhone: ${phone}%0AService: ${service}%0AMessage: ${msg}`;
                  window.open(`https://wa.me/918680046800?text=${text}`, "_blank");
                }}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Full Name</label>
                  <input id="name" name="name" type="text" required className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/50" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">Phone Number</label>
                  <input id="phone" name="phone" type="tel" required className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/50" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1">Service Required</label>
                  <select id="service" name="service" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/50">
                    <option>Interior Painting</option>
                    <option>Exterior Painting</option>
                    <option>Texture Painting</option>
                    <option>Waterproof Painting</option>
                    <option>Wood Polish</option>
                    <option>Commercial Painting</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
                  <textarea id="message" name="message" rows={4} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/50" placeholder="Tell us about your project..." />
                </div>
                <button type="submit" className="w-full rounded-xl px-6 py-3.5 text-base font-bold gradient-brand text-[oklch(1_0_0)] shadow-brand hover:opacity-90 transition-opacity">
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Location" title="Find Us on Google Maps" subtitle="Visit our office in Chinnavedampatti, Coimbatore for a free consultation." />
          <div className="rounded-2xl overflow-hidden shadow-premium">
            <iframe
              title="Real Tamilnadu Painters Office Location - Coimbatore"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2!2d76.94!3d11.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAxJzEyLjAiTiA3NsKwNTYnMjQuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}