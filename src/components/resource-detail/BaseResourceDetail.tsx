"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
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
  category_id: number;
}

interface BaseResourceDetailProps {
  id: string;
  categorySlug: string;
  categoryDisplayName: string;
  buttonText?: string;
  altTextSuffix?: string;
}

export default function BaseResourceDetail({
  id,
  categorySlug,
  categoryDisplayName,
  buttonText = "Download Now",
  altTextSuffix = ""
}: BaseResourceDetailProps) {
  const [resource, setResource] = useState<Resource | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categoryName, setCategoryName] = useState<string>("");

  useEffect(() => {
    async function fetchResource() {
      setLoading(true);
      setError(null);
      
      try {
        // Optimized query with JOIN to get resource and category in one call
        const { data, error } = await supabase
          .from('resources')
          .select(`
            *,
            categories!inner(
              id,
              name,
              slug
            )
          `)
          .eq('categories.slug', categorySlug)
          .eq('id', Number(id))
          .single();

        if (error || !data) {
          setError('Resource not found.');
          setResource(null);
        } else {
          setResource(data);
          setCategoryName(data.categories?.name || categoryDisplayName);
        }
      } catch (err) {
        setError('An error occurred while fetching the resource.');
        setResource(null);
      }
      
      setLoading(false);
    }
    
    fetchResource();
  }, [id, categorySlug, categoryDisplayName]);

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto py-16 px-4">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-6"></div>
          <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="w-full aspect-[16/9] bg-gray-200 rounded-2xl mb-10"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !resource) {
    return (
      <div className="py-16 text-center text-gray-500">
        {error || 'Resource not found.'}
      </div>
    );
  }

  const breadcrumbHref = `/?tab=${categorySlug}#resource-section`;
  const resourceUrl = `https://freebieskit.com/resource/${categorySlug}/${resource.id}`;
  const altText = `${resource.title} - Free ${categoryName}${altTextSuffix} by ${resource.author}`;

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: categoryDisplayName, href: breadcrumbHref },
          { label: resource.title }
        ]}
      />
      
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://freebieskit.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": categoryDisplayName,
                "item": `https://freebieskit.com${breadcrumbHref}`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": resource.title,
                "item": resourceUrl
              }
            ]
          })
        }}
      />
      
      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": resource.title,
            "description": resource.overview,
            "image": {
              "@type": "ImageObject",
              "url": resource.image,
              "contentUrl": resource.image
            },
            "url": resourceUrl,
            "category": categoryName,
            "brand": {
              "@type": "Brand",
              "name": "FreebiesKit"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "FreebiesKit",
              "url": "https://freebieskit.com"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "url": resource.download_link,
              "seller": {
                "@type": "Organization",
                "name": "FreebiesKit"
              }
            },
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Platform",
                "value": resource.platform
              },
              {
                "@type": "PropertyValue",
                "name": "Compatibility",
                "value": resource.compatibility
              },
              {
                "@type": "PropertyValue",
                "name": "Author",
                "value": resource.author
              }
            ],
            "isAccessibleForFree": true,
            "license": "https://creativecommons.org/licenses/by/4.0/"
          })
        }}
      />
      
      <div className="flex items-start justify-between mb-6">
        <h1 className="text-2xl md:text-3xl font-medium text-black">
          {resource.title}
        </h1>
        <div className="text-sm text-gray-500 mt-1">
          by {resource.author} for {resource.platform}
        </div>
      </div>
      
      <Image 
        src={resource.image} 
        alt={altText}
        width={800} 
        height={450} 
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 800px"
        className="rounded-2xl mb-10 w-full object-cover aspect-[16/9]" 
      />
      
      <div className="mb-8">
        <div className="text-gray-400 font-medium mb-1">Overview</div>
        <div className="text-base text-black leading-relaxed">
          {resource.overview}
        </div>
      </div>
      
      <div className="mb-6">
        <div className="text-gray-400 font-medium mb-1">Category</div>
        <div className="text-base text-black">{categoryName}</div>
      </div>
      
      <div className="mb-10">
        <div className="text-gray-400 font-medium mb-1">Compatibility</div>
        <div className="text-base text-black">{resource.compatibility}</div>
      </div>
      
      <a 
        href={resource.download_link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-block px-6 py-2 rounded-full bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
      >
        {buttonText}
      </a>
    </div>
  );
}