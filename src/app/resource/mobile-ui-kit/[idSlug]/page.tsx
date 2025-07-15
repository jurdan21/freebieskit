import Header from "@/components/Header";
import { Metadata } from "next";
import MobileUi from "@/components/resource-detail/mobile-ui";

export const metadata: Metadata = {
  title: "Mobile UI Kit - FreebiesKit",
  description: "A curated collection of free mobile UI kits for app design. Download modern and responsive mobile UI kits for your projects.",
  keywords: "mobile ui kit, ui kit mobile, free mobile ui, mobile design kit, ui kit free, download mobile ui kit",
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
    canonical: "https://freebieskit.com/resource/mobile-ui-kit",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://freebieskit.com/resource/mobile-ui-kit",
    siteName: "FreebiesKit",
    title: "Mobile UI Kit - FreebiesKit",
    description: "A curated collection of free mobile UI kits for app design. Download modern and responsive mobile UI kits for your projects.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Mobile UI Kit - FreebiesKit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@freebieskit",
    creator: "@freebieskit",
    title: "Mobile UI Kit - FreebiesKit",
    description: "A curated collection of free mobile UI kits for app design. Download modern and responsive mobile UI kits for your projects.",
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
      "name": "Mobile UI Kit - FreebiesKit",
      "url": "https://freebieskit.com/resource/mobile-ui-kit",
      "description": "A curated collection of free mobile UI kits for app design.",
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
      <MobileUi id={id} />
    </>
  );
} 