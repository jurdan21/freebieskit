import Header from "@/components/Header";
import { Metadata } from "next";
import BrandingMockup from "@/components/resource-detail/branding-mockup";
import { createClient } from '@supabase/supabase-js';
import { generateResourceMetadata } from '@/lib/generateResourceMetadata';

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

export async function generateMetadata({ params }: { params: { idSlug: string } }): Promise<Metadata> {
  return generateResourceMetadata({
    idSlug: params.idSlug,
    categorySlug: 'branding-mockup',
    categoryDisplayName: 'Branding Mockup',
    defaultDescription: 'A curated collection of free branding mockups for designers. Download logo mockups, brand identity templates, and more.',
    keywords: 'branding mockup, logo mockup, free branding mockup, brand identity, design mockup, download mockup'
  });
}

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