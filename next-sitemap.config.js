const { createClient } = require('@supabase/supabase-js')

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://freebieskit.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    // HAPUS bagian additionalSitemaps yang menyebabkan circular reference
    // additionalSitemaps: [
    //   'https://freebieskit.com/sitemap.xml',
    // ],
  },
  
  additionalPaths: async (config) => {
    // Validasi environment variables
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.warn('⚠️ Missing Supabase environment variables - skipping dynamic sitemap generation')
      return []
    }
    
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )
    
    // Fungsi slugify yang robust
    function slugify(text) {
      if (!text || typeof text !== 'string') return ''
      return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '')
    }

    // Validasi data resource
    function isValidResource(resource) {
      return (
        resource &&
        resource.id &&
        resource.title &&
        typeof resource.title === 'string' &&
        resource.title.trim().length > 0 &&
        resource.categories &&
        resource.categories.slug &&
        typeof resource.categories.slug === 'string' &&
        resource.created_at
      )
    }

    const additionalPaths = []
    
    try {
      console.log('📡 Fetching resources from Supabase...')
      
      const { data: resources, error } = await supabase
        .from('resources')
        .select(`
          id, 
          title, 
          created_at,
          categories!inner(
            slug
          )
        `)
        .not('title', 'is', null)
        .not('title', 'eq', '')
        .order('created_at', { ascending: false })
      
      if (error) {
        console.error('❌ Supabase error:', error.message)
        return []
      }
      
      if (!resources || !Array.isArray(resources)) {
        console.warn('⚠️ No valid resources data received')
        return []
      }
      
      console.log(`✅ Found ${resources.length} resources`)
      
      let validCount = 0
      let invalidCount = 0
      
      resources.forEach((resource, index) => {
        // Validasi resource
        if (!isValidResource(resource)) {
          console.warn(`⚠️ Invalid resource at index ${index}:`, {
            id: resource?.id,
            title: resource?.title,
            categorySlug: resource?.categories?.slug
          })
          invalidCount++
          return
        }
        
        const resourceSlug = `${resource.id}-${slugify(resource.title)}`
        const categorySlug = resource.categories.slug
        const resourcePath = `/resource/${categorySlug}/${resourceSlug}`
        
        // Validasi final path
        if (!resourceSlug || resourceSlug === `${resource.id}-`) {
          console.warn(`⚠️ Invalid slug generated for resource ${resource.id}: "${resource.title}"`)
          invalidCount++
          return
        }
        
        // Buat entry sitemap yang bersih (tanpa image untuk menghindari masalah)
        const entry = {
          loc: resourcePath,
          changefreq: 'weekly',
          priority: 0.9,
          lastmod: new Date(resource.created_at).toISOString(),
        }
        
        additionalPaths.push(entry)
        validCount++
        
        if ((index + 1) % 50 === 0) {
          console.log(`📊 Processed ${index + 1}/${resources.length} resources...`)
        }
      })
      
      console.log(`\n📊 Final Summary:`)
      console.log(`   ✅ Valid entries: ${validCount}`)
      console.log(`   ❌ Invalid entries: ${invalidCount}`)
      console.log(`   🎯 Total sitemap entries: ${additionalPaths.length}`)
      
    } catch (error) {
      console.error('❌ Error fetching resources for sitemap:', error.message)
      console.error('Stack trace:', error.stack)
      return []
    }
    
    return additionalPaths
  },
  
  transform: async (config, path) => {
    // Validasi path
    if (!path || typeof path !== 'string') {
      return null
    }
    
    // Homepage - prioritas tertinggi
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      }
    }
    
    // Halaman detail resource - prioritas tinggi
    if (path.match(/^\/resource\/[^/]+\/[^/]+$/)) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      }
    }
    
    // Halaman informasi - prioritas sedang
    if (path === '/information') {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString(),
      }
    }
    
    // Halaman legal - prioritas rendah
    if (path === '/privacy' || path === '/terms') {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.5,
        lastmod: new Date().toISOString(),
      }
    }
    
    // Default untuk halaman lain
    return {
      loc: path,
      changefreq: config.changefreq || 'weekly',
      priority: config.priority || 0.7,
      lastmod: new Date().toISOString(),
    }
  },
  
  // Exclude paths yang tidak perlu - DIPERBAIKI
  exclude: [
    '/api/*',
    '/_next/*',
    '/admin/*',
    '/dashboard/*',
    '/debug-seo',      // TAMBAHKAN INI
    '/debug-seo/*',    // TAMBAHKAN INI
    '*.json',
    '*.xml',
  ],
  
  // Additional options untuk optimasi
  generateIndexSitemap: true,
  outDir: './public',
}