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
  metadataBase: new URL("https://freebieskit.com"),
  alternates: {
    canonical: "https://freebieskit.com",
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
        url: "/og-image.svg",
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
        <meta name="google-site-verification" content="bejPZAYfp_9b7ogV1JyFmfr9yTGuy97F8ViQ3swi614" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Freebieskit",
              "url": "https://freebieskit.com/",
              "description": "Freebieskit is your source for free UI kits, mockups, icons, illustrations, templates, and more. Discover and download high-quality design resources for web, mobile, and creative projects. Curated for designers, developers, and creators."
            })
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
