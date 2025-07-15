import Header from "@/components/Header";
import { Metadata } from "next";
import Templates from "@/components/resource-detail/templates";

export const metadata: Metadata = {
  title: "Templates - FreebiesKit",
  description: "A curated collection of free design templates for various needs: websites, presentations, posters, and more. Download ready-to-use templates for your projects.",
  keywords: "free templates, template free, website template, presentation template, poster template, download template",
  authors: [{ name: "FreebiesKit" }],
  creator: "FreebiesKit",
  publisher: "FreebiesKit",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://freebieskit.com"),
  alternates: {
    canonical: "https://freebieskit.com/resource/templates",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://freebieskit.com/resource/templates",
    siteName: "FreebiesKit",
    title: "Templates - FreebiesKit",
    description: "A curated collection of free design templates for various needs: websites, presentations, posters, and more. Download ready-to-use templates for your projects.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Templates - FreebiesKit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@freebieskit",
    creator: "@freebieskit",
    title: "Templates - FreebiesKit",
    description: "A curated collection of free design templates for various needs: websites, presentations, posters, and more. Download ready-to-use templates for your projects.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Templates - FreebiesKit",
      "url": "https://freebieskit.com/resource/templates",
      "description": "A curated collection of free design templates for various needs.",
      "isPartOf": {
        "@type": "WebSite",
        "name": "FreebiesKit",
        "url": "https://freebieskit.com"
      }
    }),
  },
};

export default function Page({ params }: { params: { idSlug: string } }) {
  const id = params.idSlug.split('-')[0];
  return (
    <>
      <Header />
      <Templates id={id} />
    </>
  );
} 