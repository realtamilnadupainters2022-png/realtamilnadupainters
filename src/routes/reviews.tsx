import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Client Reviews | Painting Contractor in Coimbatore - Real Tamilnadu Painters" },
      { name: "description", content: "Read 41+ genuine Google reviews of Real Tamilnadu Painters, a 5.0-rated painting contractor in Coimbatore serving clients across Chennai, Madurai and Tamil Nadu." },
      { property: "og:title", content: "Client Reviews | Real Tamilnadu Painters Coimbatore" },
      { property: "og:description", content: "5.0 Google Rating with 41+ genuine reviews from house painting clients in Coimbatore and Tamil Nadu." },
      { property: "og:url", content: "https://realtamilnadupainters.com/reviews" },
    ],
    links: [
      { rel: "canonical", href: "https://realtamilnadupainters.com/reviews" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Real Tamilnadu Painters",
          url: "https://realtamilnadupainters.com",
          telephone: "+918680046800",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Coimbatore",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "41",
            bestRating: "5",
            worstRating: "1",
          },
          review: [
            { "@type": "Review", author: { "@type": "Person", name: "Suresh K." }, reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }, reviewBody: "Excellent work by Real Tamilnadu Painters! Painted our 3BHK apartment with premium finish. Highly recommended painters in Coimbatore." },
            { "@type": "Review", author: { "@type": "Person", name: "Priya M." }, reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }, reviewBody: "Hired them for villa exterior painting. Professional, on time, and quality exceeded expectations. Best painting contractors in Tamil Nadu." },
            { "@type": "Review", author: { "@type": "Person", name: "Revathi G." }, reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }, reviewBody: "Our Coimbatore apartment looks brand new. Helpful color consultation, on-time completion, zero hassle." },
          ],
        }),
      },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  { name: "Suresh K.", loc: "Coimbatore", text: "Excellent work by Real Tamilnadu Painters! They painted our entire 3BHK apartment with premium Asian Paints. The finishing was absolutely flawless. Highly recommended for anyone looking for quality painters in Coimbatore.", rating: 5 },
  { name: "Priya M.", loc: "Chennai", text: "We hired them for our villa exterior painting. The team was professional, on time, and the quality of work exceeded our expectations. Best painting contractors in Tamil Nadu!", rating: 5 },
  { name: "Karthik R.", loc: "Madurai", text: "Amazing texture painting work! The Italian stucco finish on our living room wall looks absolutely stunning. Rajesh and his team are true professionals.", rating: 5 },
  { name: "Lakshmi S.", loc: "Trichy", text: "Very happy with the waterproof painting work. No more dampness issues in our old house. The team was polite, clean and finished on time. Great pricing too!", rating: 5 },
  { name: "Arun V.", loc: "Erode", text: "Professional commercial painting for our showroom. The spray painting finish was smooth and perfect. Would definitely hire them again for our office renovation.", rating: 5 },
  { name: "Deepa N.", loc: "Salem", text: "Best painters we have ever hired! The wood polishing on our furniture and doors looks brand new. Very neat and clean work. Trustworthy team.", rating: 5 },
  { name: "Murugan P.", loc: "Tiruppur", text: "Rajesh personally supervised our entire home painting project. Premium materials, honest pricing, and beautiful results. 5 stars!", rating: 5 },
  { name: "Revathi G.", loc: "Coimbatore", text: "Our apartment looks like a completely new place after the painting. The color consultation was very helpful. On-time completion with zero hassle.", rating: 5 },
];

function ReviewsPage() {
  return (
    <>
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Testimonials"
            title="What Our Clients Say"
            subtitle="Read genuine reviews from our happy clients across Tamil Nadu. 5.0 Google Rating with 41+ reviews."
          />
          <div className="flex justify-center items-center gap-2 mt-4">
            <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-gold text-gold" />)}</div>
            <span className="text-lg font-bold text-foreground">5.0</span>
            <span className="text-muted-foreground">· 41+ Google Reviews</span>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="glass-card rounded-2xl p-8 hover-lift">
                <div className="flex gap-1 mb-4">{[...Array(r.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-gold text-gold" />)}</div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-brand flex items-center justify-center text-[oklch(1_0_0)] font-bold text-sm">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.loc}, Tamil Nadu</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}