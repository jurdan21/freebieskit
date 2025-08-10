import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  // Performance headers - Optimized for better indexing
  if (request.nextUrl.pathname.startsWith('/_next/static/')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  } else if (request.nextUrl.pathname === '/sitemap.xml' || request.nextUrl.pathname.startsWith('/sitemap-')) {
    // Sitemap files should be cached but allow revalidation for search engines
    response.headers.set('Cache-Control', 'public, max-age=3600, must-revalidate');
  } else if (request.nextUrl.pathname === '/robots.txt') {
    // Robots.txt should be cached but allow revalidation
    response.headers.set('Cache-Control', 'public, max-age=3600, must-revalidate');
  } else {
    // Regular pages - shorter cache for better indexing
    response.headers.set('Cache-Control', 'public, max-age=1800, must-revalidate');
  }
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};