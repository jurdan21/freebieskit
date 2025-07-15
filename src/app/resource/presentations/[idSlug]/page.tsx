import Header from "@/components/Header";
import { Metadata } from "next";
import Presentations from "@/components/resource-detail/presentations";

export const metadata: Metadata = {
  title: "Presentations - FreebiesKit",
  description: "A curated collection of free presentation templates for PowerPoint, Keynote, and Google Slides. Download professional and creative presentation designs.",
  keywords: "presentation template, free presentation, ppt template, keynote template, google slides template, download presentation template",
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
    canonical: "https://freebieskit.com/resource/presentations",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://freebieskit.com/resource/presentations",
    siteName: "FreebiesKit",
    title: "Presentations - FreebiesKit",
    description: "A curated collection of free presentation templates for PowerPoint, Keynote, and Google Slides. Download professional and creative presentation designs.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Presentations - FreebiesKit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@freebieskit",
    creator: "@freebieskit",
    title: "Presentations - FreebiesKit",
    description: "A curated collection of free presentation templates for PowerPoint, Keynote, and Google Slides. Download professional and creative presentation designs.",
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
      "name": "Presentations - FreebiesKit",
      "url": "https://freebieskit.com/resource/presentations",
      "description": "A curated collection of free presentation templates for PowerPoint, Keynote, and Google Slides.",
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
      <Presentations id={id} />
    </>
  );
} 