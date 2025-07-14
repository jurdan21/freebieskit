'use client';

import React from "react";
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
  const [open, setOpen] = React.useState(false);
  return (
    <header className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-10 py-4 bg-white font-inter border-b border-gray-200">
      {/* Logo + Navigation Container */}
      <div className="flex items-center gap-[60px]">
        <Link href="/" className="flex items-center gap-2" style={{ color: "var(--color-black-base)", fontWeight: 400 }}>
          <Image src="https://res.cloudinary.com/doihq9rxd/image/upload/v1752339664/Logo_slhoff.svg" alt="Freebieskit Logo" width={128} height={32} />
        </Link>
        {/* Navigation */}
        <nav className="flex items-center gap-6">
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
        </nav>
      </div>
      {/* CTA */}
      <Button href="mailto:hello@freebieskit.com" className="ml-4" size="small">Submit Asset</Button>
    </header>
  );
} 