import React from "react";

export default function Privacy() {
  return (
    <>
      {/* Hapus Head component karena sudah menggunakan Next.js Metadata API */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16 text-black font-inter">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">Privacy Policy</h1>
      <div className="text-gray-500 font-medium mb-6 text-sm sm:text-base">Last updated: [14-06-2025]</div>
      <p className="mb-6 text-sm sm:text-base leading-relaxed">
        Freebieskit.com values and safeguards user privacy. This policy explains how we collect, use, and protect your information when you access this site.
      </p>
      <section className="mb-6">
        <h2 className="text-base sm:text-lg font-semibold mb-2 text-gray-700">1. What We Collect</h2>
        <p className="mb-2 text-sm sm:text-base">We only collect what we need to make the site better:</p>
        <ul className="list-disc pl-5 sm:pl-6 mb-2 text-sm sm:text-base">
          <li>Basic technical info like IP address, browser type, time spent on the site (via analytics tools)</li>
          <li>Your email — only if you voluntarily subscribe to our newsletter</li>
        </ul>
        <p className="mb-2">No tracking across the internet, no creepy stuff.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-base sm:text-lg font-semibold mb-2 text-gray-700">2. How We Use It</h2>
        <p className="mb-2 text-sm sm:text-base">We use your data to:</p>
        <ul className="list-disc pl-5 sm:pl-6 mb-2 text-sm sm:text-base">
          <li>Improve your experience and optimize the website</li>
          <li>Send occasional updates on new free design assets (if you subscribed)</li>
          <li>That’s it. We never sell or share your data with anyone.</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-base sm:text-lg font-semibold mb-2 text-gray-700">3. Cookies</h2>
        <p className="mb-2 text-sm sm:text-base">Yes, we use cookies — the digital kind, not the chocolate chip ones:</p>
        <ul className="list-disc pl-5 sm:pl-6 mb-2 text-sm sm:text-base">
          <li>Analytics tools help us understand what’s working and what’s not</li>
          <li>You can disable cookies anytime in your browser settings</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-base sm:text-lg font-semibold mb-2 text-gray-700">4. External Links</h2>
        <p className="mb-2 text-sm sm:text-base">Some assets link to third-party platforms like Figma, GitHub, or Dribbble. Once you leave Freebieskit, we can’t control how those sites handle your data — so please read their policies too.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-base sm:text-lg font-semibold mb-2 text-gray-700">5. Your Rights</h2>
        <p className="mb-2 text-sm sm:text-base">You’re in control. You can:</p>
        <ul className="list-disc pl-5 sm:pl-6 mb-2 text-sm sm:text-base">
          <li>Ask what data we have about you</li>
          <li>Request to update or delete your data</li>
          <li>Unsubscribe anytime, no questions asked</li>
        </ul>
        <p className="mb-2 text-sm sm:text-base">Just email us at <a href="mailto:hello@freebieskit.com" className="text-blue-600 underline">hello@freebieskit.com</a> and we’ll help you out.</p>
      </section>
    </section>
    </>
  );
}