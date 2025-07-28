import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Footer from "@/components/Footer";
import Script from "next/script";
// import Head from "next/head"; // Dihapus karena tidak digunakan

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Free UI Kits, Mockups, Illustrations, and More",
  description: "Freebieskit is your source for free UI kits, mockups, icons, illustrations, templates, and more. Discover and download high-quality design resources for web, mobile, and creative projects. Curated for designers, developers, and creators.",
  keywords: "free UI kits, mockups, icons, illustrations, design resources, templates, freebies, web design, mobile design, branding mockup, dashboard UI, website templates",
  authors: [{ name: "FreebiesKit Team" }],
  creator: "FreebiesKit",
  publisher: "FreebiesKit",
  metadataBase: new URL("https://freebieskit.com"),
  alternates: {
    canonical: "https://freebieskit.com",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "bejPZAYfp_9b7ogV1JyFmfr9yTGuy97F8ViQ3swi614",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Freebieskit – Free UI Kits, Mockups, Illustrations, and More",
    description: "Download high-quality design resources for your next project. Curated for designers and developers.",
    url: "https://freebieskit.com",
    siteName: "FreebiesKit",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FreebiesKit - Free Design Assets",
      },
    ],
    locale: "en_US",
    type: "website",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="google-site-verification" content="bejPZAYfp_9b7ogV1JyFmfr9yTGuy97F8ViQ3swi614" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/og-image.png" as="image" type="image/png" />
        <link rel="preload" href="https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img1_f1tauz.webp" as="image" type="image/webp" />
        <link rel="preload" href="https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img2_omuxkl.webp" as="image" type="image/webp" />
        <link rel="preload" href="https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img3_gr2ez2.webp" as="image" type="image/webp" />
        <link rel="dns-prefetch" href="//res.cloudinary.com" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "FreebiesKit",
              "alternateName": "Freebieskit",
              "url": "https://freebieskit.com/",
              "description": "The largest curated collection of free design assets including UI kits, mockups, icons, illustrations, templates, and more. Download high-quality design resources for web, mobile, and creative projects.",
              "keywords": "free design assets, UI kits, mockups, icons, illustrations, templates, design resources, freebies",
              "inLanguage": "en-US",
              "copyrightYear": "2024",
              "publisher": {
                "@type": "Organization",
                "name": "FreebiesKit",
                "url": "https://freebieskit.com"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://freebieskit.com/?tab={category_name}#resource-section"
                },
                "query-input": "required name=category_name"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://freebieskit.com/#organization",
                "name": "FreebiesKit",
                "url": "https://freebieskit.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://freebieskit.com/og-image.png",
                  "width": 1200,
                  "height": 630
                },
                "description": "The largest curated platform for free design resources including UI kits, mockups, icons, illustrations, templates, and creative assets for designers and developers worldwide.",
                "foundingDate": "2024",
                "knowsAbout": ["UI Design", "UX Design", "Web Design", "Mobile Design", "Graphic Design", "Design Resources", "Free Assets"],
                "areaServed": "Worldwide",
                "audience": {
                  "@type": "Audience",
                  "audienceType": "Designers, Developers, Creative Professionals"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "url": "https://freebieskit.com/information"
                },
                "sameAs": [
                  "https://twitter.com/freebieskit"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "CollectionPage",
                "name": "Free Design Assets Collection",
                "description": "Curated collection of free design resources including UI kits, mockups, icons, illustrations, and templates.",
                "url": "https://freebieskit.com",
                "mainEntity": {
                  "@type": "ItemList",
                  "name": "Design Resource Categories",
                  "itemListElement": [
                    {"@type": "ListItem", "position": 1, "name": "UI Kits", "url": "https://freebieskit.com/?tab=website-ui-kit"},
                    {"@type": "ListItem", "position": 2, "name": "Mockups", "url": "https://freebieskit.com/?tab=device-mockup"},
                    {"@type": "ListItem", "position": 3, "name": "Icons", "url": "https://freebieskit.com/?tab=icons"},
                    {"@type": "ListItem", "position": 4, "name": "Illustrations", "url": "https://freebieskit.com/?tab=illustrations"},
                    {"@type": "ListItem", "position": 5, "name": "Templates", "url": "https://freebieskit.com/?tab=templates"}
                  ]
                }
              }
            ])
          }}
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-01BNDY8PPE"
          strategy="afterInteractive"
        />
        <Script id="ga-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-01BNDY8PPE');
          `}
        </Script>
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
