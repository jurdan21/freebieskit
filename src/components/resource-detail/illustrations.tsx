import React from "react";
import Image from "next/image";

const resources = [
  {
    id: 1,
    title: "Business Illustration Pack",
    author: "IllustrationStudio",
    platform: "Figma",
    image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp",
    overview: "Professional business illustration pack with modern style, perfect for corporate websites and presentations.",
    category: "Illustrations",
    compatibility: "Figma, SVG, PNG",
  },
  {
    id: 2,
    title: "Character Illustration Set",
    author: "CharacterDesign",
    platform: "Figma",
    image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp",
    overview: "Cute character illustration set with different poses, expressions, and scenarios for various projects.",
    category: "Illustrations",
    compatibility: "Figma",
  },
];

export default function DetailIllustrations({ id }: { id: string }) {
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
      <a href="#" className="inline-block px-6 py-2 rounded-full bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition">Download Now</a>
    </div>
  );
} 