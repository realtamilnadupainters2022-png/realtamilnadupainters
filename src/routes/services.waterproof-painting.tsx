import { createFileRoute } from "@tanstack/react-router";
import ServiceHubPage from "@/components/ServiceHubPage";

export const Route = createFileRoute("/services/waterproof-painting")({
  head: () => ({
    meta: [
      { title: "Waterproof Painting Contractors in Tamil Nadu | Real Tamilnadu Painters" },
      { name: "description", content: "Expert waterproof painting & coating services in Coimbatore, Chennai, Madurai. Stop leaks, dampness & seepage. Premium waterproofing solutions. Call +91 86800 46800." },
      { property: "og:title", content: "Waterproof Painting Services - Real Tamilnadu Painters" },
      { property: "og:description", content: "Professional waterproofing and damp-proofing painting services across Tamil Nadu." },
      { property: "og:url", content: "https://realtamilnadupainters.com/services/waterproof-painting" },
    ],
    links: [
      { rel: "canonical", href: "https://realtamilnadupainters.com/services/waterproof-painting" },
        ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "What is waterproof painting?", acceptedAnswer: { "@type": "Answer", text: "Waterproof painting uses specialized coatings that create a moisture barrier on walls, roofs, and surfaces, preventing water seepage, dampness, and leakage damage." } },
            { "@type": "Question", name: "How much does waterproof painting cost?", acceptedAnswer: { "@type": "Answer", text: "Waterproof painting costs ₹20-₹50 per sq ft depending on the waterproofing system used and severity of the dampness issue. Contact us for a free assessment." } },
            { "@type": "Question", name: "How long does waterproof coating last?", acceptedAnswer: { "@type": "Answer", text: "Premium waterproof coatings last 5-10 years depending on the product and application quality. We use Dr. Fixit, Pidilite, and other industry-leading brands." } },
          ],
        }),
      },
    ],
  }),
  component: WaterproofPaintingPage,
});

function WaterproofPaintingPage() {
  return (
    <ServiceHubPage
      title="Waterproof Painting"
      breadcrumbLabel="Waterproof Painting"
      heroTitle="Expert Waterproof Painting Services in Tamil Nadu"
      heroSubtitle="Protect your property from dampness, leaks, and moisture damage with premium waterproofing solutions by Real Tamilnadu Painters."
      introTitle="Stop Leaks & Dampness with Professional Waterproofing"
      introText={[
        "Tamil Nadu's monsoon climate makes waterproof painting essential for every property. Real Tamilnadu Painters provides comprehensive waterproofing solutions that protect your walls, roofs, and foundations from water damage, seepage, and dampness.",
        "We use industry-leading waterproofing products from Dr. Fixit, Pidilite, Asian Paints SmartCare, and other premium brands. Our waterproofing process includes thorough surface assessment, crack repair, primer application, and multi-layer waterproof coating for maximum protection.",
        "Whether it's a leaking terrace, damp walls, bathroom waterproofing, or basement seepage, our expert team diagnoses the root cause and delivers lasting waterproof painting solutions across Coimbatore, Chennai, Madurai, and all of Tamil Nadu.",
      ]}
      benefits={[
        "Dr. Fixit & Pidilite waterproofing products",
        "Root cause analysis of dampness issues",
        "Interior and exterior waterproofing",
        "Terrace and roof waterproof coating",
        "Bathroom and kitchen waterproofing",
        "5-10 year waterproofing warranty",
        "Anti-fungal and anti-mould treatment",
        "Free dampness assessment and estimate",
      ]}
      subServices={[
        { title: "Wall Waterproofing", desc: "Interior and exterior wall waterproofing to stop seepage, dampness, and paint peeling caused by moisture." },
        { title: "Terrace Waterproofing", desc: "Premium terrace and roof waterproof coating to prevent leaks during heavy monsoon rains." },
        { title: "Bathroom Waterproofing", desc: "Specialized bathroom and wet area waterproofing with membrane coating and tile grouting." },
        { title: "Basement Waterproofing", desc: "Heavy-duty basement waterproofing solutions to prevent underground water seepage." },
        { title: "Anti-Dampness Treatment", desc: "Chemical damp-proofing treatment for walls affected by rising dampness and moisture." },
        { title: "Elastomeric Waterproof Coating", desc: "Flexible waterproof coatings that expand and contract with temperature changes for crack-free protection." },
      ]}
      cities={[
        { name: "Waterproofing in Coimbatore", text: "Expert waterproof painting contractors in Coimbatore providing lasting solutions for leaks and dampness in homes and buildings." },
        { name: "Waterproofing in Chennai", text: "Professional waterproofing services in Chennai's coastal climate with moisture-resistant coatings and treatments." },
        { name: "Waterproofing in Madurai", text: "Trusted waterproof painting contractors in Madurai offering affordable solutions for all property types." },
        { name: "Waterproofing in Trichy", text: "Quality waterproofing services in Trichy with premium materials and expert application techniques." },
        { name: "Waterproofing in Kerala", text: "Specialized waterproofing solutions for Kerala's high-rainfall regions with advanced moisture barrier systems." },
        { name: "Waterproofing in Tiruppur", text: "Reliable waterproof painting services in Tiruppur for residential and industrial properties." },
      ]}
      faqs={[
        { q: "What is waterproof painting?", a: "Waterproof painting uses specialized coatings that create a moisture barrier on walls, roofs, and surfaces, preventing water seepage, dampness, and leakage damage." },
        { q: "How much does waterproof painting cost?", a: "Waterproof painting costs ₹20-₹50 per sq ft depending on the waterproofing system used and severity of the dampness issue. Contact us for a free assessment." },
        { q: "How long does waterproof coating last?", a: "Premium waterproof coatings last 5-10 years depending on the product and application quality. We use Dr. Fixit, Pidilite, and other industry-leading brands." },
        { q: "Can you fix existing dampness problems?", a: "Yes, we diagnose the root cause of dampness and provide targeted solutions including crack injection, chemical treatment, and waterproof coating application." },
        { q: "Is waterproof painting necessary for new buildings?", a: "Yes, preventive waterproofing is highly recommended for new buildings to protect against future moisture damage, especially for terraces, bathrooms, and external walls." },
      ]}
      relatedLinks={[
        { to: "/services/house-painting", label: "House Painting Services" },
        { to: "/services/exterior-painting", label: "Exterior Painting" },
        { to: "/services/commercial-painting", label: "Commercial Painting" },
        { to: "/services/luxury-home-painting", label: "Luxury Home Painting" },
      ]}
    />
  );
}