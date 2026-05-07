import { createFileRoute } from "@tanstack/react-router";
import { Home, Building2, Paintbrush, Droplets, Shield, Award, Layers, Wrench, SprayCanIcon, Warehouse, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const WHATSAPP_URL = "https://wa.me/918680046800?text=Hi%20Real%20Tamilnadu%20Painters%2C%20I%20need%20painting%20services%20for%20my%20property";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Painting Services in Tamil Nadu | Interior, Exterior, Texture, Waterproof Painting" },
      { name: "description", content: "Complete painting services by Real Tamilnadu Painters - Interior, Exterior, Texture, Waterproof, Wood Polish, Commercial painting in Coimbatore, Chennai, Madurai. Call +91 86800 46800." },
      { property: "og:title", content: "Professional Painting Services in Tamil Nadu" },
      { property: "og:description", content: "Interior, exterior, texture, waterproof and commercial painting services." },
    ],
  }),
  component: ServicesPage,
});

const allServices = [
  { icon: Home, title: "Interior Painting", desc: "Premium interior wall painting for homes and apartments with luxury finishes and designer color consultations." },
  { icon: Building2, title: "Exterior Painting", desc: "Weather-resistant exterior painting with UV protection, anti-fungal coatings for lasting beauty." },
  { icon: Paintbrush, title: "Texture Painting", desc: "Stunning decorative textures including Italian stucco, marble finish, knockdown and custom patterns." },
  { icon: Droplets, title: "Waterproof Painting", desc: "Advanced waterproof coatings and dampness solutions using Dr. Fixit, Pidilite and premium brands." },
  { icon: Layers, title: "Decorative Painting", desc: "Luxury wall finishes including metallic, ombré, geometric patterns and custom murals." },
  { icon: Shield, title: "Wood Polish", desc: "Premium wood polishing, varnishing and PU coating for doors, windows and furniture." },
  { icon: SprayCanIcon, title: "Spray Painting", desc: "Professional spray painting for smooth, even coverage on walls, ceilings and metal surfaces." },
  { icon: Warehouse, title: "Commercial Painting", desc: "Office, showroom, retail and industrial painting with minimal disruption to your business." },
  { icon: Wrench, title: "Putty & Repair Work", desc: "Wall putty application, crack filling, drywall repair and surface preparation for perfect finishes." },
  { icon: Award, title: "Premium Home Painting", desc: "Complete home painting packages with premium Asian Paints, Berger, and Dulux products." },
  { icon: Building2, title: "Apartment Painting", desc: "Specialized apartment and flat painting with quick turnaround and neighbor-friendly scheduling." },
  { icon: Home, title: "Villa Painting", desc: "Luxury villa painting with designer color consultations and premium finishing for high-end properties." },
];

function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Services"
            title="Professional Painting Services"
            subtitle="Complete range of premium painting solutions for residential, commercial and industrial properties across Tamil Nadu."
          />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((s) => (
              <div key={s.title} className="glass-card rounded-2xl p-8 hover-lift group">
                <div className="w-14 h-14 rounded-xl gradient-brand flex items-center justify-center mb-5">
                  <s.icon className="w-7 h-7 text-[oklch(1_0_0)]" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-[var(--font-heading)]">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-brand text-sm font-semibold group-hover:gap-2 transition-all">
                  Get Quote <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 gradient-brand">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[oklch(1_0_0)] font-[var(--font-heading)]">Need a Custom Painting Solution?</h2>
          <p className="mt-4 text-lg text-[oklch(1_0_0_/_80%)]">Contact us for a free consultation and personalized quote for your project.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-bold bg-[oklch(1_0_0)] text-brand shadow-lg hover:scale-105 transition-all">
            Get Free Estimate on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}