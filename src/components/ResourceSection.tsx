'use client';

import React, { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Resource = {
  id: number;
  title: string;
  desc: string;
  image: string;
};

const categories = [
  { key: "website-ui-kit", label: "Website UI Kit" },
  { key: "mobile-ui-kit", label: "Mobile UI Kit" },
  { key: "dashboard-ui-kit", label: "Dashboard UI Kit" },
  { key: "device-mockup", label: "Device Mockup" },
  { key: "icons", label: "Icons" },
  { key: "templates", label: "Templates" },
  { key: "presentations", label: "Presentations" },
  { key: "fonts", label: "Fonts" },
  { key: "illustrations", label: "Illustrations" },
  { key: "3d-assets", label: "3D Assets" },
  { key: "branding-mockup", label: "Branding Mockup" },
  { key: "social-media", label: "Social Media" },
  { key: "motions", label: "Motions" },
] as const;

type CategoryKey = typeof categories[number]["key"];

const resources: Record<CategoryKey, Resource[]> = {
  "website-ui-kit": [
    { id: 1, title: "Modern Website UI Kit", desc: "Figma, Sketch, XD", image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp" },
    { id: 2, title: "Modern Website UI Kit", desc: "Figma, Sketch, XD", image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp" },
    { id: 3, title: "Modern Website UI Kit", desc: "Figma, Sketch, XD", image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp" },
    { id: 4, title: "Modern Website UI Kit", desc: "Figma, Sketch, XD", image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp" },
    { id: 5, title: "Modern Website UI Kit", desc: "Figma, Sketch, XD", image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp" },
    { id: 6, title: "Modern Website UI Kit", desc: "Figma, Sketch, XD", image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp" },
    { id: 7, title: "Modern Website UI Kit", desc: "Figma, Sketch, XD", image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp" },
    { id: 8, title: "Modern Website UI Kit", desc: "Figma, Sketch, XD", image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp" },
    { id: 9, title: "Modern Website UI Kit", desc: "Figma, Sketch, XD", image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp" },
    { id: 10, title: "Modern Website UI Kit", desc: "Figma, Sketch, XD", image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp" },
    { id: 12, title: "Modern Website UI Kit", desc: "Figma, Sketch, XD", image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp" },
    { id: 13, title: "Modern Website UI Kit", desc: "Figma, Sketch, XD", image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp" },
    { id: 14, title: "Modern Website UI Kit", desc: "Figma, Sketch, XD", image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp" },
    { id: 15, title: "Modern Website UI Kit", desc: "Figma, Sketch, XD", image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp" },
    { id: 16, title: "Modern Website UI Kit", desc: "Figma, Sketch, XD", image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp" },
  ],
  "mobile-ui-kit": [
    { id: 1, title: "Mobile UI Kit", desc: "Figma, Sketch", image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp" },
  ],
  "dashboard-ui-kit": [
    { id: 1, title: "Dashboard UI Kit", desc: "Figma, Sketch", image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp" },
  ],
  "device-mockup": [
    { id: 1, title: "Device Mockup", desc: "PSD, Figma", image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp" },
  ],
  "icons": [
    { id: 1, title: "Essential Icons", desc: "SVG, PNG", image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp" },
  ],
  "templates": [
    { id: 1, title: "Template Kit", desc: "Figma, Sketch", image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp" },
  ],
  "presentations": [
    { id: 1, title: "Presentation Kit", desc: "Keynote, PPT", image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp" },
  ],
  "fonts": [
    { id: 1, title: "Modern Sans", desc: "OTF, TTF", image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp" },
  ],
  "illustrations": [
    { id: 1, title: "Startup Illustration", desc: "SVG, PNG", image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp" },
  ],
  "3d-assets": [
    { id: 1, title: "3D Asset", desc: "OBJ, FBX", image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp" },
  ],
  "branding-mockup": [
    { id: 1, title: "Branding Mockup", desc: "PSD, Figma", image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp" },
  ],
  "social-media": [
    { id: 1, title: "Social Media Kit", desc: "PSD, Figma", image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp" },
  ],
  "motions": [
    { id: 1, title: "Motion Graphic", desc: "AE, MP4", image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp" },
  ],
};

export default function ResourceSection() {
  const [activeTab, setActiveTab] = useState<CategoryKey>(categories[0].key);
  const searchParams = useSearchParams();
  const [visibleCount, setVisibleCount] = useState(9);
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tabKey = searchParams.get("tab");
    if (tabKey) {
      const found = categories.find(cat => cat.key === tabKey);
      if (found) setActiveTab(found.key);
      setTimeout(() => {
        const section = document.getElementById('resource-section');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
    // Reset visibleCount setiap searchParams berubah (termasuk saat mount)
    setVisibleCount(9);
  }, [searchParams]);

  // Infinite scroll logic
  const currentResources = resources[activeTab] || [];
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
      }, 300); // delay agar tidak langsung bertubi-tubi
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
  }, [handleObserver, loaderRef.current]);

  const visibleResources = currentResources.slice(0, visibleCount);
  const hasMore = visibleResources.length < currentResources.length;

  return (
    <section id="resource-section" className="w-full max-w-[1440px] mx-auto px-[40px] py-[240px]">
      {/* Title resource */}
      <h2 className="text-4xl md:text-5xl font-medium mb-20 text-black text-left">Browse <span className="italic">Resources</span></h2>
      {/* Tab resource */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide border-b-0 resource-tab-container">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`px-6 py-2 text-md font-medium whitespace-nowrap transition-colors duration-150 rounded-full
              ${activeTab === cat.key
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-500 hover:text-black"}
              cursor-pointer
            `}
            onClick={() => setActiveTab(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      {/* List Resource */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visibleResources.map((res: Resource, idx: number) => (
          <Link
            key={`${activeTab}-${res.id}-${idx}`}
            href={`/resource/${activeTab}/${res.id}`}
            className="rounded-2xl overflow-hidden flex flex-col group"
            style={{ textDecoration: 'none' }}
          >
            <Image
              src={res.image}
              alt={res.title}
              width={400}
              height={300}
              className="w-full aspect-[4/3] object-cover rounded-[24px] transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex items-center justify-between pt-4 pb-3">
              <div className="min-w-0">
                <div className="font-semibold text-base text-black truncate">Verdant</div>
                <div className="text-xs text-gray-500 truncate">by Ruslanlatypov for LSTORE</div>
              </div>
              <span className="ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75H6.75m10.5 0-8.5 8.5m8.5-8.5v6.5" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
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