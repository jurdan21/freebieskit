import Header from "@/components/Header";
import { Metadata } from "next";
import Motions from "@/components/resource-detail/motions";

export const metadata: Metadata = {
  title: "Motions - FreebiesKit",
  description: "A curated collection of free motion graphics, animations, and motion assets for UI, presentations, and video projects.",
  keywords: "motion graphic, motion asset, free animation, free motion, motion design, download motion graphic",
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
    canonical: "https://freebieskit.com/resource/motions",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://freebieskit.com/resource/motions",
    siteName: "FreebiesKit",
    title: "Motions - FreebiesKit",
    description: "A curated collection of free motion graphics, animations, and motion assets for UI, presentations, and video projects.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Motions - FreebiesKit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@freebieskit",
    creator: "@freebieskit",
    title: "Motions - FreebiesKit",
    description: "A curated collection of free motion graphics, animations, and motion assets for UI, presentations, and video projects.",
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
      "name": "Motions - FreebiesKit",
      "url": "https://freebieskit.com/resource/motions",
      "description": "A curated collection of free motion graphics, animations, and motion assets for UI, presentations, and video projects.",
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
      <Motions id={id} />
    </>
  );
} 