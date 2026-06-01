import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Calendar } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import project10 from "@/assets/project-10.jpg";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Painting Blog | Tips from a Painting Contractor in Coimbatore - Real Tamilnadu Painters" },
      { name: "description", content: "Painting tips, cost guides and how-to articles from Real Tamilnadu Painters - a trusted painting contractor in Coimbatore serving Tamil Nadu." },
      { property: "og:title", content: "Painting Blog | Real Tamilnadu Painters Coimbatore" },
      { property: "og:description", content: "Expert painting guides from Coimbatore's trusted house painters." },
      { property: "og:url", content: "https://realtamilnadupainters.com/blog" },
    ],
    links: [
      { rel: "canonical", href: "https://realtamilnadupainters.com/blog" },
    ],
  }),
  component: BlogIndex,
});

const posts = [
  {
    slug: "choose-painting-contractor-coimbatore",
    title: "How to Choose the Best Painting Contractor in Coimbatore (2026 Guide)",
    excerpt: "A practical checklist for homeowners hiring a painting contractor in Coimbatore — what to ask, what to compare and how to avoid costly mistakes.",
    date: "May 28, 2026",
    img: project10,
    alt: "Freshly painted navy and white villa exterior by Real Tamilnadu Painters in Coimbatore",
  },
];

function BlogIndex() {
  return (
    <>
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Blog" }]} />
          <SectionHeading
            badge="Blog"
            title="Painting Tips & Guides from Coimbatore Experts"
            subtitle="Insights, cost guides and how-to articles from Real Tamilnadu Painters — your trusted painting contractor in Coimbatore."
          />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-8">
            {posts.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group rounded-2xl overflow-hidden shadow-premium hover-lift bg-card block"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.img} alt={p.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" width={800} height={500} />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{p.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-foreground font-[var(--font-heading)] mb-2 group-hover:text-brand transition-colors">{p.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-brand text-sm font-semibold group-hover:gap-2 transition-all">
                    Read article <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}