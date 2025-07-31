// Edit file ini untuk mengubah konfigurasi sitemap
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://freebieskit.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*', '/admin/*', '/_next/*'],
  generateIndexSitemap: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
  },
  additionalPaths: async (config) => {
    console.log('🔍 Starting additionalPaths generation...')
    
    const { createClient } = require('@supabase/supabase-js')
    
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )
    
    function slugify(text) {
      return text
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim()
    }
    
    const additionalPaths = []
    
    try {
      console.log('📡 Fetching resources from Supabase...')
      
      // Fetch ALL resources with images - hapus limit 50
      const { data: resources, error } = await supabase
        .from('resources')
        .select(`
          id, 
          title, 
          image, 
          created_at, 
          overview,
          categories!inner(
            slug
          )
        `)
        .not('image', 'is', null)
        .order('created_at', { ascending: false })
      
      if (error) {
        console.error('❌ Supabase error:', error)
        return []
      }
      
      console.log(`✅ Found ${resources?.length || 0} resources`)
      
      if (resources && resources.length > 0) {
        resources.forEach((resource) => {
          const resourceSlug = `${resource.id}-${slugify(resource.title)}`
          const categorySlug = resource.categories?.slug
          const resourcePath = `/resource/${categorySlug}/${resourceSlug}`
          
          console.log(`📄 Added: ${resourcePath}`)
           
           // Only add if image URL exists and categorySlug is valid
           if (resource.image && categorySlug && typeof resource.image === 'string' && resource.image.trim() !== '') {
             const entry = {
               loc: resourcePath,
               changefreq: 'weekly',
               priority: 0.9,
               lastmod: new Date(resource.created_at).toISOString(),
               images: [{
                  loc: resource.image.trim(),
                  title: resource.title || '',
                  caption: resource.overview ? 
                    `${resource.title} - ${resource.overview.substring(0, 150)}${resource.overview.length > 150 ? '...' : ''}` :
                    `Free ${resource.title} for download`
                }],
             }
             
             additionalPaths.push(entry)
           }
        })
      }

      // Tambahkan halaman kategori
      const { data: categories } = await supabase
        .from('categories')
        .select('slug')
      
      if (categories) {
        categories.forEach((category) => {
          additionalPaths.push({
            loc: `/resource/${category.slug}`,
            changefreq: 'weekly',
            priority: 0.8,
            lastmod: new Date().toISOString(),
          })
        })
      }
      
    } catch (error) {
      console.error('❌ Error fetching resources for sitemap:', error)
    }
    
    console.log(`🎯 Total additional paths: ${additionalPaths.length}`)
    return additionalPaths
  },
  transform: async (config, path) => {
    // Custom priority untuk halaman penting
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      }
    }
    // Halaman kategori resource
    if (path.match(/\/resource\/[^/]+$/)) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      }
    }
    // Halaman detail resource
    if (path.match(/\/resource\/[^/]+\/[^/]+$/)) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      }
    }
    // Halaman informasi penting
    if (path === '/information') {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString(),
      }
    }
    // Halaman legal
    if (path === '/privacy' || path === '/terms') {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.5,
        lastmod: new Date().toISOString(),
      }
    }
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    }
  },
}