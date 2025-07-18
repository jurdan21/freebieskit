import Image from "next/image";

const images = [
  {
    src: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img1_f1tauz.webp",
    alt: "img 1",
    href: "#", // ganti dengan link yang diinginkan
  },
  {
    src: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img2_omuxkl.webp",
    alt: "img 2",
    href: "#",
  },
  {
    src: "https://res.cloudinary.com/doihq9rxd/image/upload/v1752339647/img3_gr2ez2.webp",
    alt: "img 3",
    href: "#",
  },
];

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center max-w-[1440px] mx-auto pt-16 md:pt-[92px]">
      <div className="flex flex-col gap-8 w-full md:w-3/4 px-4">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-medium leading-tight text-black">
          <span className="italic">Free</span> UI Kits, Mockups,<br />
          Illustrations, and More
        </h1>
        <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-8">
          <p className="text-base sm:text-lg md:text-2xl text-gray-500 max-w-full md:max-w-xl">
            Freebieskit is your all in one library of 100% free design resources curated from trusted platforms.
          </p>
          <span className="text-base sm:text-lg text-black md:ml-auto mt-2 md:mt-0">✴ Curated for Creators</span>
        </div>
      </div>
      <div className="mt-8 md:mt-16 flex flex-col md:flex-row w-full gap-4 md:gap-2 px-4 md:px-0">
        {images.map((img, i) => (
          <div
            key={i}
            className={`relative overflow-hidden min-h-[180px] sm:min-h-[240px] md:min-h-[340px] bg-grey-base aspect-[4/3] md:aspect-[4/1] ${
              i === 2 ? 'md:flex-[1.5]' : 'md:flex-1'
            }`}
          >
            {img.href ? (
              <a href={img.href} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={i === 2}
                />
              </a>
            ) : (
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={i === 2}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 