import React from "react";
import Image from "next/image";
import Link from "next/link";

const resourceCategories = [
  { key: "mobile-ui-kit", label: "Mobile UI Kit" },
  { key: "website-ui-kit", label: "Website UI Kit" },
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

const navigation = [
  ["Mobile UI Kit", "Website UI Kit", "Dashboard UI Kit", "Device Mockup", "Icons"],
  ["Templates", "Presentations", "Fonts", "Illustrations", "3D Assets"],
  ["Branding Mockup", "Social Media", "Motions", "Web Design Inspiration", "Design System"]
];
const support = ["Contact", "Information", "Submit Asset"];
const legal = ["Privacy", "Terms"];

function getTabKey(label: string) {
  const found = resourceCategories.find(cat => cat.label === label);
  return found ? found.key : "";
}

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-[120px] pb-8 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 md:gap-0">
          {/* Logo & Navigation */}
          <div className="flex-1 min-w-[180px] mb-8 md:mb-0">
            <div className="flex items-center mb-8 md:mb-10">
              <Image src="/Logo Footer.svg" alt="FreebiesKit - Free Design Assets and UI Kits" width={140} height={32} className="w-[120px] md:w-[180px] h-auto" />
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-20">
              {/* Navigation */}
              <div>
                <div className="text-gray-400 font-medium mb-4 text-lg">Navigation</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-12">
                  {navigation.map((col, i) => (
                    <ul key={i} className="mb-0 md:mb-0 space-y-2">
                      {col.map((item) => (
                        <li key={item}>
                          <Link
                            href={`/?tab=${getTabKey(item)}#resource-section`}
                            className="text-white text-base md:text-lg font-normal leading-8 hover:underline cursor-pointer"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
              {/* Support */}
              <div className="min-w-[120px] mt-8 md:mt-0">
                <div className="text-gray-400 font-medium mb-4 text-lg">Support</div>
                <ul className="space-y-2">
                  {support.map((item) => {
                    if (item === "Information") {
                      return (
                        <li key={item}>
                          <Link href="/information" className="text-white text-lg font-normal leading-8 hover:underline cursor-pointer">{item}</Link>
                        </li>
                      );
                    } else if (item === "Contact") {
                      return (
                        <li key={item}>
                          <a href="mailto:hello@freebieskit.com" className="text-white text-lg font-normal leading-8 hover:underline cursor-pointer">{item}</a>
                        </li>
                      );
                    } else if (item === "Submit Asset") {
                      return (
                        <li key={item}>
                          <a href="https://tally.so/r/wAeBV0" className="text-white text-lg font-normal leading-8 hover:underline cursor-pointer" target="_blank" rel="noopener noreferrer">{item}</a>
                        </li>
                      );
                    } else {
                      return (
                        <li key={item} className="text-white text-lg font-normal leading-8 hover:underline cursor-pointer">{item}</li>
                      );
                    }
                  })}
                </ul>
              </div>
              {/* Legal */}
              <div className="min-w-[100px] mt-8 md:mt-0">
                <div className="text-gray-400 font-medium mb-4 text-lg">Legal</div>
                <ul className="space-y-2">
                  {legal.map((item) => (
                    item === "Privacy" ? (
                      <li key={item}>
                        <Link href="/privacy" className="text-white text-lg font-normal leading-8 hover:underline cursor-pointer">{item}</Link>
                      </li>
                    ) : item === "Terms" ? (
                      <li key={item}>
                        <Link href="/terms" className="text-white text-lg font-normal leading-8 hover:underline cursor-pointer">{item}</Link>
                      </li>
                    ) : (
                      <li key={item} className="text-white text-lg font-normal leading-8 hover:underline cursor-pointer">{item}</li>
                    )
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-10 md:mt-16 text-gray-400 text-base text-left">© 2025 Freebieskit. All rights reserved</div>
      </div>
    </footer>
  );
}