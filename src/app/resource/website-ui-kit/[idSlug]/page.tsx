import { Metadata } from "next";
import Header from "@/components/Header";
import WebsiteUi from "@/components/resource-detail/website-ui";
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
    .eq('slug', 'website-ui-kit')
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
    categorySlug: 'website-ui-kit',
    categoryDisplayName: 'Website UI Kit',
    defaultDescription: 'A curated collection of free website UI kits for modern and responsive web design. Download ready-to-use UI kits for your projects.',
    keywords: 'website ui kit, ui kit website, free website ui, web design kit, ui kit free, download website ui kit'
  });
}

export default function Page({ params }: { params: { idSlug: string } }) {
  const id = params.idSlug.split('-')[0];
  return (
    <>
      <Header />
      <WebsiteUi id={id} />
    </>
  );
}