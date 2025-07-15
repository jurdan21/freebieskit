import Header from "@/components/Header";
import { Metadata } from "next";
import Illustrations from "@/components/resource-detail/illustrations";

export const metadata: Metadata = {
  title: "Illustrations - FreebiesKit",
  description: "A curated collection of free illustrations for UI, web, and presentations. Download vector, flat, and character illustrations for your creative projects.",
  keywords: "free illustrations, illustration free, vector illustration, flat illustration, download illustration, illustration collection",
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
    canonical: "https://freebieskit.com/resource/illustrations",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://freebieskit.com/resource/illustrations",
    siteName: "FreebiesKit",
    title: "Illustrations - FreebiesKit",
    description: "A curated collection of free illustrations for UI, web, and presentations. Download vector, flat, and character illustrations for your creative projects.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Illustrations - FreebiesKit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@freebieskit",
    creator: "@freebieskit",
    title: "Illustrations - FreebiesKit",
    description: "A curated collection of free illustrations for UI, web, and presentations. Download vector, flat, and character illustrations for your creative projects.",
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
      "name": "Illustrations - FreebiesKit",
      "url": "https://freebieskit.com/resource/illustrations",
      "description": "A curated collection of free illustrations for UI, web, and presentations.",
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
      <Illustrations id={id} />
    </>
  );
} 