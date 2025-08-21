#!/usr/bin/env tsx

/**
 * Dynamic Sitemap Generation Script
 * Generates prioritized sitemaps for categories, filters, and products
 * Run via: npm run build:sitemap
 */

import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { genders, typesByGender, filterOptions } from '../src/data/islamic-taxonomy';
import { sampleProducts } from '../src/data/products';
import { FILTER_SEO_CONFIG } from '../src/data/filter-seo-config';
import { getHighValueFilterUrls } from '../src/data/seo-keywords';

const BASE_URL = process.env.BASE_URL || 'https://hidayyah.com';
const PUBLIC_DIR = join(process.cwd(), 'public');

// Priority mapping for SEO importance
const PRIORITIES = {
  homepage: '1.0',
  mainCategories: '1.0',
  highValueFilters: '0.7',
  stylePages: '0.6',
  products: '0.6',
  popularFilters: '0.5',
  paginatedPages: '0.4'
};

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: string;
}

function generateSitemapXML(urls: SitemapUrl[]): string {
  const header = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  
  const urlElements = urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('');
  
  return header + urlElements + '\n</urlset>';
}

function generateMainSitemap(): SitemapUrl[] {
  const today = new Date().toISOString().split('T')[0];
  const urls: SitemapUrl[] = [];

  // Homepage
  urls.push({
    loc: BASE_URL,
    lastmod: today,
    changefreq: 'daily',
    priority: PRIORITIES.homepage
  });

  // Blog pages
  urls.push({
    loc: `${BASE_URL}/blog`,
    lastmod: today,
    changefreq: 'weekly',
    priority: PRIORITIES.mainCategories
  });

  urls.push({
    loc: `${BASE_URL}/blog/hijab-style-guide`,
    lastmod: today,
    changefreq: 'monthly',
    priority: PRIORITIES.stylePages
  });

  urls.push({
    loc: `${BASE_URL}/blog/what-is-an-abaya`,
    lastmod: today,
    changefreq: 'monthly',
    priority: PRIORITIES.stylePages
  });

  urls.push({
    loc: `${BASE_URL}/blog/what-do-muslim-men-wear`,
    lastmod: today,
    changefreq: 'monthly',
    priority: PRIORITIES.stylePages
  });

  // Essential pages
  const essentialPages = ['/about', '/contact', '/privacy', '/terms'];
  essentialPages.forEach(page => {
    urls.push({
      loc: `${BASE_URL}${page}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.8'
    });
  });

  // Shop pages (always include, but content varies based on VITE_BLOG_FIRST)
  urls.push({
    loc: `${BASE_URL}/shop`,
    lastmod: today,
    changefreq: 'monthly',
    priority: '0.8'
  });

  urls.push({
    loc: `${BASE_URL}/shop-coming-soon`,
    lastmod: today,
    changefreq: 'monthly',
    priority: '0.7'
  });

  // Skip product category pages if blog-first mode
  if (process.env.VITE_BLOG_FIRST !== 'true') {
    genders.forEach(gender => {
      typesByGender[gender.id].forEach(type => {
        urls.push({
          loc: `${BASE_URL}/${gender.id}/${type.id}`,
          lastmod: today,
          changefreq: 'weekly',
          priority: PRIORITIES.mainCategories
        });
      });
    });
  }

  return urls;
}

function generateFilterSitemap(): SitemapUrl[] {
  const today = new Date().toISOString().split('T')[0];
  const urls: SitemapUrl[] = [];

  // Skip filter pages if blog-first mode
  if (process.env.VITE_BLOG_FIRST === 'true') {
    return urls;
  }

  // Add high-value filter URLs from SEO keywords mapping (highest priority)
  const highValueUrls = getHighValueFilterUrls();
  highValueUrls.forEach(urlData => {
    const filterSlug = `${urlData.filterAttribute}-${urlData.filterValue}`;
    urls.push({
      loc: `${BASE_URL}/${urlData.gender}/${urlData.category}/f/${filterSlug}`,
      lastmod: today,
      changefreq: 'weekly',
      priority: PRIORITIES.highValueFilters
    });
  });

  // Style pages (medium-high priority)
  genders.forEach(gender => {
    typesByGender[gender.id].forEach(type => {
      type.styles.forEach(style => {
        const styleSlug = style.toLowerCase().replace(/\s+/g, '-');
        urls.push({
          loc: `${BASE_URL}/${gender.id}/${type.id}/${styleSlug}`,
          lastmod: today,
          changefreq: 'weekly',
          priority: PRIORITIES.stylePages
        });
      });
    });
  });

  // Additional valuable filter combinations for broader coverage
  const additionalFilters = [
    { attribute: 'color', values: ['White', 'Navy', 'Beige'] },
    { attribute: 'fabric', values: ['Cotton', 'Chiffon'] },
    { attribute: 'occasion', values: ['Everyday', 'Formal'] }
  ];

  genders.forEach(gender => {
    typesByGender[gender.id].forEach(type => {
      additionalFilters.forEach(({ attribute, values }) => {
        if (FILTER_SEO_CONFIG[attribute]?.indexable) {
          values.forEach(value => {
            const filterSlug = `${attribute}-${value.toLowerCase().replace(/\s+/g, '-')}`;
            urls.push({
              loc: `${BASE_URL}/${gender.id}/${type.id}/f/${filterSlug}`,
              lastmod: today,
              changefreq: 'monthly',
              priority: PRIORITIES.popularFilters
            });
          });
        }
      });
    });
  });

  return urls;
}

function generateProductSitemap(): SitemapUrl[] {
  const today = new Date().toISOString().split('T')[0];
  
  // Skip product pages if blog-first mode
  if (process.env.VITE_BLOG_FIRST === 'true') {
    return [];
  }
  
  return sampleProducts.map(product => ({
    loc: `${BASE_URL}/product/${product.id}`,
    lastmod: today,
    changefreq: 'weekly' as const,
    priority: PRIORITIES.products
  }));
}

function generateSitemapIndex(): string {
  const today = new Date().toISOString().split('T')[0];
  
  if (process.env.VITE_BLOG_FIRST === 'true') {
    return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemap-main.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>`;
  }
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemap-main.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-filters.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-products.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>`;
}

async function main() {
  console.log('🗺️  Generating strategic SEO sitemaps...');

  // Ensure public directory exists
  mkdirSync(PUBLIC_DIR, { recursive: true });

  const mainUrls = generateMainSitemap();
  
  if (process.env.VITE_BLOG_FIRST === 'true') {
    console.log('📝 Blog-first mode: generating blog-only sitemap');
    
    // In blog-first mode, include all main pages and blog URLs
    const blogOnlyUrls = mainUrls.filter(url => 
      url.loc.includes('/blog') || 
      url.loc.includes('/about') ||
      url.loc.includes('/contact') ||
      url.loc.includes('/privacy') ||
      url.loc.includes('/terms') ||
      url.loc.includes('/shop') ||
      url.loc === BASE_URL || 
      url.loc === `${BASE_URL}/`
    );

    writeFileSync(
      join(PUBLIC_DIR, 'sitemap.xml'),
      generateSitemapXML(blogOnlyUrls)
    );

    console.log(`✅ Generated blog-only sitemap: ${blogOnlyUrls.length} URLs`);
  } else {
    console.log('🛍️  Full mode: generating complete sitemaps');
    
    const filterUrls = generateFilterSitemap();
    const productUrls = generateProductSitemap();

    // Write individual sitemaps
    writeFileSync(
      join(PUBLIC_DIR, 'sitemap-main.xml'),
      generateSitemapXML(mainUrls)
    );
    
    writeFileSync(
      join(PUBLIC_DIR, 'sitemap-filters.xml'),
      generateSitemapXML(filterUrls)
    );
    
    writeFileSync(
      join(PUBLIC_DIR, 'sitemap-products.xml'),
      generateSitemapXML(productUrls)
    );

    // Generate sitemap index
    writeFileSync(
      join(PUBLIC_DIR, 'sitemap.xml'),
      generateSitemapIndex()
    );

    console.log(`✅ Generated sitemaps:`);
    console.log(`   📋 Main categories: ${mainUrls.length} URLs`);
    console.log(`   🎯 Strategic filters: ${filterUrls.length} URLs`);
    console.log(`   📦 Products: ${productUrls.length} URLs`);
    console.log(`   📊 Total: ${mainUrls.length + filterUrls.length + productUrls.length} URLs`);
    console.log(`\n🎯 Strategy: Prioritized high-value pages, limited filter combinations to prevent SEO dilution`);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { generateMainSitemap, generateFilterSitemap, generateProductSitemap };