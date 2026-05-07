import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  to?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground" itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            {item.to ? (
              <Link to={item.to as "/"} className="hover:text-brand transition-colors" itemProp="item">
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span className="text-foreground font-medium" itemProp="name">{item.label}</span>
            )}
            <meta itemProp="position" content={String(i + 1)} />
            {i < items.length - 1 && <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}