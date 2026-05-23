import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Real Tamilnadu Painters | Painting Contractor in Coimbatore, Tamil Nadu" },
      { name: "description", content: "Real Tamilnadu Painters - top-rated painting contractor in Coimbatore. House painters, interior & exterior painting, waterproofing and commercial painting across Tamil Nadu. Call +91 86800 46800." },
      { name: "author", content: "Real Tamilnadu Painters" },
      { name: "keywords", content: "painting contractor in Coimbatore, house painters in Coimbatore, interior painting services Coimbatore, exterior painting services Tamil Nadu, waterproofing services Coimbatore, commercial painting contractor Coimbatore, best painters Tamil Nadu, texture painting Coimbatore" },
      { property: "og:title", content: "Real Tamilnadu Painters | Painting Contractor in Coimbatore" },
      { property: "og:description", content: "Top-rated painting contractor in Coimbatore. House, interior, exterior, waterproofing & commercial painting across Tamil Nadu." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "Real Tamilnadu Painters" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Real Tamilnadu Painters | Painting Contractor in Coimbatore" },
      { name: "twitter:description", content: "Top-rated painting contractor in Coimbatore. House, interior, exterior, waterproofing & commercial painting across Tamil Nadu." },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "IN-TN" },
      { name: "geo.placename", content: "Coimbatore" },
      { name: "geo.position", content: "11.02;76.94" },
      { name: "ICBM", content: "11.02, 76.94" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/c3d26774-c3cf-4c0d-8d69-08d4eb5fe8f5" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/c3d26774-c3cf-4c0d-8d69-08d4eb5fe8f5" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "PaintingContractor"],
          "@id": "https://realtamilnadupainters.com",
          url: "https://realtamilnadupainters.com",
          name: "Real Tamilnadu Painters",
          image: "https://realtamilnadupainters.com/logo.png",
          description: "Top-rated painting contractor in Coimbatore offering house painting, interior, exterior, texture, waterproofing and commercial painting services across Tamil Nadu.",
          telephone: "+918680046800",
          email: "realtamilnadupainters2022@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "10 Sindhu Nagar, Anjugam Nagar, Chinnavedampatti",
            addressLocality: "Coimbatore",
            addressRegion: "Tamil Nadu",
            postalCode: "641049",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "11.02",
            longitude: "76.94",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "41",
          },
          priceRange: "₹₹",
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
            opens: "08:00",
            closes: "20:00",
          },
          areaServed: [
            { "@type": "City", name: "Coimbatore" },
            { "@type": "City", name: "Chennai" },
            { "@type": "City", name: "Madurai" },
            { "@type": "City", name: "Trichy" },
            { "@type": "City", name: "Salem" },
            { "@type": "City", name: "Erode" },
            { "@type": "City", name: "Tiruppur" },
            { "@type": "State", name: "Tamil Nadu" },
            { "@type": "State", name: "Kerala" },
            { "@type": "State", name: "Karnataka" },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Painting Services",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Painting Services in Coimbatore" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exterior Painting Services in Coimbatore" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "House Painting in Coimbatore" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Waterproofing Services in Coimbatore" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Painting Contractor Coimbatore" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Texture Painting Coimbatore" } },
            ],
          },
          sameAs: [],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </QueryClientProvider>
  );
}
