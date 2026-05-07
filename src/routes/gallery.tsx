import { createFileRoute } from "@tanstack/react-router";
import SectionHeading from "@/components/SectionHeading";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Our Projects Gallery | Real Tamilnadu Painters - Premium Painting Work" },
      { name: "description", content: "View our premium painting projects gallery - Interior, exterior, texture, and commercial painting work across Coimbatore, Chennai, Madurai, Tamil Nadu." },
      { property: "og:title", content: "Project Gallery - Real Tamilnadu Painters" },
      { property: "og:description", content: "Premium painting projects across Tamil Nadu." },
    ],
  }),
  component: GalleryPage,
});

const projects = [
  { img: gallery1, title: "Modern Apartment Interior", loc: "Coimbatore", cat: "Interior Painting" },
  { img: gallery2, title: "Premium Villa Exterior", loc: "Chennai", cat: "Exterior Painting" },
  { img: gallery3, title: "Luxury Texture Finish", loc: "Madurai", cat: "Texture Painting" },
  { img: gallery4, title: "Corporate Office Painting", loc: "Coimbatore", cat: "Commercial Painting" },
  { img: gallery5, title: "Waterproof Villa Coating", loc: "Tiruppur", cat: "Waterproof Painting" },
  { img: gallery6, title: "Premium Wood Polishing", loc: "Salem", cat: "Wood Polish" },
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}