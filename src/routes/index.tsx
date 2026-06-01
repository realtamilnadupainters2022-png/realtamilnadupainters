import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Star, Shield, Clock, Award, ChevronRight, Phone, Users, CheckCircle, Paintbrush, Home, Building2, Droplets, Calendar } from "lucide-react";
import heroImg from "@/assets/hero-bg.jpg";
import founderImg from "@/assets/founder-rajesh.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project5 from "@/assets/project-5.jpg";
import project4 from "@/assets/project-4.jpg";
import project6 from "@/assets/project-6.jpg";
import project7 from "@/assets/project-7.jpg";
import project8 from "@/assets/project-8.jpg";
import project9 from "@/assets/project-9.jpg";
import project10 from "@/assets/project-10.jpg";
import project11 from "@/assets/project-11.jpg";
import project12 from "@/assets/project-12.jpg";
import logoImg from "@/assets/logo.png";
import brandIdentityImg from "@/assets/brand-identity.png";
import SectionHeading from "@/components/SectionHeading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Painting Contractor in Coimbatore | Real Tamilnadu Painters" },
      { name: "description", content: "Looking for a painting contractor in Coimbatore? Real Tamilnadu Painters offers house painters, interior & exterior painting, waterproofing and commercial painting across Tamil Nadu. ⭐ 5.0 rating. Call +91 86800 46800." },
      { property: "og:title", content: "Painting Contractor in Coimbatore | Real Tamilnadu Painters" },
      { property: "og:description", content: "House painters, interior, exterior, waterproofing & commercial painting in Coimbatore and across Tamil Nadu. 1100+ happy clients." },
      { property: "og:url", content: "https://realtamilnadupainters.com/" },
    ],
    links: [
      { rel: "canonical", href: "https://realtamilnadupainters.com/" },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL = "https://wa.me/918680046800?text=Hi%20Real%20Tamilnadu%20Painters%2C%20I%27d%20like%20to%20get%20a%20free%20estimate%20for%20painting%20service%20for%20my%20property.%20Please%20tell%20me%20more%20about%20it.";

const stats = [
  { target: 1100, suffix: "+", label: "Happy Clients", icon: Users },
  { target: 5, suffix: "", decimals: 1, label: "Google Rating", icon: Star },
  { target: 1100, suffix: "+", label: "Projects Done", icon: CheckCircle },
  { target: 14, suffix: "+", label: "Years Experience", icon: Award },
  { target: 25, suffix: "+", label: "Certified Painters", icon: Paintbrush },
];

function CountUp({ target, suffix = "", decimals = 0, start }: { target: number; suffix?: string; decimals?: number; start: boolean }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    const duration = 1500;
    const startTime = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target]);
  return <>{value.toFixed(decimals)}{suffix}</>;
}

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current || inView) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [inView]);
  return { ref, inView };
}

function StatsSection() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section className="relative -mt-16 z-20 mx-auto max-w-5xl px-4" aria-label="Statistics">
      <div ref={ref} className="glass-card rounded-2xl p-6 sm:p-8 grid grid-cols-2 md:grid-cols-5 gap-6 shadow-premium">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <s.icon className="w-8 h-8 mx-auto mb-2 text-brand" />
            <div className="text-3xl sm:text-4xl font-bold text-foreground font-[var(--font-heading)]">
              <CountUp target={s.target} suffix={s.suffix} decimals={s.decimals ?? 0} start={inView} />
            </div>
            <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const featuredServices = [
  { icon: Home, title: "Interior Painting", desc: "Premium interior painting with luxury finishes for homes and apartments across Tamil Nadu." },
  { icon: Building2, title: "Exterior Painting", desc: "Weather-resistant exterior painting that protects and beautifies your property for years." },
  { icon: Paintbrush, title: "Texture Painting", desc: "Stunning decorative texture painting by expert craftsmen for a premium wall finish." },
  { icon: Droplets, title: "Waterproof Painting", desc: "Advanced waterproof coatings that protect against dampness, leaks and moisture damage." },
  { icon: Shield, title: "Wood Polish", desc: "Expert wood polishing and varnishing for doors, furniture and woodwork with lasting shine." },
  { icon: Award, title: "Commercial Painting", desc: "Professional painting for offices, shops, showrooms and commercial spaces in Tamil Nadu." },
];

