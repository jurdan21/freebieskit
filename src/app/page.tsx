import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ResourceSection from "@/components/ResourceSection";
import { Suspense } from "react";
import { Metadata } from "next";

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
    canonical: "https://freebieskit.com",  // PASTIKAN TIDAK ADA TRAILING SLASH
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
        url: "/og-image.png",
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


};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Suspense>
        <ResourceSection />
      </Suspense>
    </>
  );
}
