import Header from "@/components/Header";
import { Metadata } from "next";
import ThreeDAssets from "@/components/resource-detail/three-d-assets";

export const metadata: Metadata = {
  title: "3D Assets - FreebiesKit",
  description: "A curated collection of free 3D assets for designers and developers. Download 3D models, textures, and more for your creative projects.",
  keywords: "3d assets, 3d models, 3d textures, free 3d assets, 3d design resources, download 3d assets",
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
    canonical: "https://freebieskit.com/resource/3d-assets",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://freebieskit.com/resource/3d-assets",
    siteName: "FreebiesKit",
    title: "3D Assets - FreebiesKit",
    description: "A curated collection of free 3D assets for designers and developers. Download 3D models, textures, and more for your creative projects.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "3D Assets - FreebiesKit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@freebieskit",
    creator: "@freebieskit",
    title: "3D Assets - FreebiesKit",
    description: "A curated collection of free 3D assets for designers and developers. Download 3D models, textures, and more for your creative projects.",
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
      "name": "3D Assets - FreebiesKit",
      "url": "https://freebieskit.com/resource/3d-assets",
      "description": "A curated collection of free 3D assets for designers and developers.",
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
      <ThreeDAssets id={id} />
    </>
  );
} 