"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { supabase } from "@/lib/supabaseClient";

interface Resource {
  id: number;
  title: string;
  author: string;
  platform: string;
  image: string;
  overview: string;
  category: string;
  compatibility: string;
  download_link: string;
}

export default function DetailFonts({ id }: { id: string }) {
  const [resource, setResource] = useState<Resource | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categoryName, setCategoryName] = useState<string>("");

  useEffect(() => {
    async function fetchResource() {
      setLoading(true);
      setError(null);
      // Ambil id kategori fonts
      const { data: categories } = await supabase
        .from('categories')
        .select('id')
        .eq('slug', 'fonts')
        .single();
      if (!categories) {
        setError('Category not found.');
        setResource(null);
        setLoading(false);
        return;
      }
      const categoryId = categories.id;
      const { data, error } = await supabase
        .from('resources')
        .select('*')
        .eq('category_id', categoryId)
        .eq('id', Number(id))
        .single();
      if (error || !data) {
        setError('Resource not found.');
        setResource(null);
      } else {
        setResource(data);
        // Fetch nama kategori dari category_id
        const { data: cat } = await supabase
          .from('categories')
          .select('name')
          .eq('id', data.category_id)
          .single();
        setCategoryName(cat?.name || "");
      }
      setLoading(false);
    }
    fetchResource();
  }, [id]);

  if (loading) return <div className="py-16 text-center text-gray-500">Loading...</div>;
  if (error || !resource) return <div className="py-16 text-center text-gray-500">{error || 'Resource not found.'}</div>;

  return (
    <div className="max-w-3xl mx-auto py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="flex items-start justify-between mb-6">
        <h1 className="text-lg sm:text-2xl md:text-3xl font-medium text-black">{resource.title}</h1>
        <div className="text-xs sm:text-sm text-gray-500 mt-1">by {resource.author} for {resource.platform}</div>
      </div>
      <Image src={resource.image} alt={resource.title} width={900} height={500} className="rounded-xl sm:rounded-2xl mb-8 sm:mb-10 w-full object-cover aspect-[4/3] sm:aspect-[16/9]" />
      <div className="mb-8">
        <div className="text-gray-400 font-medium mb-1">Overview</div>
        <div className="text-sm sm:text-base text-black leading-relaxed">{resource.overview}</div>
      </div>
      <div className="mb-6">
        <div className="text-gray-400 font-medium mb-1">Category</div>
        <div className="text-sm sm:text-base text-black">{categoryName}</div>
      </div>
      <div className="mb-10">
        <div className="text-gray-400 font-medium mb-1">Compatibility</div>
        <div className="text-sm sm:text-base text-black">{resource.compatibility}</div>
      </div>
      <Button href={resource.download_link} size="large" target="_blank" rel="noopener noreferrer">Download Now</Button>
    </div>
  );
} 