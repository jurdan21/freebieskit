import Header from "@/components/Header";
import { Metadata } from "next";
import Icons from "@/components/resource-detail/icons";

export const metadata: Metadata = {
  title: "Icons - FreebiesKit",
  description: "A curated collection of free icons for UI and web design. Download icon packs, outline, filled, and custom icons for your creative projects.",
  keywords: "free icons, icon free, download icon, icon pack, ui icons, web icons, icon collection",
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
    canonical: "https://freebieskit.com/resource/icons",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://freebieskit.com/resource/icons",
    siteName: "FreebiesKit",
    title: "Icons - FreebiesKit",
    description: "A curated collection of free icons for UI and web design. Download icon packs, outline, filled, and custom icons for your creative projects.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Icons - FreebiesKit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@freebieskit",
    creator: "@freebieskit",
    title: "Icons - FreebiesKit",
    description: "A curated collection of free icons for UI and web design. Download icon packs, outline, filled, and custom icons for your creative projects.",
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
      "name": "Icons - FreebiesKit",
      "url": "https://freebieskit.com/resource/icons",
      "description": "A curated collection of free icons for UI and web design.",
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
      <Icons id={id} />
    </>
  );
} 