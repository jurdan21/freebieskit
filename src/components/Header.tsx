'use client';

import React, { useState, useRef, useEffect } from "react";
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
  { key: "web-design-inspiration", label: "Web Design Inspiration" },
  { key: "design-system", label: "Design System" },
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
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-4 md:px-10 py-4 bg-white font-inter border-b border-gray-200 relative">
      {/* Logo + Navigation Container */}
      <div className="flex items-center gap-[60px]">
        <Link href="/" className="flex items-center gap-2" style={{ color: "var(--color-black-base)", fontWeight: 400 }}>
          <Image src="/Logo header.svg" alt="FreebiesKit - Free Design Assets and UI Kits" width={128} height={32} priority />
        </Link>
      </div>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        {/* Free Resource Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            className="flex items-center gap-2 font-inter text-description transition-all duration-200 hover:text-blue-600 group"
            style={{ color: "var(--color-black-base)", fontWeight: 400 }}
            onClick={() => setOpen((v) => !v)}
          >
            Free Resource
            <svg 
              width="16" 
              height="16" 
              fill="none" 
              viewBox="0 0 24 24"
              className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            >
              <path stroke="currentColor" strokeWidth="2" d="M6 9l6 6 6-6"/>
            </svg>
          </button>
          {open && menu[0].dropdown && (
            <div className="absolute left-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-gray-100 z-10 overflow-hidden">
              <div className="py-2">
                {menu[0].dropdown.map((item) => (
                  <Link
                    key={item.label}
                    href={`/?tab=${resourceCategories.find(cat => cat.label === item.label)?.key}#resource-section`}
                    className="block px-4 py-3 text-sm hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 font-inter text-description group/item"
                    style={{ color: "var(--color-black-base)", fontWeight: 400 }}
                    onClick={() => setOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.label}</span>
                      <svg 
                        width="12" 
                        height="12" 
                        fill="none" 
                        viewBox="0 0 24 24"
                        className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"
                      >
                        <path stroke="currentColor" strokeWidth="2" d="M9 18l6-6-6-6"/>
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* Information */}
        <Link href="/information" className="font-inter text-description transition-all duration-200 hover:text-blue-600" style={{ color: "var(--color-black-base)", fontWeight: 400 }}>
          Information
        </Link>
        {/* CTA */}
        <Button href="https://tally.so/r/wAeBV0" className="ml-4" size="small" target="_blank" rel="noopener noreferrer">Submit Asset</Button>
      </nav>
      {/* Hamburger for mobile */}
      <button 
        className="md:hidden p-2 ml-auto relative z-50" 
        onClick={() => setMobileNav((v) => !v)} 
        aria-label="Open menu"
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${mobileNav ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
          <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${mobileNav ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${mobileNav ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
        </div>
      </button>
      
      {/* Mobile Navigation Overlay */}
      {mobileNav && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300" 
          onClick={() => setMobileNav(false)} 
        />
      )}
      
      {/* Mobile Navigation Sidebar */}
      <nav className={`fixed top-0 right-0 z-50 h-full w-80 bg-white shadow-2xl flex flex-col transform transition-all duration-300 ease-out md:hidden ${
        mobileNav ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <Image 
              src="/Logo header.svg" 
              alt="FreebiesKit - Free Design Assets and UI Kits" 
              width={100} 
              height={25} 
            />
          </div>
          <button 
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200" 
            onClick={() => setMobileNav(false)} 
            aria-label="Close menu"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        
        {/* Navigation Items */}
        <div className="flex-1 px-6 py-8 space-y-6">
          {/* Free Resource Dropdown */}
          <div className="space-y-3">
            <button
              className="flex items-center justify-between w-full p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 group"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="font-medium text-gray-900">Free Resource</span>
              <svg 
                width="16" 
                height="16" 
                fill="none" 
                viewBox="0 0 24 24"
                className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              >
                <path stroke="currentColor" strokeWidth="2" d="M6 9l6 6 6-6"/>
              </svg>
            </button>
            
            {open && menu[0].dropdown && (
              <div className="space-y-1 pl-4">
                {menu[0].dropdown.map((item) => (
                  <Link
                    key={item.label}
                    href={`/?tab=${resourceCategories.find(cat => cat.label === item.label)?.key}#resource-section`}
                    className="block p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 text-sm text-gray-600"
                    onClick={() => {
                      setMobileNav(false);
                      setOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          {/* Information Link */}
          <Link 
            href="/information" 
            className="block p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 text-gray-900 font-medium"
            onClick={() => setMobileNav(false)}
          >
            Information
          </Link>
        </div>
        
        {/* Footer */}
        <div className="p-6 border-t border-gray-100">
          <a 
            href="https://tally.so/r/wAeBV0" 
            className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 text-center block" 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={() => setMobileNav(false)}
          >
            Submit Asset
          </a>
        </div>
      </nav>
    </header>
  );
}