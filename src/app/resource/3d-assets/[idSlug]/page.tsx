import { createClient } from '@supabase/supabase-js';
import DetailThreeDAssets from "@/components/resource-detail/three-d-assets";
import Header from "@/components/Header";
import { Metadata } from "next";

export async function generateStaticParams() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const { data: category } = await supabase
    .from('categories')
    .select('id')
    .eq('slug', '3d-assets')
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

export async function generateMetadata({ params }: { params: { idSlug: string } }): Promise<Metadata> {
  return {
    title: "3D Assets - FreebiesKit",
    description: "A curated collection of free 3D assets for designers and developers. Download high-quality 3D models, textures, and more for your projects.",
    keywords: "3d assets, free 3d models, 3d textures, free 3d resources, 3d design assets",
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
      canonical: `https://freebieskit.com/resource/3d-assets/${params.idSlug}`,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `https://freebieskit.com/resource/3d-assets/${params.idSlug}`,
      siteName: "FreebiesKit",
      title: "3D Assets - FreebiesKit",
      description: "A curated collection of free 3D assets for designers and developers. Download high-quality 3D models, textures, and more for your projects.",
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
      description: "A curated collection of free 3D assets for designers and developers. Download high-quality 3D models, textures, and more for your projects.",
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
        "url": `https://freebieskit.com/resource/3d-assets/${params.idSlug}`,
        "description": "A curated collection of free 3D assets for designers and developers.",
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
      <DetailThreeDAssets id={id} />
    </>
  );
}