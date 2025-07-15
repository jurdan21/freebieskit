import Header from "@/components/Header";
import { Metadata } from "next";
import SocialMedia from "@/components/resource-detail/social-media";

export const metadata: Metadata = {
  title: "Social Media - FreebiesKit",
  description: "A curated collection of free templates and assets for social media. Download feed, story, banner, and creative content templates for your social media projects.",
  keywords: "social media template, social media asset, feed template, story template, free banner, download social media template",
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
    canonical: "https://freebieskit.com/resource/social-media",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://freebieskit.com/resource/social-media",
    siteName: "FreebiesKit",
    title: "Social Media Assets - FreebiesKit",
    description: "A curated collection of free templates and assets for social media. Download feed, story, banner, and creative content templates for your social media projects.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Social Media Assets - FreebiesKit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@freebieskit",
    creator: "@freebieskit",
    title: "Social Media Assets - FreebiesKit",
    description: "A curated collection of free templates and assets for social media. Download feed, story, banner, and creative content templates for your social media projects.",
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
      "name": "Social Media Assets - FreebiesKit",
      "url": "https://freebieskit.com/resource/social-media",
      "description": "A curated collection of free templates and assets for social media.",
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
      <SocialMedia id={id} />
    </>
  );
} 