'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

const resourceCategories = [
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
];

const menu = [
  {
    label: "Free Resource",
    dropdown: resourceCategories.map(cat => ({
      label: cat.label,
      href: `#resource-section?tab=${cat.key}`
    })),
  },
  { label: "Information", href: "#" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <header className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-4 md:px-10 py-4 bg-white font-inter border-b border-gray-200 relative">
      {/* Logo + Navigation Container */}
      <div className="flex items-center gap-[60px]">
        <Link href="/" className="flex items-center gap-2" style={{ color: "var(--color-black-base)", fontWeight: 400 }}>
          <Image src="https://res.cloudinary.com/doihq9rxd/image/upload/v1752339664/Logo_slhoff.svg" alt="Freebieskit Logo" width={128} height={32} />
        </Link>
      </div>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        {/* Free Resource Dropdown */}
        <div className="relative">
          <button
            className="flex items-center gap-1 font-inter text-description transition"
            style={{ color: "var(--color-black-base)", fontWeight: 400 }}
            onClick={() => setOpen((v) => !v)}
            onBlur={() => setTimeout(() => setOpen(false), 150)}
          >
            Free Resource
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M6 9l6 6 6-6"/></svg>
          </button>
          {open && menu[0].dropdown && (
            <div className="absolute left-0 mt-2 w-40 bg-white rounded shadow-lg z-10 animate-fade-in">
              {menu[0].dropdown.map((item) => (
                <Link
                  key={item.label}
                  href={`/?tab=${resourceCategories.find(cat => cat.label === item.label)?.key}#resource-section`}
                  className="block px-4 py-2 text-sm hover:bg-gray-100 transition font-inter text-description"
                  style={{ color: "var(--color-black-base)", fontWeight: 400 }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
        {/* Information */}
        <Link href="/information" className="font-inter text-description transition" style={{ color: "var(--color-black-base)", fontWeight: 400 }}>
          Information
        </Link>
        {/* CTA */}
        <Button href="mailto:hello@freebieskit.com" className="ml-4" size="small">Submit Asset</Button>
      </nav>
      {/* Hamburger for mobile */}
      <button className="md:hidden p-2 ml-auto" onClick={() => setMobileNav((v) => !v)} aria-label="Open menu">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
      {/* Mobile Navigation Overlay */}
      {mobileNav && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-40" onClick={() => setMobileNav(false)} />
      )}
      <nav className={`fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-lg flex flex-col gap-6 p-8 transform transition-transform duration-300 md:hidden ${mobileNav ? 'translate-x-0' : 'translate-x-full'}`}>
        <button className="self-end mb-8" onClick={() => setMobileNav(false)} aria-label="Close menu">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
        <div className="flex flex-col gap-4">
          <div className="relative">
            <button
              className="flex items-center gap-1 font-inter text-description transition"
              style={{ color: "var(--color-black-base)", fontWeight: 400 }}
              onClick={() => setOpen((v) => !v)}
            >
              Free Resource
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M6 9l6 6 6-6"/></svg>
            </button>
            {open && menu[0].dropdown && (
              <div className="absolute left-0 mt-2 w-40 bg-white rounded shadow-lg z-50 animate-fade-in">
                {menu[0].dropdown.map((item) => (
                  <Link
                    key={item.label}
                    href={`/?tab=${resourceCategories.find(cat => cat.label === item.label)?.key}#resource-section`}
                    className="block px-4 py-2 text-sm hover:bg-gray-100 transition font-inter text-description"
                    style={{ color: "var(--color-black-base)", fontWeight: 400 }}
                    onClick={() => setMobileNav(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/information" className="font-inter text-description transition" style={{ color: "var(--color-black-base)", fontWeight: 400 }} onClick={() => setMobileNav(false)}>
            Information
          </Link>
          <a href="mailto:hello@freebieskit.com" className="w-full px-5 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium shadow hover:from-blue-600 hover:to-blue-800 transition text-center block" onClick={() => setMobileNav(false)}>Submit Asset</a>
        </div>
      </nav>
    </header>
  );
} 