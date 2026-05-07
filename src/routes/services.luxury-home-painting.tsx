import { createFileRoute } from "@tanstack/react-router";
import ServiceHubPage from "@/components/ServiceHubPage";

export const Route = createFileRoute("/services/luxury-home-painting")({
  head: () => ({
    meta: [
      { title: "Luxury Home Painting Services in Tamil Nadu | Premium Finishing | Real Tamilnadu Painters" },
      { name: "description", content: "Premium luxury home painting services in Coimbatore, Chennai, Madurai. Italian stucco, metallic finishes, designer walls. Ultra-premium paints & expert craftsmen. Call +91 86800 46800." },
      { property: "og:title", content: "Luxury Home Painting - Real Tamilnadu Painters" },
      { property: "og:description", content: "Ultra-premium luxury home painting with designer finishes across Tamil Nadu." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "What is luxury home painting?", acceptedAnswer: { "@type": "Answer", text: "Luxury home painting uses ultra-premium paints, designer textures like Italian stucco and metallic finishes, and expert craftsmen to create stunning, high-end interiors that look like luxury hotels." } },
            { "@type": "Question", name: "How much does luxury painting cost?", acceptedAnswer: { "@type": "Answer", text: "Luxury painting services start from ₹35-₹100+ per sq ft depending on the type of finish, materials used, and complexity. Contact us for a personalized consultation." } },
            { "@type": "Question", name: "Which premium paint brands do you use?", acceptedAnswer: { "@type": "Answer", text: "We use ultra-premium lines like Asian Paints Royale, Berger Silk, Dulux Velvet Touch, and imported Italian products for luxury finishes." } },
          ],
        }),
      },
    ],
  }),
  component: LuxuryHomePaintingPage,
});

function LuxuryHomePaintingPage() {
  return (
    <ServiceHubPage
      title="Luxury Home Painting"
      breadcrumbLabel="Luxury Home Painting"
      heroTitle="Ultra-Premium Luxury Home Painting in Tamil Nadu"
      heroSubtitle="Transform your home into a masterpiece with designer wall finishes, Italian textures, and ultra-premium luxury painting by expert craftsmen."
      introTitle="Elevate Your Home with Luxury Painting Finishes"
      introText={[
        "For homeowners who demand the extraordinary, Real Tamilnadu Painters offers ultra-premium luxury painting services that transform ordinary spaces into stunning works of art. Our luxury painting division specializes in designer finishes that you'd typically see in five-star hotels and premium residences.",
        "From Italian stucco and Venetian plaster to metallic wall finishes, ombré effects, and custom murals, our master craftsmen bring world-class luxury finishing to homes across Tamil Nadu. We use only the finest paints — Asian Paints Royale Luxury, Berger Silk Glamor, Dulux Velvet Touch, and imported European products.",
        "Every luxury painting project starts with a personalized design consultation where we understand your vision, recommend color palettes, and create sample panels before the full application. This ensures your home looks exactly the way you dreamed — sophisticated, elegant, and uniquely yours.",
      ]}
      benefits={[
        "Ultra-premium paints: Royale, Silk, Velvet Touch",
        "Italian stucco and Venetian plaster experts",
        "Metallic, ombré, and designer wall finishes",
        "Personalized color consultation with samples",
        "Master craftsmen with luxury finishing experience",
        "Imported European textures and materials",
        "Complete home styling and accent wall design",
        "White-glove service with full property protection",
      ]}
      subServices={[
        { title: "Italian Stucco Finish", desc: "Authentic Italian stucco and Venetian plaster application for a luxurious marble-like wall texture." },
        { title: "Metallic Wall Finish", desc: "Stunning gold, silver, copper, and bronze metallic wall finishes for a glamorous, high-end look." },
        { title: "Designer Accent Walls", desc: "Custom accent wall designs using premium textures, patterns, and color combinations as focal points." },
        { title: "Premium Villa Painting", desc: "Complete luxury painting packages for villas and bungalows with coordinated interior and exterior finishing." },
        { title: "Ombré & Gradient Walls", desc: "Beautiful gradient and ombré wall effects blending multiple shades for a modern, artistic look." },
        { title: "Custom Mural Painting", desc: "Bespoke wall murals and artistic painting for feature walls, children's rooms, and statement spaces." },
      ]}
      cities={[
        { name: "Luxury Painting in Coimbatore", text: "Premium luxury home painting in Coimbatore's upscale neighbourhoods with designer finishes and imported materials." },
        { name: "Luxury Painting in Chennai", text: "Ultra-premium home painting services in Chennai for luxury apartments, penthouses, and villas." },
        { name: "Luxury Painting in Madurai", text: "High-end luxury painting contractors in Madurai delivering five-star quality finishes for premium homes." },
        { name: "Luxury Painting in Ooty", text: "Exclusive luxury painting services for premium vacation homes, resorts, and hill-station properties in Ooty." },
        { name: "Luxury Painting in Kerala", text: "Premium luxury home painting extending to Kerala's finest residences and holiday villas." },
        { name: "Luxury Painting in Bangalore", text: "Ultra-premium painting services for Bangalore's luxury homes with Italian and European finishes." },
      ]}
      faqs={[
        { q: "What is luxury home painting?", a: "Luxury home painting uses ultra-premium paints, designer textures like Italian stucco and metallic finishes, and expert craftsmen to create stunning, high-end interiors that look like luxury hotels." },
        { q: "How much does luxury painting cost?", a: "Luxury painting services start from ₹35-₹100+ per sq ft depending on the type of finish, materials used, and complexity. Contact us for a personalized consultation." },
        { q: "Which premium paint brands do you use?", a: "We use ultra-premium lines like Asian Paints Royale, Berger Silk, Dulux Velvet Touch, and imported Italian products for luxury finishes." },
        { q: "Can you create custom wall designs?", a: "Yes, we create fully custom wall designs including murals, geometric patterns, ombré effects, and bespoke textures tailored to your taste." },
        { q: "Do you offer color consultation for luxury projects?", a: "Yes, every luxury project includes a complimentary design consultation with sample panels so you can see and approve the finish before full application." },
      ]}
      relatedLinks={[
        { to: "/services/house-painting", label: "House Painting Services" },
        { to: "/services/exterior-painting", label: "Exterior Painting" },
        { to: "/services/waterproof-painting", label: "Waterproof Painting" },
        { to: "/services/commercial-painting", label: "Commercial Painting" },
      ]}
    />
  );
}