import Header from "@/components/Header";
import { Metadata } from "next";
import DeviceMockup from "@/components/resource-detail/device-mockup";
import { createClient } from '@supabase/supabase-js';
import { generateResourceMetadata } from '@/lib/generateResourceMetadata';

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
  return generateResourceMetadata({
    idSlug: params.idSlug,
    categorySlug: 'device-mockup',
    categoryDisplayName: 'Device Mockup',
    defaultDescription: 'A curated collection of free device mockups for designers. Download smartphone, tablet, laptop, and other device mockups for your presentations and projects.',
    keywords: 'device mockup, smartphone mockup, laptop mockup, free device mockup, mockup free, download device mockup'
  });
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