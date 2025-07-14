import React from "react";

export default function Term() {
  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16 text-black font-inter">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">Terms of Use</h1>
      <div className="text-gray-500 font-medium mb-6 text-sm sm:text-base">Last updated: [14-06-2025]</div>
      <p className="mb-6 text-sm sm:text-base leading-relaxed">
        Welcome to Freebieskit.com, a growing collection of over 1,000 free design assets — including UI kits, mockups, icons, fonts, and illustrations — curated from trusted sources like Figma, Dribbble, Behance, GitHub, and more.
      </p>
      <p className="mb-6 text-sm sm:text-base leading-relaxed">
        By using this website, you agree to the terms below. We&apos;ll keep it simple and clear.
      </p>
      <section className="mb-6">
        <h2 className="text-base sm:text-lg font-semibold mb-2 text-gray-700">1. Using the Freebies</h2>
        <p className="mb-2 text-sm sm:text-base">Everything you see on Freebieskit is free to download. But keep in mind:</p>
        <ul className="list-disc pl-5 sm:pl-6 mb-2 text-sm sm:text-base">
          <li>Each asset comes from different creators and platforms, and follows its own license.</li>
          <li>You&apos;re responsible for checking the original license before using it — especially for commercial work.</li>
          <li>If a license asks for credit, please give it. Creators deserve recognition.</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-base sm:text-lg font-semibold mb-2 text-gray-700">2. Copyright and Ownership</h2>
        <ul className="list-disc pl-5 sm:pl-6 mb-2 text-sm sm:text-base">
          <li>We don&apos;t own the assets listed here (unless clearly stated otherwise).</li>
          <li>Freebieskit is a curated library — we help you discover quality design freebies, but the credit goes to the original creators.</li>
          <li>If you&apos;re a creator and you&apos;d like us to remove or update your work, just email us at <a href="mailto:hello@freebieskit.com" className="text-blue-600 underline">hello@freebieskit.com</a> — we&apos;ll respond quickly.</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-base sm:text-lg font-semibold mb-2 text-gray-700">3. What You Can’t Do</h2>
        <p className="mb-2 text-sm sm:text-base">To keep things fair, here&apos;s what&apos;s not allowed:</p>
        <ul className="list-disc pl-5 sm:pl-6 mb-2 text-sm sm:text-base">
          <li>Don&apos;t resell or redistribute the assets as your own (especially in bundles or marketplaces).</li>
          <li>Don&apos;t use bots or scripts to scrape/download our content in bulk.</li>
          <li>Don&apos;t misuse the site or content for anything illegal or shady.</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-base sm:text-lg font-semibold mb-2 text-gray-700">4. Updates to These Terms</h2>
        <p className="mb-2 text-sm sm:text-base">We may update these terms from time to time — no spammy alerts, just a quiet refresh. Feel free to check back whenever you&apos;d like.</p>
      </section>
    </section>
  );
} 