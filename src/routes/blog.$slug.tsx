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

function ExteriorPaintBody() {
  return (
    <>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Coimbatore's weather is beautiful — and brutal on paint. Peak summer touches 40°C with harsh UV, the southwest monsoon dumps wind-driven rain against west-facing walls, and coastal humidity creeps up walls that were never sealed properly. If you're planning to repaint your home or commercial building this year, choosing the right exterior paint matters more than the colour itself. This 2026 guide, written by a working <Link to="/services" className="text-brand font-semibold hover:underline">painting contractor in Coimbatore</Link>, walks you through exactly what to buy, what to avoid and how to make an exterior paint job last 7+ years.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-[var(--font-heading)] mt-10 mb-4">Why Coimbatore Weather Is Tough on Exterior Paint</h2>
      <p className="text-muted-foreground leading-relaxed">
        Three local factors decide how long an exterior paint lasts in Coimbatore:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
        <li><strong>UV radiation</strong> — 8–10 months of strong sunlight fade cheap emulsions within 2 years.</li>
        <li><strong>Monsoon and wind-driven rain</strong> — moisture pushes into micro-cracks and lifts the paint film from behind.</li>
        <li><strong>Thermal expansion</strong> — day/night temperature swings crack rigid coatings, especially over new plaster.</li>
      </ul>
      <p className="text-muted-foreground leading-relaxed">
        A paint that "looks the same" in the shop can behave completely differently on a west-facing wall in Peelamedu after one monsoon. That's why paint selection has to be matched to your wall's orientation, age and substrate — something a local <Link to="/services/exterior-painting" className="text-brand font-semibold hover:underline">exterior painting contractor</Link> does on every site visit.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-[var(--font-heading)] mt-10 mb-4">What to Look for in an Exterior Paint (2026 Checklist)</h2>

      <h3 className="text-xl font-bold text-foreground font-[var(--font-heading)] mt-6 mb-2">1. 100% Acrylic Emulsion Base</h3>
      <p className="text-muted-foreground leading-relaxed">
        Skip cement-based distempers and cheap "exterior emulsions" that are actually interior formulas re-branded. A true 100% acrylic exterior emulsion flexes with the wall, resists UV and stays breathable so trapped moisture can escape.
      </p>

      <h3 className="text-xl font-bold text-foreground font-[var(--font-heading)] mt-6 mb-2">2. UV & Weather Warranty (5–10 Years)</h3>
      <p className="text-muted-foreground leading-relaxed">
        Trusted brands print a written warranty on the tin — Asian Paints Apex Ultima, Berger WeatherCoat All Guard, Dulux Weathershield Max and Nerolac Excel Total all offer 5–10 year performance warranties. If the paint you're being quoted has no written warranty, that's a red flag.
      </p>

      <h3 className="text-xl font-bold text-foreground font-[var(--font-heading)] mt-6 mb-2">3. Dirt Pick-Up Resistance</h3>
      <p className="text-muted-foreground leading-relaxed">
        Coimbatore has heavy vehicular dust from Avinashi Road, Trichy Road and the industrial belts. Look for paints marketed as "self-cleaning" or "dirt guard" — their smoother film sheds dust with every rain instead of collecting streaks.
      </p>

      <h3 className="text-xl font-bold text-foreground font-[var(--font-heading)] mt-6 mb-2">4. Algae and Fungus Protection</h3>
      <p className="text-muted-foreground leading-relaxed">
        Any wall that stays shaded — north-facing, behind a compound wall, near trees — will grow black algae in Coimbatore's monsoon. Choose a paint with built-in anti-algal/anti-fungal additives. It saves an ugly re-clean job 18 months later.
      </p>

      <h3 className="text-xl font-bold text-foreground font-[var(--font-heading)] mt-6 mb-2">5. Elastomeric / Crack-Bridging Ability</h3>
      <p className="text-muted-foreground leading-relaxed">
        For older homes with hairline cracks, an elastomeric top coat (or a crack-bridging primer + premium emulsion) stretches over movement instead of splitting. This alone can add 3–4 years to your paint life.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-[var(--font-heading)] mt-10 mb-4">Best Exterior Paints for Coimbatore (2026)</h2>
      <p className="text-muted-foreground leading-relaxed">
        Based on hundreds of exterior projects we've completed across Coimbatore, Tiruppur, Erode and Salem, these are the exterior paint systems that consistently perform:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
        <li><strong>Premium tier (7–10 yr life):</strong> Asian Paints Apex Ultima Protek, Berger WeatherCoat All Guard, Dulux Weathershield Max.</li>
        <li><strong>Mid tier (5–7 yr life):</strong> Asian Paints Apex, Berger WeatherCoat Long Life, Nerolac Excel Total.</li>
        <li><strong>Budget tier (3–5 yr life):</strong> Asian Paints Ace, Berger Bison Acrylic Exterior. Fine for compound walls and rental properties.</li>
      </ul>
      <p className="text-muted-foreground leading-relaxed">
        Any of these applied over the wrong prep work will still fail. Paint quality is only 40% of the result — surface preparation is the other 60%.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-[var(--font-heading)] mt-10 mb-4">Surface Preparation Steps That Actually Matter</h2>
      <ol className="list-decimal pl-6 space-y-2 text-muted-foreground leading-relaxed">
        <li><strong>Power wash</strong> the wall to remove dust, chalking and algae. Never paint over old flaking paint.</li>
        <li><strong>Scrape and sand</strong> all loose paint back to a sound edge — don't just paint over it.</li>
        <li><strong>Repair cracks</strong> with acrylic wall putty or a flexible sealant for structural cracks.</li>
        <li><strong>Apply an exterior primer</strong> — a proper alkali-resistant primer is non-negotiable on new plaster or repaired areas.</li>
        <li><strong>Two full top coats</strong> of exterior emulsion, with correct thinning ratio and drying time between coats.</li>
        <li><strong>Waterproof problem zones</strong> — parapet walls, sunshades, terrace-wall junctions — with a proper <Link to="/services/waterproof-painting" className="text-brand font-semibold hover:underline">waterproofing coat</Link> before the finish paint.</li>
      </ol>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-[var(--font-heading)] mt-10 mb-4">How Much Does Exterior Painting Cost in Coimbatore (2026)?</h2>
      <p className="text-muted-foreground leading-relaxed">
        For a labour + material contract in Coimbatore, current market rates are approximately:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
        <li>Budget acrylic exterior — ₹15–₹22 per sq ft</li>
        <li>Mid-range weatherproof emulsion — ₹22–₹32 per sq ft</li>
        <li>Premium 7–10 year warranty system — ₹32–₹45 per sq ft</li>
        <li>Textured / stone finish exterior — ₹45–₹80 per sq ft</li>
      </ul>
      <p className="text-muted-foreground leading-relaxed">
        These are painted-area rates, not carpet area. A typical 1,500 sq ft independent house has about 3,000–3,500 sq ft of paintable exterior. For a transparent, itemised quote for your property, see our <Link to="/services/exterior-painting" className="text-brand font-semibold hover:underline">exterior painting service page</Link> or send photos on WhatsApp.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-[var(--font-heading)] mt-10 mb-4">Best Time to Paint Exterior Walls in Coimbatore</h2>
      <p className="text-muted-foreground leading-relaxed">
        The ideal painting windows in Coimbatore are <strong>January to April</strong> and <strong>mid-August to early October</strong>, when humidity is moderate and rainfall is low. Avoid painting during the northeast monsoon (October–December) — even one shower within 4 hours of top-coating can ruin the finish. If your project must happen in monsoon, an experienced local team will schedule shaded elevations, tent the working face, and stop work at the first sign of rain.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-[var(--font-heading)] mt-10 mb-4">Common Mistakes Homeowners Make</h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
        <li>Choosing paint by colour first, brand tier second. Colour is easy to change; a bad paint tier means a repaint in 2 years.</li>
        <li>Skipping primer to save ₹8,000 — then repainting the whole elevation in 3 years for ₹1.2 lakh.</li>
        <li>Diluting exterior emulsion beyond the manufacturer's spec to stretch coverage.</li>
        <li>Ignoring waterproofing on parapet walls and sunshades — the #1 cause of ceiling seepage after monsoon.</li>
        <li>Hiring by lowest quote instead of scope-matched quote. Compare <Link to="/gallery" className="text-brand font-semibold hover:underline">completed projects</Link> and <Link to="/reviews" className="text-brand font-semibold hover:underline">client reviews</Link>, not just price.</li>
      </ul>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-[var(--font-heading)] mt-10 mb-4">Frequently Asked Questions</h2>

      <h3 className="text-xl font-bold text-foreground font-[var(--font-heading)] mt-6 mb-2">How long does exterior paint last in Coimbatore?</h3>
      <p className="text-muted-foreground leading-relaxed">
        A premium 100% acrylic exterior emulsion applied over correct prep work lasts 7–10 years in Coimbatore. Mid-range systems last 5–7 years. Budget paints without primer typically start chalking or streaking within 2–3 years.
      </p>

      <h3 className="text-xl font-bold text-foreground font-[var(--font-heading)] mt-6 mb-2">Which is the best exterior paint brand for Tamil Nadu weather?</h3>
      <p className="text-muted-foreground leading-relaxed">
        Asian Paints Apex Ultima Protek, Berger WeatherCoat All Guard and Dulux Weathershield Max are all proven premium options for Tamil Nadu's climate. The correct choice depends on wall condition, budget and warranty needs.
      </p>

      <h3 className="text-xl font-bold text-foreground font-[var(--font-heading)] mt-6 mb-2">Can I paint the exterior during monsoon in Coimbatore?</h3>
      <p className="text-muted-foreground leading-relaxed">
        It's not recommended. Exterior emulsion needs 4–6 hours of dry weather after top-coating. If the project must happen during monsoon, an experienced contractor will schedule around rain windows and tent the working elevation.
      </p>

      <h3 className="text-xl font-bold text-foreground font-[var(--font-heading)] mt-6 mb-2">Do I need waterproofing along with exterior painting?</h3>
      <p className="text-muted-foreground leading-relaxed">
        Yes, for parapet walls, sunshades, terrace-to-wall junctions and any wall that shows seepage stains. A dedicated <Link to="/services/waterproof-painting" className="text-brand font-semibold hover:underline">waterproofing coat</Link> applied under the finish paint prevents 90% of monsoon leaks.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-[var(--font-heading)] mt-10 mb-4">Get a Weather-Proof Exterior Paint Job in Coimbatore</h2>
      <p className="text-muted-foreground leading-relaxed">
        Real Tamilnadu Painters has repainted 1,100+ homes, apartments and commercial buildings across Coimbatore and Tamil Nadu. We use only branded exterior systems, follow full prep-work protocol, and back every exterior project with a workmanship warranty. To plan your repaint, contact us for a free site visit and itemised quote — or read more <Link to="/about" className="text-brand font-semibold hover:underline">about our team</Link>.
      </p>
    </>
  );
}