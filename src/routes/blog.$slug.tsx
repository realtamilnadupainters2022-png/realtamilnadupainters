import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronRight, Calendar, User, Phone } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import project10 from "@/assets/project-10.jpg";
import project13 from "@/assets/project-13.jpg";

const WHATSAPP_URL = "https://wa.me/918680046800?text=Hi%20Real%20Tamilnadu%20Painters%2C%20I%27d%20like%20to%20get%20a%20free%20estimate%20for%20painting%20service%20for%20my%20property.%20Please%20tell%20me%20more%20about%20it.";

const POSTS: Record<string, {
  title: string;
  description: string;
  date: string;
  dateISO: string;
  img: string;
  alt: string;
}> = {
  "choose-painting-contractor-coimbatore": {
    title: "How to Choose the Best Painting Contractor in Coimbatore (2026 Guide)",
    description: "A practical 2026 guide for homeowners hiring a painting contractor in Coimbatore — what to ask, what to compare, and how to avoid costly mistakes.",
    date: "May 28, 2026",
    dateISO: "2026-05-28",
    img: project10,
    alt: "Navy and white villa exterior repainted by Real Tamilnadu Painters in Coimbatore",
  },
  "best-exterior-paint-coimbatore-weather": {
    title: "Best Exterior Paint for Coimbatore Weather (2026 Homeowner's Guide)",
    description: "Coimbatore's sun, monsoon and humidity punish exterior walls. Learn how to choose a weather-proof exterior paint that lasts 7+ years — from a local painting contractor.",
    date: "June 12, 2026",
    dateISO: "2026-06-12",
    img: project13,
    alt: "Contemporary grey duplex exterior painted by Real Tamilnadu Painters in Chinnavedampatti, Coimbatore",
  },
};

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS[params.slug];
    if (!post) throw notFound();
    return post;
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Blog Post Not Found" }] };
    const url = `https://realtamilnadupainters.com/blog/${params.slug}`;
    return {
      meta: [
        { title: `${loaderData.title} | Real Tamilnadu Painters` },
        { name: "description", content: loaderData.description },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: loaderData.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: loaderData.title,
            description: loaderData.description,
            datePublished: loaderData.dateISO,
            author: { "@type": "Organization", name: "Real Tamilnadu Painters" },
            publisher: {
              "@type": "Organization",
              name: "Real Tamilnadu Painters",
              logo: { "@type": "ImageObject", url: "https://realtamilnadupainters.com/logo.png" },
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
          }),
        },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const post = Route.useLoaderData();
  const { slug } = Route.useParams();
  return (
    <>
      <section className="pt-32 pb-12 sm:pt-40 bg-secondary/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Blog", to: "/blog" }, { label: post.title }]} />
          <div className="flex items-center gap-4 text-xs text-muted-foreground mt-4">
            <span className="inline-flex items-center gap-1.5"><Calendar className="w-4 h-4" />{post.date}</span>
            <span className="inline-flex items-center gap-1.5"><User className="w-4 h-4" />Real Tamilnadu Painters</span>
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-[var(--font-heading)] leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-premium mb-10">
            <img src={post.img} alt={post.alt} className="w-full h-auto object-cover" width={1200} height={750} />
          </div>

          <div className="prose-content text-foreground space-y-6">
            {slug === "best-exterior-paint-coimbatore-weather" ? <ExteriorPaintBody /> : <>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hiring a painting contractor in Coimbatore is one of the most important decisions you'll make when refreshing your home or commercial property. The right team protects your walls for years; the wrong one leaves you with peeling paint, surprise costs and avoidable headaches. This guide walks you through exactly what to look for in 2026.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-[var(--font-heading)] mt-10 mb-4">Why Hiring a Local Painting Contractor in Coimbatore Matters</h2>
            <p className="text-muted-foreground leading-relaxed">
              Coimbatore's tropical climate, monsoon humidity and summer heat are tough on exterior walls. A local <Link to="/services" className="text-brand font-semibold hover:underline">painting contractor</Link> understands which paints, primers and waterproofing systems actually last in Tamil Nadu — not just what looks good in a brochure. Local teams also offer faster site visits, easier follow-ups and on-ground accountability after the project is done.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-[var(--font-heading)] mt-10 mb-4">7 Things to Check Before Hiring House Painters in Coimbatore</h2>

            <h3 className="text-xl font-bold text-foreground font-[var(--font-heading)] mt-6 mb-2">1. Verified portfolio and recent projects</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ask to see completed work — ideally projects within the last 6–12 months. Browse our <Link to="/gallery" className="text-brand font-semibold hover:underline">painting project gallery</Link> for real interior, exterior and texture finishes done across Coimbatore.
            </p>

            <h3 className="text-xl font-bold text-foreground font-[var(--font-heading)] mt-6 mb-2">2. Genuine customer reviews</h3>
            <p className="text-muted-foreground leading-relaxed">
              Don't rely on the contractor's word — read independent reviews. Real Tamilnadu Painters holds a 5.0 Google rating, and you can read every review on our <Link to="/reviews" className="text-brand font-semibold hover:underline">client reviews</Link> page.
            </p>

            <h3 className="text-xl font-bold text-foreground font-[var(--font-heading)] mt-6 mb-2">3. Transparent, written quotation</h3>
            <p className="text-muted-foreground leading-relaxed">
              A trustworthy contractor itemises labour, materials, putty, primer, scaffolding and number of coats in writing. Vague "all-in" quotes almost always lead to disputes mid-project.
            </p>

            <h3 className="text-xl font-bold text-foreground font-[var(--font-heading)] mt-6 mb-2">4. Branded paints and the right product mix</h3>
            <p className="text-muted-foreground leading-relaxed">
              Insist on sealed buckets from Asian Paints, Berger, Dulux or Nerolac. For exterior walls in Coimbatore, weather-resistant emulsions with UV protection are non-negotiable. For damp-prone areas, ask about Dr. Fixit or Pidilite-based <Link to="/services/waterproof-painting" className="text-brand font-semibold hover:underline">waterproofing services</Link>.
            </p>

            <h3 className="text-xl font-bold text-foreground font-[var(--font-heading)] mt-6 mb-2">5. Proper surface preparation</h3>
            <p className="text-muted-foreground leading-relaxed">
              Most paint failures are caused by skipping prep work. A good team scrapes loose paint, repairs cracks, applies wall putty, sands, and primes — before a single drop of finish paint goes on.
            </p>

            <h3 className="text-xl font-bold text-foreground font-[var(--font-heading)] mt-6 mb-2">6. Skilled in-house painters (not random labour)</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ask whether the painters are trained, full-time team members or daily-wage labour brought in for your job. Trained painters deliver consistent finishes — especially for premium textures and <Link to="/services/luxury-home-painting" className="text-brand font-semibold hover:underline">luxury home painting</Link>.
            </p>

            <h3 className="text-xl font-bold text-foreground font-[var(--font-heading)] mt-6 mb-2">7. Warranty and post-project support</h3>
            <p className="text-muted-foreground leading-relaxed">
              Reputable contractors stand behind their work with a written warranty on workmanship and a clear point of contact for follow-up.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-[var(--font-heading)] mt-10 mb-4">How Much Does House Painting Cost in Coimbatore?</h2>
            <p className="text-muted-foreground leading-relaxed">
              In 2026, interior painting in Coimbatore typically ranges from ₹12–₹35 per sq ft, exterior painting from ₹15–₹40 per sq ft, and waterproof coatings from ₹20–₹50 per sq ft — depending on paint quality, surface condition and number of coats. The full breakdown for each service is on our <Link to="/services/house-painting" className="text-brand font-semibold hover:underline">house painting</Link> and <Link to="/services/exterior-painting" className="text-brand font-semibold hover:underline">exterior painting</Link> pages.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-[var(--font-heading)] mt-10 mb-4">Red Flags to Avoid</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
              <li>Quotes far below market rate — usually means cheap paint or skipped prep work.</li>
              <li>No physical office or verifiable address in Coimbatore.</li>
              <li>Demands for full payment upfront.</li>
              <li>No written contract or scope of work.</li>
              <li>Unable to share recent project photos or client references.</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-[var(--font-heading)] mt-10 mb-4">Why Customers in Coimbatore Choose Real Tamilnadu Painters</h2>
            <p className="text-muted-foreground leading-relaxed">
              With 14+ years of experience, 1,100+ completed projects and a 5.0 Google rating, Real Tamilnadu Painters is one of the most trusted painting contractors in Coimbatore. We use only branded paints, deploy our own trained team, share a transparent itemised quote, and back every project with a workmanship warranty. Learn more <Link to="/about" className="text-brand font-semibold hover:underline">about us</Link>.
            </p>
            </>}
          </div>

          {/* Strong CTA */}
          <div className="mt-14 rounded-3xl gradient-brand p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[oklch(1_0_0)] font-[var(--font-heading)]">Get a Free Painting Estimate in Coimbatore</h2>
            <p className="mt-3 text-[oklch(1_0_0_/_85%)] max-w-2xl mx-auto">
              Ready to repaint your home or office? Talk to Coimbatore's top-rated painting contractor today — free site visit, transparent pricing, zero pressure.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-bold bg-[oklch(1_0_0)] text-brand shadow-lg hover:scale-105 transition-all">
                Get Free Estimate on WhatsApp <ChevronRight className="w-5 h-5" />
              </a>
              <a href="tel:+918680046800" className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-bold border-2 border-[oklch(1_0_0)] text-[oklch(1_0_0)] hover:bg-[oklch(1_0_0_/_10%)] transition-all">
                <Phone className="w-5 h-5" /> Call +91 86800 46800
              </a>
            </div>
          </div>

          {/* Related links */}
          <div className="mt-12 grid sm:grid-cols-2 gap-4">
            <Link to="/services" className="glass-card rounded-xl p-5 flex items-center justify-between hover-lift group">
              <span className="font-semibold text-foreground">Browse All Painting Services</span>
              <ChevronRight className="w-5 h-5 text-brand group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="glass-card rounded-xl p-5 flex items-center justify-between hover-lift group">
              <span className="font-semibold text-foreground">Contact Us in Coimbatore</span>
              <ChevronRight className="w-5 h-5 text-brand group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}