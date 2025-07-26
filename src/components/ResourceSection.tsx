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
  slug?: string;
};

// Skeleton component untuk loading
const ResourceSkeleton = () => (
  <div className="rounded-2xl overflow-hidden flex flex-col bg-white animate-pulse">
    <div className="w-full aspect-[4/3] bg-gray-200 rounded-[18px] sm:rounded-[24px]"></div>
    <div className="flex items-center justify-between pt-3 pb-2 md:pt-4 md:pb-3">
      <div className="min-w-0 flex-1">
        <div className="h-4 bg-gray-200 rounded mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-2/3"></div>
      </div>
      <div className="ml-2 w-5 h-5 bg-gray-200 rounded"></div>
    </div>
  </div>
);

// Resource card dengan fade-in animation
const ResourceCard = ({ res, activeTab, idx }: { res: Resource; activeTab: string; idx: number }) => {
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
    <Link
      key={`${activeTab}-${res.id}-${idx}`}
      href={`/resource/${activeTab}/${res.id}-${slugify(res.title)}`}
      className="rounded-2xl overflow-hidden flex flex-col group bg-white animate-fade-in"
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
  );
};

export default function ResourceSection() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeTab, setActiveTab] = useState<string>("");
  const searchParams = useSearchParams();
  const [visibleCount, setVisibleCount] = useState(9);
  const [resources, setResources] = useState<Resource[]>([]);
  const [isPreloading, setIsPreloading] = useState(false);
  const [isTabLoading, setIsTabLoading] = useState(false);
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
      setIsTabLoading(true);
      // Cari id kategori dari slug
      const selectedCategory = categories.find(cat => cat.slug === activeTab);
      if (!selectedCategory) {
        setResources([]);
        setIsTabLoading(false);
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
      setVisibleCount(9); // Reset visible count untuk tab baru
      // Delay sedikit untuk smooth transition
      setTimeout(() => {
        setIsTabLoading(false);
      }, 300);
    }
    if (activeTab && categories.length > 0) {
      fetchResources();
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
  }, [searchParams, categories]);

  // Infinite scroll logic - diperbaiki untuk lebih smooth
  const currentResources = resources;
  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (
      target.isIntersecting &&
      !isPreloading &&
      visibleCount < currentResources.length
    ) {
      console.log('Loading more resources:', visibleCount, '->', Math.min(visibleCount + 9, currentResources.length));
      setIsPreloading(true);
      // Preload dengan delay yang lebih lama untuk loading yang lebih terlihat
      setTimeout(() => {
        setVisibleCount((prev) => Math.min(prev + 9, currentResources.length));
        // Delay sedikit lagi sebelum hilangkan skeleton
        setTimeout(() => {
          setIsPreloading(false);
        }, 200);
      }, 600); // Delay lebih lama untuk loading yang lebih terlihat
    }
  }, [isPreloading, visibleCount, currentResources.length]);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "100px", // Kurangi margin agar tidak terlalu awal
      threshold: 0.1,
    };
    const observer = new window.IntersectionObserver(handleObserver, option);
    const currentLoader = loaderRef.current;
    if (currentLoader) {
      observer.observe(currentLoader);
      console.log('Observer attached to loader');
    }
    return () => {
      if (currentLoader) observer.unobserve(currentLoader);
    };
  }, [handleObserver]);

  const visibleResources = currentResources.slice(0, visibleCount);
  const hasMore = visibleResources.length < currentResources.length;

  // Debug: log visible count
  useEffect(() => {
    console.log('Visible resources:', visibleCount, 'of', currentResources.length);
  }, [visibleCount, currentResources.length]);

  return (
    <section id="resource-section" className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-[120px] lg:py-[240px]">
      {/* Title resource */}
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium mb-8 md:mb-20 text-black text-left">Browse <span className="italic">Resources</span></h2>
      {/* Tab resource */}
      <div className="flex gap-2 overflow-x-auto py-3 mb-6 md:mb-8 scrollbar-hide border-b-0 resource-tab-container px-1">
        {categories.map((cat) => (
          <button
            key={cat.slug}
            className={`px-4 sm:px-6 py-3 text-sm sm:text-md font-medium whitespace-nowrap transition-all duration-300 rounded-full flex-shrink-0
              ${activeTab === cat.slug
                ? "bg-blue-600 text-white transform scale-105"
                : "bg-gray-100 text-gray-500 hover:text-black hover:bg-gray-200"}
              cursor-pointer
            `}
            onClick={() => setActiveTab(cat.slug)}
            disabled={isTabLoading}
          >
            {cat.name}
          </button>
        ))}
      </div>
      {/* List Resource */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {isTabLoading ? (
          // Loading state untuk tab switching
          <>
            {Array.from({ length: 9 }).map((_, idx) => (
              <ResourceSkeleton key={`tab-loading-${idx}`} />
            ))}
          </>
        ) : visibleResources.length === 0 ? (
          <div className="col-span-3 text-center text-gray-400 py-8">No resources found.</div>
        ) : (
          <>
            {/* Existing resources */}
            {visibleResources.map((res: Resource, idx: number) => (
              <ResourceCard key={`${activeTab}-${res.id}-${idx}`} res={res} activeTab={activeTab} idx={idx} />
            ))}
            
            {/* Skeleton loading untuk smooth transition */}
            {isPreloading && Array.from({ length: 9 }).map((_, idx) => (
              <ResourceSkeleton key={`skeleton-${idx}`} />
            ))}
          </>
        )}
      </div>
      {/* Loader - hanya tampil saat ada more content */}
      {hasMore && (
        <div ref={loaderRef} className="flex justify-center items-center py-8">
          {isPreloading && (
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
              <span className="text-gray-400">Loading more...</span>
            </div>
          )}
          {!isPreloading && (
            <div className="text-gray-400 text-sm">
              Scroll down to load more ({visibleCount} of {currentResources.length})
            </div>
          )}
        </div>
      )}
    </section>
  );
} 