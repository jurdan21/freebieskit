import Header from "@/components/Header";
import { Metadata } from "next";
import Templates from "@/components/resource-detail/templates";
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
    .eq('slug', 'templates')
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
    categorySlug: 'templates',
    categoryDisplayName: 'Templates',
    defaultDescription: 'A curated collection of free design templates for various needs: websites, presentations, posters, and more. Download ready-to-use templates for your projects.',
    keywords: 'free templates, template free, website template, presentation template, poster template, download template'
  });
}

export default function Page({ params }: { params: { idSlug: string } }) {
  const id = params.idSlug.split('-')[0];
  return (
    <>
      <Header />
      <Templates id={id} />
    </>
  );
}