const cities = ["Coimbatore", "Chennai", "Madurai", "Trichy", "Salem", "Erode", "Tiruppur", "Kerala", "Karnataka"];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Premium interior painting by Real Tamilnadu Painters" width={1920} height={1080} className="w-full h-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-gold text-gold" />)}</div>
              <span className="text-gold-light text-sm font-medium">5.0 Rating · 999+ Reviews</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[oklch(1_0_0)] leading-tight font-[var(--font-heading)]">
              Tamil Nadu's Trusted{" "}
              <span className="text-gradient-brand">Premium Painting</span>{" "}
              Contractors
            </h1>
            <p className="mt-6 text-lg text-[oklch(1_0_0_/_80%)] max-w-xl leading-relaxed">
              Professional Interior & Exterior Painting Services with Luxury Finishing Across Tamil Nadu. Trusted by 1100+ happy clients.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-bold gradient-brand text-[oklch(1_0_0)] shadow-brand hover:opacity-90 transition-all hover:scale-105">
                Get Free Estimate <ChevronRight className="w-5 h-5" />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-bold bg-[oklch(0.55_0.17_145)] text-[oklch(1_0_0)] shadow-lg hover:bg-[oklch(0.5_0.17_145)] transition-all hover:scale-105">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Services Preview */}
      <section className="py-20 sm:py-28 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative" aria-label="Our Services">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img src={logoImg} alt="" className="w-[80%] sm:w-[500px] opacity-[0.15]" aria-hidden="true" />
        </div>
        <SectionHeading badge="Our Services" title="Premium Painting Services" subtitle="From interior makeovers to exterior transformations, we deliver luxury-grade painting across Tamil Nadu with unmatched quality and professionalism." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((s) => (
            <div key={s.title} className="glass-card rounded-2xl p-8 hover-lift group cursor-pointer">
              <div className="w-14 h-14 rounded-xl gradient-brand flex items-center justify-center mb-5">
                <s.icon className="w-7 h-7 text-[oklch(1_0_0)]" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-[var(--font-heading)]">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-brand font-semibold hover:gap-3 transition-all">
            View All Services <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Founder */}
      {/* Brand Identity */}
      <section className="py-20 sm:py-28 bg-[oklch(0.13_0.01_38)] relative overflow-hidden" aria-label="Brand Identity">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, oklch(0.78 0.15 75 / 30%), transparent 50%), radial-gradient(circle at 80% 50%, oklch(0.65 0.2 38 / 20%), transparent 50%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Our Identity" title="The Mark of Premium Craftsmanship" subtitle="A brand built on trust, quality, and the relentless pursuit of painting excellence across Tamil Nadu." />
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold/10 via-transparent to-brand/10 blur-2xl" />
                  <img src={brandIdentityImg} alt="Real Tamilnadu Painters - Premium Brand Identity Logo featuring golden house, paintbrush, and Tamil Nadu map" className="relative w-full max-w-sm rounded-2xl shadow-premium" loading="lazy" width={600} height={700} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[oklch(1_0_0)] font-[var(--font-heading)] mb-6">
                  More Than a Logo — <span className="text-gradient-brand">A Promise</span>
                </h3>
                <p className="text-[oklch(0.8_0_0)] leading-relaxed mb-5">
                  Our emblem captures everything Real Tamilnadu Painters stands for — the golden house symbolizes the dream homes we transform, while the paintbrush represents the skilled craftsmanship behind every stroke. The silhouette of Tamil Nadu proudly marks our roots and the land we serve.
                </p>
                <p className="text-[oklch(0.8_0_0)] leading-relaxed mb-8">
                  The four pillars beneath our name define our core values: <strong className="text-gold">Quality You Can See</strong>, <strong className="text-gold">Service You Can Trust</strong>, <strong className="text-gold">Beauty We Deliver</strong>, and <strong className="text-gold">Perfection We Promise</strong>. Our Tamil tagline — <em>"நம் ஊர், நம் பணி, உங்கள் நம்பிக்கை"</em> — means "Our Town, Our Work, Your Trust."
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { num: "14+", label: "Years of Trust" },
                    { num: "1000+", label: "Projects Completed" },
                    { num: "5.0★", label: "Google Rating" },
                    { num: "100%", label: "Satisfaction" },
                  ].map((s) => (
                    <div key={s.label} className="p-4 rounded-xl bg-[oklch(1_0_0_/_5%)] border border-[oklch(1_0_0_/_8%)] text-center">
                      <div className="text-xl font-bold text-gold font-[var(--font-heading)]">{s.num}</div>
                      <div className="text-xs text-[oklch(0.7_0_0)] mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-secondary/50" aria-label="Meet The Founder">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Leadership" title="Meet The Founder" />
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-3xl overflow-hidden shadow-premium">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 relative">
                  <div className="aspect-[3/4] md:aspect-auto md:h-full relative">
                    <img src={founderImg} alt="Rajesh - Founder of Real Tamilnadu Painters" className="w-full h-full object-cover" loading="lazy" width={400} height={533} />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent md:bg-gradient-to-r md:from-transparent md:to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 md:hidden p-6">
                    <h3 className="text-2xl font-bold text-[oklch(1_0_0)] font-[var(--font-heading)]">Rajesh</h3>
                    <p className="text-gold-light text-sm font-medium">Founder & Lead Contractor</p>
                  </div>
                </div>
                <div className="md:col-span-3 p-8 sm:p-10 flex flex-col justify-center">
                  <div className="hidden md:block mb-4">
                    <h3 className="text-3xl font-bold text-foreground font-[var(--font-heading)]">Rajesh</h3>
                    <p className="text-brand font-semibold mt-1">Founder & Lead Contractor</p>
                  </div>
                  <div className="w-16 h-1 gradient-gold rounded-full mb-6" />
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Rajesh founded Real Tamilnadu Painters with a vision to deliver premium-quality painting services with professional finishing, honest pricing, and customer satisfaction across Tamil Nadu. His dedication to quality workmanship and attention to detail has helped build strong trust among homeowners and commercial clients. Rajesh received the prestigious <strong className="text-foreground">Best Painting Contractor in Tamil Nadu</strong> award from Asian Paints — a testament to his exceptional craftsmanship and commitment to excellence.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Quality First", desc: "Premium materials & finishing" },
                      { label: "Expert Team", desc: "Skilled professional painters" },
                      { label: "On-Time", desc: "Timely project completion" },
                      { label: "Honest Pricing", desc: "No hidden costs ever" },
                    ].map((h) => (
                      <div key={h.label} className="p-3 rounded-xl bg-secondary/80">
                        <div className="text-sm font-bold text-foreground">{h.label}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{h.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 sm:py-28 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Recent Projects">
        <SectionHeading badge="Our Work" title="Recent Projects" subtitle="Explore our premium painting projects across Tamil Nadu - from luxury villas to modern apartments and commercial spaces." />
        <div className="overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth">
          <div className="grid grid-rows-2 grid-flow-col auto-cols-[85%] sm:auto-cols-[45%] md:auto-cols-[32%] gap-6">
          {[
            { img: project12, title: "Modern Two-Storey Home Exterior", loc: "Coimbatore" },
            { img: project11, title: "Apartment Building Exterior Repaint", loc: "Coimbatore" },
            { img: project10, title: "Navy & White Villa Exterior", loc: "Coimbatore" },
            { img: project1, title: "Modern Elevation Exterior", loc: "Coimbatore" },
            { img: project2, title: "Premium Interior Texture", loc: "Coimbatore" },
            { img: project3, title: "Blue & White Exterior", loc: "Tamil Nadu" },
            { img: project4, title: "Designer Wallpaper Finish", loc: "Coimbatore" },
            { img: project5, title: "Geometric Wall Art Design", loc: "Tamil Nadu" },
            { img: project6, title: "Artistic Texture Wall", loc: "Coimbatore" },
            { img: project7, title: "Colorful Building Exterior", loc: "Tamil Nadu" },
            { img: project8, title: "Premium White Villa", loc: "Coimbatore" },
            { img: project9, title: "Modern Grey & Orange Elevation", loc: "Tamil Nadu" },
          ].map((p) => (
            <div key={p.title} className="group rounded-2xl overflow-hidden shadow-premium hover-lift">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={`${p.title} - ${p.loc} - Real Tamilnadu Painters`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" width={800} height={600} />
              </div>
              <div className="p-5 bg-card">
                <h3 className="font-bold text-foreground font-[var(--font-heading)]">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{p.loc}, Tamil Nadu</p>
                <a
                  href={`https://wa.me/918680046800?text=${encodeURIComponent(`Hi Real Tamilnadu Painters, I'd like to book ${p.title} service for my property. Please tell me more about it.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 w-full rounded-xl px-4 py-2.5 text-sm font-bold gradient-brand text-[oklch(1_0_0)] hover:opacity-90 transition-all"
                >
                  Get Started <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
          </div>
        </div>
        <div className="text-center mt-10">
          <Link to="/gallery" className="inline-flex items-center gap-2 text-brand font-semibold hover:gap-3 transition-all">
            View Full Gallery <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 sm:py-28 bg-secondary/50" aria-label="Service Areas">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Coverage" title="We Serve Across Tamil Nadu & Beyond" subtitle="Professional painting services available in all major cities of Tamil Nadu and nearby states." />
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((c) => (
              <span key={c} className="px-5 py-2.5 rounded-full glass-card text-sm font-medium text-foreground hover:shadow-brand hover:border-brand/30 transition-all cursor-default">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 gradient-brand relative overflow-hidden" aria-label="Get Free Estimate">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[oklch(1_0_0)] font-[var(--font-heading)]">
            Ready to Transform Your Space?
          </h2>
          <p className="mt-4 text-lg text-[oklch(1_0_0_/_80%)]">
            Get a free estimate for your painting project. No hidden costs, premium quality guaranteed.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-bold bg-[oklch(1_0_0)] text-brand shadow-lg hover:bg-[oklch(0.95_0_0)] transition-all hover:scale-105">
              Get Free Estimate
            </a>
            <a href="tel:+918680046800" className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-bold border-2 border-[oklch(1_0_0)] text-[oklch(1_0_0)] hover:bg-[oklch(1_0_0_/_10%)] transition-all">
              <Phone className="w-5 h-5" /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 sm:py-28 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Latest Blog">
        <SectionHeading badge="Blog" title="Painting Tips & Guides" subtitle="Expert advice from Coimbatore's trusted painting contractors to help you make the best decisions for your home." />
        <div className="max-w-3xl mx-auto">
          <Link
            to="/blog/$slug"
            params={{ slug: "choose-painting-contractor-coimbatore" }}
            className="group block rounded-2xl overflow-hidden shadow-premium hover-lift bg-card"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img src={project10} alt="Freshly painted navy and white villa exterior by Real Tamilnadu Painters in Coimbatore" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" width={800} height={450} />
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <Calendar className="w-4 h-4" />
                <span>May 28, 2026</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground font-[var(--font-heading)] mb-3 group-hover:text-brand transition-colors">How to Choose the Best Painting Contractor in Coimbatore (2026 Guide)</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">A practical checklist for homeowners hiring a painting contractor in Coimbatore — what to ask, what to compare and how to avoid costly mistakes.</p>
              <span className="inline-flex items-center gap-1 text-brand text-sm font-semibold group-hover:gap-2 transition-all">
                Read article <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>
        <div className="text-center mt-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-brand font-semibold hover:gap-3 transition-all">
            View All Articles <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FAQ for SEO */}
      <section className="py-20 sm:py-28 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8" aria-label="FAQ">
        <SectionHeading badge="FAQ" title="Frequently Asked Questions" subtitle="Common questions about our painting services in Tamil Nadu." />
        <div className="space-y-4">
          {[
            { q: "What areas do Real Tamilnadu Painters serve?", a: "We serve all major cities in Tamil Nadu including Coimbatore, Chennai, Madurai, Trichy, Salem, Erode, Tiruppur, and nearby states like Kerala, Karnataka, Andhra Pradesh and Puducherry." },
            { q: "How much do painting services cost in Coimbatore?", a: "Our painting services are competitively priced starting from affordable rates. Contact us for a free estimate based on your specific requirements." },
            { q: "Do you provide waterproof painting services?", a: "Yes, we are experts in waterproof painting and coating. We use premium waterproofing materials to protect your property from dampness and moisture damage." },
            { q: "What types of painting services do you offer?", a: "We offer interior painting, exterior painting, texture painting, waterproof painting, decorative painting, wood polish, metal painting, spray painting, and more." },
            { q: "Are you the best painters in Tamil Nadu?", a: "With a 5.0 Google rating and 1000+ positive reviews, Real Tamilnadu Painters is one of the most trusted and highly rated painting contractors in Tamil Nadu." },
          ].map((faq) => (
            <details key={faq.q} className="glass-card rounded-xl p-6 group">
              <summary className="text-base font-semibold text-foreground cursor-pointer list-none flex items-center justify-between">
                {faq.q}
                <ChevronRight className="w-5 h-5 text-brand transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
