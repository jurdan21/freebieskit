import { createClient } from '@supabase/supabase-js';
import { Metadata } from 'next';

interface ResourceMetadataParams {
  idSlug: string;
  categorySlug: string;
  categoryDisplayName: string;
  defaultDescription: string;
  keywords: string;
}

export async function generateResourceMetadata({
  idSlug,
  categorySlug,
  categoryDisplayName,
  defaultDescription,
  keywords
}: ResourceMetadataParams): Promise<Metadata> {
  // Extract resource ID from idSlug
  const resourceId = idSlug.split('-')[0];
  
  // Fetch resource data for dynamic metadata
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  
  const { data: category } = await supabase
    .from('categories')
    .select('id')
    .eq('slug', categorySlug)
    .single();
  
  let dynamicTitle = `${categoryDisplayName} - FreebiesKit`;
  let dynamicDescription = defaultDescription;
  let dynamicKeywords = keywords;
  
  if (category) {
    const { data: resource } = await supabase
      .from('resources')
      .select('title, author, overview, platform')
      .eq('category_id', category.id)
      .eq('id', Number(resourceId))
      .single();
    
    if (resource) {
      dynamicTitle = `${resource.title} - ${categoryDisplayName} by ${resource.author} | FreebiesKit`;
      const truncatedOverview = resource.overview.length > 120 
        ? resource.overview.substring(0, 120) + '...' 
        : resource.overview;
      dynamicDescription = `Download ${resource.title} - ${truncatedOverview} Free ${categoryDisplayName.toLowerCase()} for ${resource.platform} by ${resource.author}.`;
      
      // Category-specific keywords for better SEO targeting
      const categorySpecificKeywords: { [key: string]: string[] } = {
        'icons': ['vector', 'svg', 'png', 'outline', 'filled', 'line art', 'symbol'],
        'device-mockup': ['presentation', 'showcase', 'template', 'psd', 'smart object'],
        'website-ui-kit': ['component', 'design system', 'wireframe', 'prototype'],
        'mobile-ui-kit': ['app design', 'mobile app', 'ios', 'android', 'responsive'],
        'dashboard-ui-kit': ['admin panel', 'analytics', 'data visualization', 'chart'],
        'illustrations': ['vector art', 'character', 'flat design', 'isometric'],
        'fonts': ['typography', 'typeface', 'lettering', 'script', 'sans serif'],
        'templates': ['layout', 'design template', 'ready to use', 'customizable'],
        'presentations': ['powerpoint', 'keynote', 'google slides', 'pitch deck'],
        'social-media': ['instagram', 'facebook', 'twitter', 'story template', 'post'],
        'branding-mockup': ['logo presentation', 'brand identity', 'corporate'],
        '3d-assets': ['3d model', 'render', 'blender', 'cinema 4d', 'texture'],
        'motions': ['animation', 'motion graphics', 'after effects', 'lottie'],
        'design-system': ['ui library', 'component library', 'design tokens']
      };
      
      // Generate dynamic keywords based on resource data
      const resourceKeywords = [
        resource.title.toLowerCase().replace(/[^\w\s]/g, '').trim(),
        resource.author.toLowerCase().replace(/[^\w\s]/g, '').trim(),
        resource.platform?.toLowerCase().replace(/[^\w\s]/g, '').trim(),
        categoryDisplayName.toLowerCase(),
        'free',
        'download',
        ...(categorySpecificKeywords[categorySlug] || [])
      ].filter(Boolean);
      
      // Extract meaningful keywords from overview (4+ characters, non-common words)
       const overviewKeywords = resource.overview
         .toLowerCase()
         .replace(/[^\w\s]/g, ' ')
         .split(/\s+/)
         .filter((word: string) => 
           word.length >= 4 && 
           !['this', 'that', 'with', 'from', 'they', 'have', 'will', 'been', 'were', 'said', 'each', 'which', 'their', 'time', 'more', 'very', 'what', 'know', 'just', 'first', 'into', 'over', 'think', 'also', 'your', 'work', 'life', 'only', 'new', 'years', 'way', 'may', 'say', 'come', 'its', 'now', 'find', 'any', 'these', 'give', 'day', 'most', 'us'].includes(word)
         )
         .slice(0, 3);
      
      // Combine all keywords and optimize
       const allKeywords = [...resourceKeywords, ...overviewKeywords, ...keywords.split(', ')]
         .map(keyword => keyword.trim())
         .filter(keyword => keyword.length > 0 && keyword.length <= 25) // Filter out empty and too long keywords
         .filter((keyword, index, array) => array.indexOf(keyword) === index) // Remove duplicates
         .slice(0, 12); // Limit to 12 keywords for optimal meta tag length
       
       dynamicKeywords = allKeywords.join(', ');
    }
  }
  
  return {
    title: dynamicTitle,
    description: dynamicDescription,
    keywords: dynamicKeywords,
    authors: [{ name: "FreebiesKit" }],
    creator: "FreebiesKit",
    publisher: "FreebiesKit",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL("https://freebieskit.com"),
    alternates: {
      canonical: `https://freebieskit.com/resource/${categorySlug}/${idSlug}`,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `https://freebieskit.com/resource/${categorySlug}/${idSlug}`,
      siteName: "FreebiesKit",
      title: dynamicTitle,
      description: dynamicDescription,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: dynamicTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@freebieskit",
      creator: "@freebieskit",
      title: dynamicTitle,
      description: dynamicDescription,
      images: ["/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": dynamicTitle,
        "url": `https://freebieskit.com/resource/${categorySlug}/${idSlug}`,
        "description": dynamicDescription,
        "isPartOf": {
          "@type": "WebSite",
          "name": "FreebiesKit",
          "url": "https://freebieskit.com"
        }
      }),
    },
  };
}