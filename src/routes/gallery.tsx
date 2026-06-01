import { createFileRoute } from "@tanstack/react-router";
import SectionHeading from "@/components/SectionHeading";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import project7 from "@/assets/project-7.jpg";
import project8 from "@/assets/project-8.jpg";
import project9 from "@/assets/project-9.jpg";
import project10 from "@/assets/project-10.jpg";
import project11 from "@/assets/project-11.jpg";
import project12 from "@/assets/project-12.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Painting Project Gallery in Coimbatore | Real Tamilnadu Painters" },
      { name: "description", content: "Browse interior, exterior, texture and commercial painting projects completed by Real Tamilnadu Painters across Coimbatore, Chennai, Madurai and Tamil Nadu." },
      { property: "og:title", content: "Painting Project Gallery | Coimbatore - Real Tamilnadu Painters" },
      { property: "og:description", content: "Interior, exterior and commercial painting projects across Coimbatore and Tamil Nadu." },
      { property: "og:url", content: "https://realtamilnadupainters.com/gallery" },
    ],
    links: [
      { rel: "canonical", href: "https://realtamilnadupainters.com/gallery" },
    ],
  }),
  component: GalleryPage,
});

const projects = [
  { img: project12, title: "Modern Two-Storey Home Exterior", loc: "Coimbatore", cat: "Exterior Painting" },
  { img: project11, title: "Apartment Building Exterior Repaint", loc: "Coimbatore", cat: "Commercial Painting" },
  { img: project10, title: "Navy & White Villa Exterior", loc: "Coimbatore", cat: "Exterior Painting" },
  { img: project1, title: "Modern Elevation Exterior", loc: "Coimbatore", cat: "Exterior Painting" },
  { img: project2, title: "Premium Interior Texture", loc: "Coimbatore", cat: "Interior Painting" },
  { img: project3, title: "Blue & White Exterior", loc: "Tamil Nadu", cat: "Exterior Painting" },
  { img: project4, title: "Designer Wallpaper Finish", loc: "Coimbatore", cat: "Texture Painting" },
  { img: project5, title: "Geometric Wall Art", loc: "Tamil Nadu", cat: "Decorative Painting" },
  { img: project6, title: "Artistic Texture Wall", loc: "Coimbatore", cat: "Texture Painting" },
  { img: project7, title: "Colorful Building Exterior", loc: "Tamil Nadu", cat: "Exterior Painting" },
  { img: project8, title: "Premium White Villa", loc: "Coimbatore", cat: "Exterior Painting" },
  { img: project9, title: "Modern Grey & Orange Elevation", loc: "Tamil Nadu", cat: "Exterior Painting" },
];

function GalleryPage() {
  return (
    <>
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Portfolio"
            title="Our Premium Projects"
            subtitle="Explore our completed painting projects across Tamil Nadu showcasing premium quality workmanship and luxury finishes."
          />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth">
            <div className="grid grid-rows-2 grid-flow-col auto-cols-[85%] sm:auto-cols-[45%] lg:auto-cols-[32%] gap-6">
            {projects.map((p) => (
              <div key={p.title} className="group rounded-2xl overflow-hidden shadow-premium hover-lift">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={p.img} alt={`${p.title} by Real Tamilnadu Painters in ${p.loc}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" width={800} height={600} />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-sm font-medium text-[oklch(1_0_0)] px-3 py-1 rounded-full bg-brand/80">{p.cat}</span>
                  </div>
                </div>
                <div className="p-5 bg-card">
                  <h3 className="font-bold text-foreground font-[var(--font-heading)]">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.loc}, Tamil Nadu</p>
                  <a
                    href={`https://wa.me/918680046800?text=${encodeURIComponent(`Hi Real Tamilnadu Painters, I'd like to book ${p.cat} service for my property. Please tell me more about it.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center w-full rounded-xl px-4 py-2.5 text-sm font-bold gradient-brand text-[oklch(1_0_0)] hover:opacity-90 transition-all"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}