import { createFileRoute } from "@tanstack/react-router";
import { Award, Users, CheckCircle, Clock, Shield, Heart } from "lucide-react";
import founderImg from "@/assets/founder-rajesh.jpg";
import SectionHeading from "@/components/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Real Tamilnadu Painters | Best Painting Contractors in Coimbatore" },
      { name: "description", content: "Learn about Real Tamilnadu Painters - Tamil Nadu's most trusted painting contractor founded by Rajesh. 5.0 Google Rating, 41+ happy clients across Coimbatore, Chennai, Madurai." },
      { property: "og:title", content: "About Real Tamilnadu Painters" },
      { property: "og:description", content: "Tamil Nadu's most trusted painting contractors with 5.0 rating." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Shield, title: "Quality First", desc: "We use only premium paints and materials from top brands ensuring long-lasting, beautiful finishes." },
  { icon: Heart, title: "Customer Satisfaction", desc: "Every project is completed with dedication to exceeding customer expectations." },
  { icon: Clock, title: "On-Time Delivery", desc: "We respect your time and always complete projects within the agreed timeline." },
  { icon: Users, title: "Expert Team", desc: "Our skilled painters bring years of experience and professional craftsmanship." },
  { icon: Award, title: "Premium Finishing", desc: "Luxury-grade finishing that transforms spaces into stunning living environments." },
  { icon: CheckCircle, title: "Honest Pricing", desc: "Transparent pricing with no hidden costs. You get exactly what you pay for." },
];

function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="About Us"
            title="Tamil Nadu's Most Trusted Painting Contractors"
            subtitle="Real Tamilnadu Painters has been delivering premium-quality painting services across Tamil Nadu with a commitment to excellence, professionalism and customer satisfaction."
          />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden gold-border gold-glow">
                  <img src={founderImg} alt="Rajesh - Founder of Real Tamilnadu Painters receiving award" className="w-full object-cover" loading="lazy" width={600} height={500} />
                </div>
                <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-4 shadow-premium hidden sm:block">
                  <div className="text-3xl font-bold text-brand font-[var(--font-heading)]">14+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
              </div>
            </div>
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase gradient-brand text-[oklch(1_0_0)] mb-4">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[var(--font-heading)] mb-6">Building Trust Through Quality Workmanship</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded by Rajesh, Real Tamilnadu Painters started with a simple vision — to provide premium painting services that homeowners and businesses can trust. What began as a local painting service in Coimbatore has grown into Tamil Nadu's most sought-after painting contractor.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Rajesh received the prestigious <strong className="text-foreground">Best Painting Contractor in Tamil Nadu</strong> award from Asian Paints — a testament to his exceptional craftsmanship and commitment to excellence.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our commitment to using the best materials, employing skilled craftsmen, and maintaining transparent pricing has earned us a perfect 5.0 Google rating with 41+ genuine reviews from happy customers across Tamil Nadu.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-xl bg-secondary">
                  <div className="text-2xl font-bold text-brand font-[var(--font-heading)]">41+</div>
                  <div className="text-xs text-muted-foreground mt-1">Happy Clients</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-secondary">
                  <div className="text-2xl font-bold text-brand font-[var(--font-heading)]">5.0</div>
                  <div className="text-xs text-muted-foreground mt-1">Rating</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-secondary">
                <div className="text-2xl font-bold text-brand font-[var(--font-heading)]">500+</div>
                  <div className="text-xs text-muted-foreground mt-1">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Why Choose Us" title="Our Core Values" subtitle="What makes Real Tamilnadu Painters the preferred choice for painting services across Tamil Nadu." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="glass-card rounded-2xl p-8 hover-lift">
                <div className="w-14 h-14 rounded-xl gradient-brand flex items-center justify-center mb-5">
                  <v.icon className="w-7 h-7 text-[oklch(1_0_0)]" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 font-[var(--font-heading)]">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}