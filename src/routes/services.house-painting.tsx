import { createFileRoute } from "@tanstack/react-router";
import ServiceHubPage from "@/components/ServiceHubPage";

export const Route = createFileRoute("/services/house-painting")({
  head: () => ({
    meta: [
      { title: "Best House Painting Contractors in Tamil Nadu | Real Tamilnadu Painters" },
      { name: "description", content: "Professional house painting services in Coimbatore, Chennai, Madurai & across Tamil Nadu. Interior & exterior home painting with premium finishes. ⭐ 5.0 Rating. Call +91 86800 46800." },
      { property: "og:title", content: "House Painting Services - Real Tamilnadu Painters" },
      { property: "og:description", content: "Premium house painting services across Tamil Nadu with luxury finishing." },
      { property: "og:url", content: "https://realtamilnadupainters.com/services/house-painting" },
    ],
    links: [
      { rel: "canonical", href: "https://realtamilnadupainters.com/services/house-painting" },
        ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "How much does house painting cost in Tamil Nadu?", acceptedAnswer: { "@type": "Answer", text: "House painting costs in Tamil Nadu vary from ₹12-₹35 per sq ft depending on paint quality, surface condition, and project scope. Contact Real Tamilnadu Painters for a free detailed estimate." } },
            { "@type": "Question", name: "Which is the best house painting company in Coimbatore?", acceptedAnswer: { "@type": "Answer", text: "Real Tamilnadu Painters is rated 5.0 on Google with 41+ reviews, making them one of the best house painting companies in Coimbatore and Tamil Nadu." } },
            { "@type": "Question", name: "How long does house painting take?", acceptedAnswer: { "@type": "Answer", text: "A typical 2-3 BHK house takes 5-10 days depending on the scope. We provide detailed timelines before starting every project." } },
            { "@type": "Question", name: "Do you provide free estimates for house painting?", acceptedAnswer: { "@type": "Answer", text: "Yes, Real Tamilnadu Painters provides free on-site estimates with no obligation. Call or WhatsApp +91 86800 46800." } },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "House Painting Services",
          provider: { "@type": "LocalBusiness", name: "Real Tamilnadu Painters" },
          areaServed: ["Coimbatore", "Chennai", "Madurai", "Trichy", "Salem", "Tamil Nadu"],
          description: "Professional house painting services including interior, exterior, texture and premium finishes for homes across Tamil Nadu.",
        }),
      },
    ],
  }),
  component: HousePaintingPage,
});

function HousePaintingPage() {
  return (
    <ServiceHubPage
      title="House Painting"
      breadcrumbLabel="House Painting"
      heroTitle="Professional House Painting Services in Tamil Nadu"
      heroSubtitle="Transform your home with premium painting services by Tamil Nadu's most trusted painting contractors. Expert interior & exterior house painting with luxury finishing."
      introTitle="Why Choose Real Tamilnadu Painters for House Painting?"
      introText={[
        "Your home deserves the best. Real Tamilnadu Painters delivers premium house painting services across Tamil Nadu with meticulous attention to detail, high-quality materials from brands like Asian Paints, Berger, and Dulux, and expert craftsmanship that transforms your living spaces.",
        "Whether you need a complete home makeover or a single room refresh, our experienced team handles every aspect of house painting — from surface preparation and putty work to primer application and final luxury finishing. We serve homeowners across Coimbatore, Chennai, Madurai, and all major cities in Tamil Nadu.",
        "With a perfect 5.0 Google rating and 41+ satisfied clients, Real Tamilnadu Painters is the preferred choice for house painting in Tamil Nadu. We offer free on-site estimates, transparent pricing, and guaranteed satisfaction on every project.",
      ]}
      benefits={[
        "Premium paints from Asian Paints, Berger & Dulux",
        "Free on-site color consultation and estimate",
        "Experienced and trained house painters",
        "Clean, neat, and timely project completion",
        "Transparent pricing with no hidden charges",
        "5.0 Google rating with 41+ reviews",
        "Full furniture and floor protection",
        "Post-painting cleanup included",
      ]}
      subServices={[
        { title: "Interior House Painting", desc: "Complete interior painting for bedrooms, living rooms, kitchens, and bathrooms with premium wall finishes." },
        { title: "Exterior House Painting", desc: "Weather-resistant exterior coatings that protect and beautify your home's façade for years." },
        { title: "House Repainting", desc: "Professional repainting services to refresh your home with updated colors and modern finishes." },
        { title: "New Construction Painting", desc: "Complete painting solutions for newly constructed homes including primer, putty, and finish coats." },
        { title: "Room Painting", desc: "Individual room painting with designer color schemes and accent walls for a fresh look." },
        { title: "Ceiling Painting", desc: "Expert ceiling painting and repairs for a clean, bright overhead finish throughout your home." },
      ]}
      cities={[
        { name: "House Painting in Coimbatore", text: "Top-rated house painters in Coimbatore offering premium interior and exterior painting for apartments, villas, and independent houses." },
        { name: "House Painting in Chennai", text: "Professional house painting services in Chennai with luxury finishes for residential properties across the city." },
        { name: "House Painting in Madurai", text: "Trusted house painting contractors in Madurai delivering quality workmanship for homes of all sizes." },
        { name: "House Painting in Trichy", text: "Expert house painters in Trichy providing affordable premium painting services for homeowners." },
        { name: "House Painting in Salem", text: "Reliable house painting services in Salem with on-time delivery and premium finishing." },
        { name: "House Painting in Erode", text: "Quality house painting contractors in Erode known for neat work and honest pricing." },
      ]}
      faqs={[
        { q: "How much does house painting cost in Tamil Nadu?", a: "House painting costs in Tamil Nadu vary from ₹12-₹35 per sq ft depending on paint quality, surface condition, and project scope. Contact Real Tamilnadu Painters for a free detailed estimate." },
        { q: "Which is the best house painting company in Coimbatore?", a: "Real Tamilnadu Painters is rated 5.0 on Google with 41+ reviews, making them one of the best house painting companies in Coimbatore and Tamil Nadu." },
        { q: "How long does house painting take?", a: "A typical 2-3 BHK house takes 5-10 days depending on the scope. We provide detailed timelines before starting every project." },
        { q: "Do you provide free estimates for house painting?", a: "Yes, Real Tamilnadu Painters provides free on-site estimates with no obligation. Call or WhatsApp +91 86800 46800." },
        { q: "What brands of paint do you use?", a: "We use premium paints from Asian Paints, Berger, Dulux, Nerolac, and other top brands based on your preference and budget." },
      ]}
      relatedLinks={[
        { to: "/services/exterior-painting", label: "Exterior Painting Services" },
        { to: "/services/waterproof-painting", label: "Waterproof Painting" },
        { to: "/services/luxury-home-painting", label: "Luxury Home Painting" },
        { to: "/services/commercial-painting", label: "Commercial Painting" },
      ]}
    />
  );
}