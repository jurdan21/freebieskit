import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

const resources = [
  {
    id: 1,
    title: "UI Animation Pack",
    author: "MotionStudio",
    platform: "After Effects",
    image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp",
    overview: "Complete UI animation pack with micro-interactions, transitions, and loading animations for web and mobile apps.",
    category: "Motions",
    compatibility: "After Effects, Lottie",
  },
  {
    id: 2,
    title: "Logo Animation Kit",
    author: "LogoMotion",
    platform: "After Effects",
    image: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img5_uadbh2.webp",
    overview: "Professional logo animation kit with various styles and effects for brand identity projects.",
    category: "Motions",
    compatibility: "After Effects",
  },
];

export default function DetailMotions({ id }: { id: string }) {
  const resource = resources.find(r => r.id === Number(id));
  if (!resource) return <div className="py-16 text-center text-gray-500">Resource not found.</div>;
  
  return (
    <div className="max-w-3xl mx-auto py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="flex items-start justify-between mb-6">
        <h1 className="text-lg sm:text-2xl md:text-3xl font-medium text-black">{resource.title}</h1>
        <div className="text-xs sm:text-sm text-gray-500 mt-1">by {resource.author} for {resource.platform}</div>
      </div>
      <Image src={resource.image} alt={resource.title} width={900} height={500} className="rounded-xl sm:rounded-2xl mb-8 sm:mb-10 w-full object-cover aspect-[4/3] sm:aspect-[16/9]" />
      <div className="mb-8">
        <div className="text-gray-400 font-medium mb-1">Overview</div>
        <div className="text-sm sm:text-base text-black leading-relaxed">{resource.overview}</div>
      </div>
      <div className="mb-6">
        <div className="text-gray-400 font-medium mb-1">Category</div>
        <div className="text-sm sm:text-base text-black">{resource.category}</div>
      </div>
      <div className="mb-10">
        <div className="text-gray-400 font-medium mb-1">Compatibility</div>
        <div className="text-sm sm:text-base text-black">{resource.compatibility}</div>
      </div>
      <Button href="#" size="large">Download Now</Button>
    </div>
  );
} 