import React from "react";

export default function Information() {
  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16 text-black font-inter">
      <h1 className="text-3xl md:text-4xl font-semibold mb-8">Information</h1>
      <section className="mb-8 md:mb-12">
        <h2 className="text-xl font-medium mb-2">About</h2>
        <p className="mb-4 text-sm sm:text-base leading-relaxed">
          Freebieskit.com is a curated platform that helps creators discover and download over 1,000 free design assets including UI kits, mockups, fonts, icons, illustrations, and more all in one place.
        </p>
        <p className="mb-4 text-base leading-relaxed">
          We started Freebieskit with a simple question:
        </p>
        <blockquote className="bg-gray-100 rounded-lg px-4 sm:px-6 py-3 sm:py-4 mb-4 text-sm sm:text-base italic border-l-4 border-gray-300">
          “Why does finding good free design assets still feel like a scavenger hunt?”
        </blockquote>
        <p className="mb-4 text-base leading-relaxed">
          As designers and developers, we were tired of clicking through outdated blogs, saving scattered Figma links, and digging through noisy marketplaces all just to find something usable and free. So we built the site we wished existed.<br/>
          Freebieskit is a clean, fast, and curated library of high-quality, free design resources gathered from platforms we trust like Figma, Dribbble, Behance, GitHub, and the design community itself.
        </p>
        <p className="mb-4 text-base leading-relaxed">What you&apos;ll find here:</p>
        <ul className="list-disc pl-5 sm:pl-6 mb-4 text-sm sm:text-base leading-relaxed">
          <li>UI Kits for websites, dashboards, and mobile apps</li>
          <li>Device Mockups for showcasing your work</li>
          <li>Illustrations, icons, and 3D assets to elevate your visuals</li>
          <li>Fonts, social media templates, and even motion files</li>
          <li>Plus curated web design inspiration because sometimes, you just need a spark</li>
        </ul>
        <p className="mb-4 text-base leading-relaxed">
          All assets are clearly categorized, properly licensed, and ready to use — no login, no spam, no confusion.
        </p>
        <p className="mb-4 text-base leading-relaxed">We built Freebieskit to:</p>
        <ul className="list-disc pl-5 sm:pl-6 mb-4 text-sm sm:text-base leading-relaxed">
          <li>Save creators time</li>
          <li>Keep great resources free</li>
          <li>Promote clean curation over clutter</li>
          <li>Credit creators fairly and transparently</li>
        </ul>
        <p className="mb-4 text-base leading-relaxed">
          Whether you&apos;re a freelance designer, indie maker, student, startup team, or someone just getting started, we hope Freebieskit helps you spend less time hunting and more time building.<br/>
          Thanks for being here. If you have ideas, suggestions, or just want to say hi <a href="mailto:hello@freebieskit.com" className="text-blue-600 underline">reach out anytime</a>.
        </p>
      </section>
      
      <section className="mb-8 md:mb-12">
        <h2 className="text-xl font-medium mb-2">Disclaimer on Asset Ownership and Distribution</h2>
        <div className="bg-gray-100 rounded-lg px-4 sm:px-6 py-3 sm:py-4 mb-4 text-sm sm:text-base border-l-4 border-gray-300">
          <p className="mb-4 leading-relaxed">
            Please note that Freebieskit does not sell or redistribute any design assets. Our platform solely acts as a curated directory to help promote and showcase high-quality, free design resources created by the community.
          </p>
          <p className="mb-4 leading-relaxed">
            All assets featured on Freebieskit are directly linked to the original source — whether that's Figma Community, your website, or another trusted platform. We do not host or claim ownership over any files unless explicitly stated.
          </p>
          <p className="mb-4 leading-relaxed">
            If you are the original creator of a listed asset and would prefer it not to be showcased on Freebieskit, simply reach out to our team at <a href="mailto:hello@freebieskit.com" className="text-blue-600 underline">hello@freebieskit.com</a>, and we'll promptly remove it from our site.
          </p>
          <p className="leading-relaxed">
            We respect creators and their rights, and aim to support visibility — not interfere with ownership.
          </p>
        </div>
      </section>
      
      <section className="mb-8 md:mb-12">
        <h2 className="text-xl font-medium mb-2">Sponsorships</h2>
        <p className="mb-4 text-base leading-relaxed">
          Freebieskit reaches thousands of visitors every month from designers and developers to digital creators, small business owners, and creative teams.<br/>
          We offer a simple, high-visibility sponsorship opportunity for brands across any sector — as long as your message is relevant and respectful to our audience.
        </p>
        <p className="mb-4 text-base leading-relaxed">
          We keep things clean and clutter-free. No popups. No spam. Just two placements that work:
        </p>
        <ul className="list-disc pl-5 sm:pl-6 mb-4 text-sm sm:text-base leading-relaxed">
          <li>Homepage banner – the most visible space on the site</li>
          <li>Featured placement in the resource list – seamlessly integrated with curated content</li>
        </ul>
        <p className="mb-4 text-base leading-relaxed">We&apos;ve partnered with:</p>
        <ul className="list-disc pl-5 sm:pl-6 mb-4 text-sm sm:text-base leading-relaxed">
          <li>Digital products & tools</li>
          <li>Financial, lifestyle, and productivity services</li>
          <li>SaaS companies, online communities, and brand campaigns</li>
          <li>Big and small businesses alike</li>
        </ul>
        <p className="mb-4 text-base leading-relaxed">
          If you want to promote something with clarity and authenticity, let&apos;s talk.<br/>
          Email us at <a href="mailto:hello@freebieskit.com" className="text-blue-600 underline">hello@freebieskit.com</a> to get our latest rates and sponsor availability.<br/>
          Limited spots. Audience-first. No distractions.
        </p>
        <p className="mb-2 text-base leading-relaxed">
          Promote your brand, product, or service to thousands of creators, professionals, and digital builders through clean and contextual sponsorship placements on Freebieskit.com.
        </p>
      </section>
    </section>
  );
} 