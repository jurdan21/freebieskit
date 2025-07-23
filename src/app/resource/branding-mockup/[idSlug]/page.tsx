import Header from "@/components/Header";
import { Metadata } from "next";
import BrandingMockup from "@/components/resource-detail/branding-mockup";
import { createClient } from '@supabase/supabase-js';

export async function generateStaticParams() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const { data: category } = await supabase
    .from('categories')
    .select('id')
    .eq('slug', 'branding-mockup')
    .single();
  if (!category) return [];
  const { data, error } = await supabase
    .from('resources')
    .select('id, title')
    .eq('category_id', category.id);
  if (error || !data) return [];
  function slugify(text: string) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }
  return data.map((r) => ({
    idSlug: `${r.id}-${slugify(r.title)}`,
  }));
}

export const metadata: Metadata = {
  title: "Branding Mockup - FreebiesKit",
  description: "A curated collection of free branding mockups for designers. Download logo mockups, brand identity templates, and more.",
  keywords: "branding mockup, logo mockup, free branding mockup, brand identity, design mockup, download mockup",
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
    canonical: "https://freebieskit.com/resource/branding-mockup",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://freebieskit.com/resource/branding-mockup",
    siteName: "FreebiesKit",
    title: "Branding Mockup - FreebiesKit",
    description: "A curated collection of free branding mockups for designers. Download logo mockups, brand identity templates, and more.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Branding Mockup - FreebiesKit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@freebieskit",
    creator: "@freebieskit",
    title: "Branding Mockup - FreebiesKit",
    description: "A curated collection of free branding mockups for designers. Download logo mockups, brand identity templates, and more.",
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
      "name": "Branding Mockup - FreebiesKit",
      "url": "https://freebieskit.com/resource/branding-mockup",
      "description": "A curated collection of free branding mockups for designers.",
      "isPartOf": {
        "@type": "WebSite",
        "name": "FreebiesKit",
        "url": "https://freebieskit.com"
      }
    }),
  },
};

export default function Page({ params }: { params: { idSlug: string } }) {
  // idSlug format: "1-modern-logo-mockup"
  const id = params.idSlug.split('-')[0];
  return (
    <>
      <Header />
      <BrandingMockup id={id} />
    </>
  );
} 