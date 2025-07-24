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
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Favicon multi-size dan Apple Touch Icon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        {/* Hapus semua link favicon eksternal, biarkan Next.js ambil favicon.ico dari /public */}
        <meta name="google-site-verification" content="bejPZAYfp_9b7ogV1JyFmfr9yTGuy97F8ViQ3swi614" />
        <meta name="description" content="Freebieskit is your source for free UI kits, mockups, icons, illustrations, templates, and more. Discover and download high-quality design resources for web, mobile, and creative projects. Curated for designers, developers, and creators." />
        <meta property="og:title" content="Freebieskit – Free UI Kits, Mockups, Illustrations, and More" />
        <meta property="og:description" content="Download high-quality design resources for your next project. Curated for designers and developers." />
        <meta property="og:image" content="https://res.cloudinary.com/doihq9rxd/image/upload/v1752339664/Logo_slhoff.svg" />
        <meta property="og:url" content="https://freebieskit.com/" />
        <meta property="og:type" content="website" />
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
