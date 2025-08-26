// Pastikan middleware tidak menyebabkan redirect loop
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Jangan redirect jika sudah di root
  if (request.nextUrl.pathname === '/') {
    return NextResponse.next()
  }
  
  // Handle trailing slash
  if (request.nextUrl.pathname.endsWith('/') && request.nextUrl.pathname !== '/') {
    const url = request.nextUrl.clone()
    url.pathname = url.pathname.slice(0, -1)
    return NextResponse.redirect(url, 301)
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}