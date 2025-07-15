import { Metadata } from "next";
import Header from "@/components/Header";
import WebsiteUi from "@/components/resource-detail/website-ui";

export const metadata: Metadata = {
  title: "Website UI Kit - FreebiesKit",
  description: "A curated collection of free website UI kits for modern and responsive web design. Download ready-to-use UI kits for your projects.",
  keywords: "website ui kit, ui kit website, free website ui, web design kit, ui kit free, download website ui kit",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://freebieskit.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Website UI Kit",
          "item": "https://freebieskit.com/resource/website-ui-kit"
        }
      ]
    })
  }
};

export default function Page({ params }: { params: { idSlug: string } }) {
  const id = params.idSlug.split('-')[0];
  return (
    <>
      <Header />
      <WebsiteUi id={id} />
    </>
  );
} 