'use client';

import React, { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { websiteUiResources } from "@/data/website-ui";
import { mobileUiResources } from "@/data/mobile-ui";
import { brandingMockupResources } from "@/data/branding-mockup";
import { dashboardUiResources } from "@/data/dashboard-ui";
import { deviceMockupResources } from "@/data/device-mockup";
import { fontsResources } from "@/data/fonts";
import { iconsResources } from "@/data/icons";
import { illustrationsResources } from "@/data/illustrations";
import { motionsResources } from "@/data/motions";
import { presentationsResources } from "@/data/presentations";
import { socialMediaResources } from "@/data/social-media";
import { templatesResources } from "@/data/templates";
import { threeDAssetsResources } from "@/data/three-d-assets";
import { webDesignInspirationResources } from "@/data/web-design-inspiration";

type Resource = {
  id: number;
  title: string;
  author: string;
  desc: string;
  image: string;
  slug?: string; // Added slug field
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
  { key: "web-design-inspiration", label: "Web Design Inspiration" },
] as const;

type CategoryKey = typeof categories[number]["key"];

const resources: Record<CategoryKey, Resource[]> = {
  "website-ui-kit": websiteUiResources,
  "mobile-ui-kit": mobileUiResources,
  "dashboard-ui-kit": dashboardUiResources,
  "device-mockup": deviceMockupResources,
  "icons": iconsResources,
  "templates": templatesResources,
  "presentations": presentationsResources,
  "fonts": fontsResources,
  "illustrations": illustrationsResources,
  "3d-assets": threeDAssetsResources,
  "branding-mockup": brandingMockupResources,
  "social-media": socialMediaResources,
  "motions": motionsResources,
  "web-design-inspiration": webDesignInspirationResources,
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
  const currentResources = (resources[activeTab] || []).slice().reverse();
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
  }, [handleObserver]);

  const visibleResources = currentResources.slice(0, visibleCount);
  const hasMore = visibleResources.length < currentResources.length;

  return (
    <section id="resource-section" className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-[120px] lg:py-[240px]">
      {/* Title resource */}
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium mb-8 md:mb-20 text-black text-left">Browse <span className="italic">Resources</span></h2>
      {/* Tab resource */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 md:mb-8 scrollbar-hide border-b-0 resource-tab-container">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`px-4 sm:px-6 py-2 text-sm sm:text-md font-medium whitespace-nowrap transition-colors duration-150 rounded-full
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {visibleResources.map((res: Resource, idx: number) => (
          <Link
            key={`${activeTab}-${res.id}-${idx}`}
            href={`/resource/${activeTab}/${res.id}-${res.slug}`}
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