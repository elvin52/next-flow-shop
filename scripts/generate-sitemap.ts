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

const BASE_URL = process.env.BASE_URL || 'https://localhost:3000';
const PUBLIC_DIR = join(process.cwd(), 'public');

// Priority mapping for SEO importance
const PRIORITIES = {
  homepage: '1.0',
  mainCategories: '1.0',
  popularFilters: '0.7',
  stylePages: '0.6',
  products: '0.6',
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

  // Main category pages (highest priority)
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

  return urls;
}

function generateFilterSitemap(): SitemapUrl[] {
  const today = new Date().toISOString().split('T')[0];
  const urls: SitemapUrl[] = [];

  // High-value filter combinations (strategic prioritization)
  const popularFilters = [
    { attribute: 'color', values: ['Black', 'White', 'Navy', 'Beige'] },
    { attribute: 'fabric', values: ['Modal', 'Silk', 'Jersey', 'Satin', 'Linen'] },
    { attribute: 'occasion', values: ['Everyday', 'Formal', 'Prayer'] }
  ];

  genders.forEach(gender => {
    typesByGender[gender.id].forEach(type => {
      // Style pages (medium-high priority)
      type.styles.forEach(style => {
        const styleSlug = style.toLowerCase().replace(/\s+/g, '-');
        urls.push({
          loc: `${BASE_URL}/${gender.id}/${type.id}/${styleSlug}`,
          lastmod: today,
          changefreq: 'weekly',
          priority: PRIORITIES.stylePages
        });
      });

      // Single high-value filters only (prevent filter explosion)
      popularFilters.forEach(({ attribute, values }) => {
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
  
  return sampleProducts.map(product => ({
    loc: `${BASE_URL}/product/${product.id}`,
    lastmod: today,
    changefreq: 'weekly' as const,
    priority: PRIORITIES.products
  }));
}

function generateSitemapIndex(): string {
  const today = new Date().toISOString().split('T')[0];
  
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

  // Generate individual sitemaps
  const mainUrls = generateMainSitemap();
  const filterUrls = generateFilterSitemap();
  const productUrls = generateProductSitemap();

  // Write sitemap files
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

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { generateMainSitemap, generateFilterSitemap, generateProductSitemap };