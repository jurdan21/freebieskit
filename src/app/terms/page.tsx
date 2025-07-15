import Term from "@/components/Term";
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use - FreebiesKit",
  description: "Terms of Use for FreebiesKit. Learn the rules and conditions that apply when using our platform and services.",
  keywords: "terms of use, freebieskit terms, terms and conditions, usage policy, user agreement",
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
    canonical: "https://freebieskit.com/terms",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://freebieskit.com/terms",
    siteName: "FreebiesKit",
    title: "Terms of Use - FreebiesKit",
    description: "Terms of Use for FreebiesKit. Learn the rules and conditions that apply when using our platform and services.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Terms of Use - FreebiesKit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@freebieskit",
    creator: "@freebieskit",
    title: "Terms of Use - FreebiesKit",
    description: "Terms of Use for FreebiesKit. Learn the rules and conditions that apply when using our platform and services.",
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
      "name": "Terms of Use - FreebiesKit",
      "url": "https://freebieskit.com/terms",
      "description": "Terms of Use for FreebiesKit. Learn the rules and conditions that apply when using our platform and services.",
      "isPartOf": {
        "@type": "WebSite",
        "name": "FreebiesKit",
        "url": "https://freebieskit.com"
      }
    }),
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <Term />
    </>
  );
} 