import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

const resources = [
  {
    id: 1,
    title: "Admin Dashboard Kit",
    author: "DashboardPro",
    platform: "Figma",
    image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp",
    overview: "Complete admin dashboard UI kit with charts, tables, forms, and analytics components. Perfect for SaaS and admin applications.",
    category: "Dashboard UI Kit",
    compatibility: "Figma, Sketch",
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    author: "DataViz",
    platform: "Figma",
    image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp",
    overview: "Modern analytics dashboard with data visualization components, charts, and interactive elements.",
    category: "Dashboard UI Kit",
    compatibility: "Figma",
  },
  // ... tambahkan data lain sesuai kebutuhan
];

export default function DetailDashboardUI({ id }: { id: string }) {
  const resource = resources.find(r => r.id === Number(id));
  if (!resource) return <div className="py-16 text-center text-gray-500">Resource not found.</div>;
  
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <div className="flex items-start justify-between mb-6">
        <h1 className="text-2xl md:text-3xl font-medium text-black">{resource.title}</h1>
        <div className="text-sm text-gray-500 mt-1">by {resource.author} for {resource.platform}</div>
      </div>
      <Image src={resource.image} alt={resource.title} width={900} height={500} className="rounded-2xl mb-10 w-full object-cover aspect-[16/9]" />
      <div className="mb-8">
        <div className="text-gray-400 font-medium mb-1">Overview</div>
        <div className="text-base text-black leading-relaxed">{resource.overview}</div>
      </div>
      <div className="mb-6">
        <div className="text-gray-400 font-medium mb-1">Category</div>
        <div className="text-base text-black">{resource.category}</div>
      </div>
      <div className="mb-10">
        <div className="text-gray-400 font-medium mb-1">Compatibility</div>
        <div className="text-base text-black">{resource.compatibility}</div>
      </div>
      <Button href="#" size="large">Download Now</Button>
    </div>
  );
} 