import Privacy from "@/components/Privacy";
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - FreebiesKit",
  description: "FreebiesKit Privacy Policy. Learn how we collect, use, and protect your personal information as you use our platform.",
  keywords: "privacy policy, freebieskit privacy, data protection, personal information, privacy statement",
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
    canonical: "https://freebieskit.com/privacy",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://freebieskit.com/privacy",
    siteName: "FreebiesKit",
    title: "Privacy Policy - FreebiesKit",
    description: "FreebiesKit Privacy Policy. Learn how we collect, use, and protect your personal information as you use our platform.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - FreebiesKit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@freebieskit",
    creator: "@freebieskit",
    title: "Privacy Policy - FreebiesKit",
    description: "FreebiesKit Privacy Policy. Learn how we collect, use, and protect your personal information as you use our platform.",
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
      "name": "Privacy Policy - FreebiesKit",
      "url": "https://freebieskit.com/privacy",
      "description": "FreebiesKit Privacy Policy. Learn how we collect, use, and protect your personal information as you use our platform.",
      "isPartOf": {
        "@type": "WebSite",
        "name": "FreebiesKit",
        "url": "https://freebieskit.com"
      }
    }),
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <Privacy />
    </>
  );
}