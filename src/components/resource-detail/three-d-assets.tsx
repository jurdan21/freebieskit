import React from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

const resources = [
  {
    id: 1,
    title: "3D Product Models",
    author: "3DStudio",
    platform: "Blender",
    image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp",
    overview: "High-quality 3D product models with realistic textures and materials. Perfect for e-commerce and product visualization.",
    category: "3D Assets",
    compatibility: "Blender, Maya, 3ds Max",
  },
  {
    id: 2,
    title: "3D Character Models",
    author: "Character3D",
    platform: "Blender",
    image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp",
    overview: "Detailed 3D character models with rigging and animations for game development and visual effects.",
    category: "3D Assets",
    compatibility: "Blender, Unity, Unreal",
  },
];

export default function Detail3DAssets({ id }: { id: string }) {
  const resource = resources.find(r => r.id === Number(id));
  if (!resource) return <div className="py-16 text-center text-gray-500">Resource not found.</div>;
  
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "3D Assets", href: "/resource/3d-assets" }, { label: resource.title }]} />
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
      <a href="#" className="inline-block px-6 py-2 rounded-full bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition">Download Now</a>
    </div>
  );
} 