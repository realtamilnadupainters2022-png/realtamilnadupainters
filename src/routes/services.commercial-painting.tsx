import { createFileRoute } from "@tanstack/react-router";
import ServiceHubPage from "@/components/ServiceHubPage";

export const Route = createFileRoute("/services/commercial-painting")({
  head: () => ({
    meta: [
      { title: "Commercial Painting Contractors in Tamil Nadu | Real Tamilnadu Painters" },
      { name: "description", content: "Professional commercial painting for offices, shops, showrooms, factories & warehouses in Tamil Nadu. Minimal disruption, premium finish. Call +91 86800 46800." },
      { property: "og:title", content: "Commercial Painting Services - Real Tamilnadu Painters" },
      { property: "og:description", content: "Professional commercial and industrial painting services across Tamil Nadu." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Do you paint offices and commercial spaces?", acceptedAnswer: { "@type": "Answer", text: "Yes, Real Tamilnadu Painters specializes in commercial painting for offices, showrooms, retail stores, restaurants, hospitals, and industrial facilities across Tamil Nadu." } },
            { "@type": "Question", name: "Can you work after business hours?", acceptedAnswer: { "@type": "Answer", text: "Yes, we offer flexible scheduling including weekends and after-hours work to minimize disruption to your business operations." } },
            { "@type": "Question", name: "How much does commercial painting cost?", acceptedAnswer: { "@type": "Answer", text: "Commercial painting costs vary based on area, surface condition, and finish requirements. We offer competitive bulk pricing. Contact us for a free site survey and estimate." } },
          ],
        }),
      },
    ],
  }),
  component: CommercialPaintingPage,
});

function CommercialPaintingPage() {
  return (
    <ServiceHubPage
      title="Commercial Painting"
      breadcrumbLabel="Commercial Painting"
      heroTitle="Professional Commercial Painting Contractors in Tamil Nadu"
      heroSubtitle="Expert painting services for offices, retail spaces, factories, and commercial properties with minimal business disruption."
      introTitle="Trusted Commercial Painting Partner in Tamil Nadu"
      introText={[
        "Real Tamilnadu Painters provides professional commercial painting services tailored to businesses across Tamil Nadu. We understand that commercial spaces demand a different approach — minimal disruption, flexible scheduling, and finishes that reflect your brand identity.",
        "From corporate offices and retail showrooms to hospitals, hotels, factories, and warehouses, our experienced team delivers premium painting results on schedule and within budget. We handle large-scale projects with efficiency and precision.",
        "Our commercial painting services include interior and exterior painting, epoxy flooring, anti-corrosion coatings, fire-retardant paints, and brand-specific color matching. We serve businesses across Coimbatore, Chennai, Madurai, and all of Tamil Nadu.",
      ]}
      benefits={[
        "Flexible scheduling — weekends & after-hours available",
        "Minimal disruption to business operations",
        "Competitive bulk pricing for large projects",
        "Brand-specific color matching and consultation",
        "Safety compliance and insurance coverage",
        "Quick turnaround on commercial projects",
        "Epoxy, anti-corrosion & specialty coatings",
        "Dedicated project manager for every job",
      ]}
      subServices={[
        { title: "Office Painting", desc: "Professional office interior painting that creates productive, modern work environments with premium finishes." },
        { title: "Retail & Showroom Painting", desc: "Eye-catching retail painting that enhances your brand and attracts customers." },
        { title: "Industrial Painting", desc: "Heavy-duty industrial painting including anti-corrosion, heat-resistant, and chemical-resistant coatings." },
        { title: "Hospital & Healthcare Painting", desc: "Antimicrobial and hygienic painting solutions for hospitals, clinics, and healthcare facilities." },
        { title: "Hotel & Restaurant Painting", desc: "Luxury painting finishes for hospitality spaces that create memorable guest experiences." },
        { title: "Warehouse Painting", desc: "Durable floor and wall coatings for warehouses, factories, and storage facilities." },
      ]}
      cities={[
        { name: "Commercial Painting in Coimbatore", text: "Leading commercial painters in Coimbatore serving IT parks, textile showrooms, and manufacturing units." },
        { name: "Commercial Painting in Chennai", text: "Professional commercial painting services in Chennai for corporate offices, malls, and hospitality spaces." },
        { name: "Commercial Painting in Madurai", text: "Trusted commercial painting contractors in Madurai for retail, healthcare, and industrial facilities." },
        { name: "Commercial Painting in Tiruppur", text: "Expert commercial painting for Tiruppur's textile industry, showrooms, and factory spaces." },
        { name: "Commercial Painting in Salem", text: "Quality commercial painting services in Salem for offices, hospitals, and educational institutions." },
        { name: "Commercial Painting in Erode", text: "Reliable commercial painting contractors in Erode for all types of business properties." },
      ]}
      faqs={[
        { q: "Do you paint offices and commercial spaces?", a: "Yes, Real Tamilnadu Painters specializes in commercial painting for offices, showrooms, retail stores, restaurants, hospitals, and industrial facilities across Tamil Nadu." },
        { q: "Can you work after business hours?", a: "Yes, we offer flexible scheduling including weekends and after-hours work to minimize disruption to your business operations." },
        { q: "How much does commercial painting cost?", a: "Commercial painting costs vary based on area, surface condition, and finish requirements. We offer competitive bulk pricing. Contact us for a free site survey and estimate." },
        { q: "Do you handle large-scale painting projects?", a: "Yes, we have the team, equipment, and experience to handle large commercial and industrial painting projects efficiently." },
        { q: "What types of commercial coatings do you offer?", a: "We offer standard emulsion, epoxy floor coating, anti-corrosion paint, heat-resistant coatings, fire-retardant paint, and antimicrobial finishes." },
      ]}
      relatedLinks={[
        { to: "/services/house-painting", label: "House Painting Services" },
        { to: "/services/exterior-painting", label: "Exterior Painting" },
        { to: "/services/waterproof-painting", label: "Waterproof Painting" },
        { to: "/services/luxury-home-painting", label: "Luxury Home Painting" },
      ]}
    />
  );
}