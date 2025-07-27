import Header from "@/components/Header";
import { Metadata } from "next";
import DeviceMockup from "@/components/resource-detail/device-mockup";
import { createClient } from '@supabase/supabase-js';

export async function generateStaticParams() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  // Ambil ID kategori device-mockup dari tabel categories
  const { data: category } = await supabase
    .from('categories')
    .select('id')
    .eq('slug', 'device-mockup')
    .single();
  if (!category) return [];

  // Ambil semua resource device-mockup
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

export async function generateMetadata({ params }: { params: { idSlug: string } }): Promise<Metadata> {
  return {
  title: "Device Mockup - FreebiesKit",
  description: "A curated collection of free device mockups for designers. Download smartphone, tablet, laptop, and other device mockups for your presentations and projects.",
  keywords: "device mockup, smartphone mockup, laptop mockup, free device mockup, mockup free, download device mockup",
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
    canonical: `https://freebieskit.com/resource/device-mockup/${params.idSlug}`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `https://freebieskit.com/resource/device-mockup/${params.idSlug}`,
    siteName: "FreebiesKit",
    title: "Device Mockup - FreebiesKit",
    description: "A curated collection of free device mockups for designers. Download smartphone, tablet, laptop, and other device mockups for your presentations and projects.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Device Mockup - FreebiesKit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@freebieskit",
    creator: "@freebieskit",
    title: "Device Mockup - FreebiesKit",
    description: "A curated collection of free device mockups for designers. Download smartphone, tablet, laptop, and other device mockups for your presentations and projects.",
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
      "name": "Device Mockup - FreebiesKit",
      "url": `https://freebieskit.com/resource/device-mockup/${params.idSlug}`,
      "description": "A curated collection of free device mockups for designers.",
      "isPartOf": {
        "@type": "WebSite",
        "name": "FreebiesKit",
        "url": "https://freebieskit.com"
      }
    }),
  },
  };
}

export default function Page({ params }: { params: { idSlug: string } }) {
  const id = params.idSlug.split('-')[0];
  return (
    <>
      <Header />
      <DeviceMockup id={id} />
    </>
  );
}