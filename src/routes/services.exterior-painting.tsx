import { createFileRoute } from "@tanstack/react-router";
import ServiceHubPage from "@/components/ServiceHubPage";

export const Route = createFileRoute("/services/exterior-painting")({
  head: () => ({
    meta: [
      { title: "Best Exterior Painting Contractors in Tamil Nadu | Real Tamilnadu Painters" },
      { name: "description", content: "Professional exterior painting services in Coimbatore, Chennai, Madurai. Weather-resistant coatings, UV protection & premium finishing. ⭐ 5.0 Rating. Call +91 86800 46800." },
      { property: "og:title", content: "Exterior Painting Services - Real Tamilnadu Painters" },
      { property: "og:description", content: "Weather-resistant exterior painting services across Tamil Nadu." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "How much does exterior painting cost in Tamil Nadu?", acceptedAnswer: { "@type": "Answer", text: "Exterior painting costs ₹15-₹40 per sq ft depending on building height, surface condition, and paint quality. Contact us for a free estimate." } },
            { "@type": "Question", name: "How long does exterior paint last in Tamil Nadu climate?", acceptedAnswer: { "@type": "Answer", text: "With premium weather-resistant paints, exterior painting lasts 5-8 years in Tamil Nadu's tropical climate. We use UV and moisture-resistant coatings." } },
            { "@type": "Question", name: "Do you provide scaffolding for exterior painting?", acceptedAnswer: { "@type": "Answer", text: "Yes, we provide complete scaffolding setup for all exterior painting projects at no additional cost as part of our service package." } },
          ],
        }),
      },
    ],
  }),
  component: ExteriorPaintingPage,
});

function ExteriorPaintingPage() {
  return (
    <ServiceHubPage
      title="Exterior Painting"
      breadcrumbLabel="Exterior Painting"
      heroTitle="Professional Exterior Painting Services in Tamil Nadu"
      heroSubtitle="Protect and beautify your building's exterior with premium weather-resistant painting by Tamil Nadu's most trusted contractors."
      introTitle="Expert Exterior Painting Across Tamil Nadu"
      introText={[
        "Your building's exterior is its first impression. Real Tamilnadu Painters specializes in premium exterior painting services that protect your property from Tamil Nadu's harsh weather while delivering stunning curb appeal.",
        "We use advanced weather-resistant, UV-protective, and anti-fungal exterior coatings from top brands. Our team handles complete surface preparation including power washing, crack repair, primer application, and multi-coat finishing for lasting results.",
        "From residential homes and villas to apartment complexes and commercial buildings, our exterior painting services cover properties of all sizes across Coimbatore, Chennai, Madurai, and all major cities in Tamil Nadu.",
      ]}
      benefits={[
        "Weather-resistant and UV-protective coatings",
        "Anti-fungal and anti-algae paint formulations",
        "Complete scaffolding and safety equipment",
        "Power washing and surface preparation included",
        "Crack filling and waterproofing treatments",
        "5-8 year durability guarantee",
        "Free color consultation and 3D visualization",
        "Minimal disruption to daily routines",
      ]}
      subServices={[
        { title: "Residential Exterior Painting", desc: "Premium exterior painting for independent houses, villas, and bungalows with weather-resistant finishes." },
        { title: "Apartment Complex Painting", desc: "Large-scale exterior painting for apartment buildings and housing societies with professional scaffolding." },
        { title: "Boundary Wall Painting", desc: "Durable exterior paint for compound walls, boundary walls, and garden walls." },
        { title: "Roof Painting", desc: "Heat-reflective and waterproof roof painting to protect and cool your building." },
        { title: "Gate & Grille Painting", desc: "Anti-rust metal painting for gates, grilles, railings, and outdoor metal fixtures." },
        { title: "Exterior Texture Coating", desc: "Premium textured exterior finishes for a distinctive architectural look." },
      ]}
      cities={[
        { name: "Exterior Painting in Coimbatore", text: "Expert exterior painters in Coimbatore providing weather-resistant coatings for homes, apartments, and commercial buildings." },
        { name: "Exterior Painting in Chennai", text: "Professional exterior painting services in Chennai with UV-protection for coastal climate conditions." },
        { name: "Exterior Painting in Madurai", text: "Trusted exterior painting contractors in Madurai delivering durable finishes for all property types." },
        { name: "Exterior Painting in Tiruppur", text: "Affordable exterior painting services in Tiruppur with premium quality materials and workmanship." },
        { name: "Exterior Painting in Kerala", text: "Premium exterior painting for properties in Kerala with moisture-resistant and anti-fungal coatings." },
        { name: "Exterior Painting in Bangalore", text: "Professional exterior painting services extending to Bangalore with expert teams and premium finishes." },
      ]}
      faqs={[
        { q: "How much does exterior painting cost in Tamil Nadu?", a: "Exterior painting costs ₹15-₹40 per sq ft depending on building height, surface condition, and paint quality. Contact us for a free estimate." },
        { q: "How long does exterior paint last in Tamil Nadu climate?", a: "With premium weather-resistant paints, exterior painting lasts 5-8 years in Tamil Nadu's tropical climate. We use UV and moisture-resistant coatings." },
        { q: "Do you provide scaffolding for exterior painting?", a: "Yes, we provide complete scaffolding setup for all exterior painting projects at no additional cost as part of our service package." },
        { q: "What preparation is done before exterior painting?", a: "We do power washing, scraping loose paint, crack filling, waterproofing treatment, primer application, and putty work before the final paint coats." },
        { q: "Can you paint high-rise buildings?", a: "Yes, we have experience painting multi-story buildings with proper scaffolding and safety equipment for our workers." },
      ]}
      relatedLinks={[
        { to: "/services/house-painting", label: "House Painting Services" },
        { to: "/services/waterproof-painting", label: "Waterproof Painting" },
        { to: "/services/commercial-painting", label: "Commercial Painting" },
        { to: "/services/luxury-home-painting", label: "Luxury Home Painting" },
      ]}
    />
  );
}