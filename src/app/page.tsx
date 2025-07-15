import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ResourceSection from "@/components/ResourceSection";
import { Suspense } from "react";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "FreebiesKit - The Largest Free Design Asset Collection",
  description: "Discover thousands of free design assets: UI kits, mockups, icons, fonts, illustrations, and templates. Download instantly, no registration required. Curated for designers and developers worldwide.",
  keywords: "free design assets, free ui kit, free mockup, free icon, free font, free template, design resources, freebies, download design assets, free figma resources, free PSD, free XD resources, free UI resources, free web templates, free mobile templates, free vector, free SVG, free logo, free mockup, free 3d model, free illustration, free icon pack, free font download, free design inspiration, free creative assets, free presentation template, free dashboard UI, free device mockup, free branding kit",
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
    canonical: "https://freebieskit.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://freebieskit.com",
    siteName: "FreebiesKit",
    title: "FreebiesKit - The Largest Free Design Asset Collection",
    description: "Discover thousands of free design assets: UI kits, mockups, icons, fonts, illustrations, and templates. Download instantly, no registration required.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FreebiesKit - Free Design Assets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@freebieskit",
    creator: "@freebieskit",
    title: "FreebiesKit - The Largest Free Design Asset Collection",
    description: "Discover thousands of free design assets: UI kits, mockups, icons, fonts, illustrations, and templates.",
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
  verification: {
    google: "your-google-verification-code", // Replace with your Google Search Console verification code
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "FreebiesKit",
      "url": "https://freebieskit.com",
      "description": "The largest free design asset collection for designers and developers worldwide.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://freebieskit.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }),
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="FreebiesKit" />
        <meta name="theme-color" content="#0A0A0A" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* Advanced meta tags */}
        <meta name="msapplication-TileColor" content="#0A0A0A" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta property="og:locale:alternate" content="id_ID" />
        <meta name="twitter:creator" content="@freebieskit" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="FreebiesKit" />
      </Head>
      <Header />
      <Hero />
      <Suspense>
        <ResourceSection />
      </Suspense>
    </>
  );
}
