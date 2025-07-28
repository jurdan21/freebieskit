import Information from "@/components/Information";
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Information - FreebiesKit",
  description: "Comprehensive information about FreebiesKit, the largest curated platform for free design assets for designers and developers worldwide.",
  keywords: "about freebieskit, freebieskit information, free design assets, design resources, about us",
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
    canonical: "https://freebieskit.com/information",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://freebieskit.com/information",
    siteName: "FreebiesKit",
    title: "Information - FreebiesKit",
    description: "Comprehensive information about FreebiesKit, the largest curated platform for free design assets for designers and developers worldwide.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Information - FreebiesKit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@freebieskit",
    creator: "@freebieskit",
    title: "Information - FreebiesKit",
    description: "Comprehensive information about FreebiesKit, the largest curated platform for free design assets for designers and developers worldwide.",
    images: ["/og-image.png"],
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
      "name": "Information - FreebiesKit",
      "url": "https://freebieskit.com/information",
      "description": "Comprehensive information about FreebiesKit, the largest curated platform for free design assets for designers and developers worldwide.",
      "isPartOf": {
        "@type": "WebSite",
        "name": "FreebiesKit",
        "url": "https://freebieskit.com"
      }
    }),
  },
};

export default function InformationPage() {
  return (
    <>
      <Header />
      <Information />
    </>
  );
}