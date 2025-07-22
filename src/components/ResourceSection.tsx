'use client';

import React, { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

type Category = {
  id: number;
  name: string;
  slug: string;
};

type Resource = {
  id: number;
  title: string;
  author: string;
  desc: string;
  image: string;
  platform?: string;
  overview?: string;
  category?: string;
  compatibility?: string;
  description?: string;
  is_active?: boolean;
  created_at?: string;
  slug?: string; // tambahkan slug agar tidak error
};

export default function ResourceSection() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeTab, setActiveTab] = useState<string>("");
  const searchParams = useSearchParams();
  const [visibleCount, setVisibleCount] = useState(9);
  const [isLoading, setIsLoading] = useState(false);
  const [resources, setResources] = useState<Resource[]>([]);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  // Fetch categories dari Supabase saat mount
  useEffect(() => {
    async function fetchCategories() {
      const { data, error } = await supabase
        .from('categories')
        .select('id, name, slug')
        .order('name', { ascending: true });
      if (!error && data) {
        setCategories(data);
        setActiveTab(data[0]?.slug || "");
      }
    }
    fetchCategories();
  }, []);

  // Fetch resources dari Supabase setiap activeTab berubah
  useEffect(() => {
    async function fetchResources() {
      setIsLoading(true);
      // Cari id kategori dari slug
      const selectedCategory = categories.find(cat => cat.slug === activeTab);
      if (!selectedCategory) {
        setResources([]);
        setIsLoading(false);
        return;
      }
      const { data, error } = await supabase
        .from('resources')
        .select('*')
        .eq('category_id', selectedCategory.id)
        .order('id', { ascending: false });
      if (!error && data) {
        setResources(data);
      } else {
        setResources([]);
      }
      setIsLoading(false);
    }
    if (activeTab && categories.length > 0) {
      fetchResources();
      setVisibleCount(9);
    }
  }, [activeTab, categories]);

  useEffect(() => {
    const tabKey = searchParams.get("tab");
    if (tabKey && categories.length > 0) {
      const found = categories.find(cat => cat.slug === tabKey);
      if (found) setActiveTab(found.slug);
      setTimeout(() => {
        const section = document.getElementById('resource-section');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
    setVisibleCount(9);
  }, [searchParams, categories]);

  // Infinite scroll logic
  const currentResources = resources;
  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (
      target.isIntersecting &&
      !isLoading &&
      visibleCount < currentResources.length
    ) {
      setIsLoading(true);
      setTimeout(() => {
        setVisibleCount((prev) => Math.min(prev + 9, currentResources.length));
        setIsLoading(false);
      }, 300);
    }
  }, [isLoading, visibleCount, currentResources.length]);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
    const observer = new window.IntersectionObserver(handleObserver, option);
    const currentLoader = loaderRef.current;
    if (currentLoader) observer.observe(currentLoader);
    return () => {
      if (currentLoader) observer.unobserve(currentLoader);
    };
  }, [handleObserver]);

  const visibleResources = currentResources.slice(0, visibleCount);
  const hasMore = visibleResources.length < currentResources.length;

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

  return (
    <section id="resource-section" className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-[120px] lg:py-[240px]">
      {/* Title resource */}
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium mb-8 md:mb-20 text-black text-left">Browse <span className="italic">Resources</span></h2>
      {/* Tab resource */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 md:mb-8 scrollbar-hide border-b-0 resource-tab-container">
        {categories.map((cat) => (
          <button
            key={cat.slug}
            className={`px-4 sm:px-6 py-2 text-sm sm:text-md font-medium whitespace-nowrap transition-colors duration-150 rounded-full
              ${activeTab === cat.slug
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-500 hover:text-black"}
              cursor-pointer
            `}
            onClick={() => setActiveTab(cat.slug)}
          >
            {cat.name}
          </button>
        ))}
      </div>
      {/* List Resource */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {isLoading ? (
          <div className="col-span-3 text-center text-gray-400 py-8">Loading...</div>
        ) : visibleResources.length === 0 ? (
          <div className="col-span-3 text-center text-gray-400 py-8">No resources found.</div>
        ) : (
          visibleResources.map((res: Resource, idx: number) => (
            <Link
              key={`${activeTab}-${res.id}-${idx}`}
              href={`/resource/${activeTab}/${res.id}-${slugify(res.title)}`}
              className="rounded-2xl overflow-hidden flex flex-col group bg-white"
              style={{ textDecoration: 'none' }}
            >
              <Image
                src={res.image}
                alt={res.title}
                width={400}
                height={300}
                className="w-full aspect-[4/3] object-cover rounded-[18px] sm:rounded-[24px] transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex items-center justify-between pt-3 pb-2 md:pt-4 md:pb-3">
                <div className="min-w-0">
                  <div className="font-semibold text-sm sm:text-base text-black truncate">{res.title}</div>
                  <div className="text-xs text-gray-500 truncate">by {res.author}</div>
                </div>
                <span className="ml-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75H6.75m10.5 0-8.5 8.5m8.5-8.5v6.5" />
                  </svg>
                </span>
              </div>
            </Link>
          ))
        )}
      </div>
      {/* Loader */}
      {hasMore && (
        <div ref={loaderRef} className="flex justify-center items-center py-8">
          <span className="text-gray-400">{isLoading ? 'Loading more resources...' : ''}</span>
        </div>
      )}
    </section>
  );
} 