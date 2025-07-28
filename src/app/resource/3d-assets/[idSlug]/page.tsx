import { createClient } from '@supabase/supabase-js';
import DetailThreeDAssets from "@/components/resource-detail/three-d-assets";
import Header from "@/components/Header";
import { Metadata } from "next";
import { generateResourceMetadata } from '@/lib/generateResourceMetadata';

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
  return generateResourceMetadata({
    idSlug: params.idSlug,
    categorySlug: '3d-assets',
    categoryDisplayName: '3D Assets',
    defaultDescription: 'A curated collection of free 3D assets for designers and developers. Download high-quality 3D models, textures, and materials for your projects.',
    keywords: '3d assets, 3d models, free 3d assets, 3d textures, 3d materials, download 3d assets'
  });
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