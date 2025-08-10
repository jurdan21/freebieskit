import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Debug - FreebiesKit",
  description: "SEO debugging page for FreebiesKit",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DebugSEO() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">SEO Debug Information</h1>
      
      <div className="space-y-6">
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Current URL</h2>
          <p className="font-mono text-sm">https://freebieskit.com/debug-seo</p>
        </div>
        
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Meta Information</h2>
          <ul className="space-y-1 text-sm">
            <li><strong>Title:</strong> SEO Debug - FreebiesKit</li>
            <li><strong>Description:</strong> SEO debugging page for FreebiesKit</li>
            <li><strong>Robots:</strong> noindex, nofollow</li>
          </ul>
        </div>
        
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Important Links</h2>
          <ul className="space-y-1 text-sm">
            <li><a href="/sitemap.xml" className="text-blue-600 hover:underline">Sitemap.xml</a></li>
            <li><a href="/robots.txt" className="text-blue-600 hover:underline">Robots.txt</a></li>
            <li><a href="/" className="text-blue-600 hover:underline">Homepage</a></li>
          </ul>
        </div>
        
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Server Information</h2>
          <p className="text-sm">
            <strong>Timestamp:</strong> {new Date().toISOString()}
          </p>
        </div>
      </div>
    </div>
  );
}