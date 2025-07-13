import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Footer from "@/components/Footer";
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
        <link rel="icon" href="https://res.cloudinary.com/doihq9rxd/image/upload/v1752429202/Favicon_o1uqdc.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="https://res.cloudinary.com/doihq9rxd/image/upload/v1752429202/Favicon_o1uqdc.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
