import Header from "@/components/Header";
import { Metadata } from "next";
import Fonts from "@/components/resource-detail/fonts";

export const metadata: Metadata = {
  title: "Fonts - FreebiesKit",
  description: "A curated collection of free fonts for design and web projects. Download modern, classic, and unique fonts for your creative needs.",
  keywords: "free fonts, font free, download font, design fonts, web fonts, font collection",
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
    canonical: "https://freebieskit.com/resource/fonts",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://freebieskit.com/resource/fonts",
    siteName: "FreebiesKit",
    title: "Fonts - FreebiesKit",
    description: "A curated collection of free fonts for design and web projects. Download modern, classic, and unique fonts for your creative needs.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Fonts - FreebiesKit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@freebieskit",
    creator: "@freebieskit",
    title: "Fonts - FreebiesKit",
    description: "A curated collection of free fonts for design and web projects. Download modern, classic, and unique fonts for your creative needs.",
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
      "name": "Fonts - FreebiesKit",
      "url": "https://freebieskit.com/resource/fonts",
      "description": "A curated collection of free fonts for design and web projects.",
      "isPartOf": {
        "@type": "WebSite",
        "name": "FreebiesKit",
        "url": "https://freebieskit.com"
      }
    }),
  },
};

export default async function Page({ params }: { params: { idSlug: string } }) {
  const id = params.idSlug.split('-')[0];
  return (
    <>
      <Header />
      <Fonts id={id} />
    </>
  );
} 