import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
      <ol className="flex flex-wrap gap-1">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.label + idx} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="flex items-center">
              {item.href && !isLast ? (
                <Link href={item.href} itemProp="item" style={{ color: "var(--color-black-light)" }} className="hover:underline">
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span itemProp="name" style={{ color: "var(--color-black-light)", fontWeight: isLast ? 500 : undefined }}>{item.label}</span>
              )}
              <meta itemProp="position" content={(idx + 1).toString()} />
              {idx < items.length - 1 && <span className="mx-2 text-gray-400">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
} 