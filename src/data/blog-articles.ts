// Centralized blog article data
// This prevents duplication and allows for better caching

import classicWrapImage from '@/assets/classic-wrap-hijab.jpg';
import modernTurbanImage from '@/assets/modern-turban-hijab.jpg';
import accessoriesImage from '@/assets/hijab-accessories.jpg';

export interface BlogArticle {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  readTime: string;
  views: string;
  category: string;
  featured: boolean;
  link: string;
  publishDate?: string;
  author?: string;
}

// Static article data - moved outside component to prevent re-creation on renders
export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'muslim-men-wear',
    title: "What Do Muslim Men Wear? Traditional Islamic Clothing Guide",
    description: "Complete guide to traditional Islamic clothing for men including thobe, kufi, jalabiya, and other modest attire worn by Muslim men worldwide.",
    image: modernTurbanImage,
    imageAlt: "Traditional Islamic clothing for Muslim men - thobe, kufi, and modest wear guide",
    readTime: "10 min read",
    views: "856 views",
    category: "Cultural Guide",
    featured: true,
    link: "/blog/what-do-muslim-men-wear",
    publishDate: "2025-08-20",
    author: "Islamic Fashion Expert"
  },
  {
    id: 'what-is-abaya',
    title: "What is an Abaya? Can Non-Muslims Wear an Abaya?",
    description: "Comprehensive guide about abayas, their cultural significance, and whether non-Muslims can respectfully wear this traditional Islamic garment.",
    image: modernTurbanImage,
    imageAlt: "Abaya guide - Islamic modest fashion and cultural significance for women",
    readTime: "12 min read",
    views: "1.2K views",
    category: "Cultural Guide",
    featured: false,
    link: "/blog/what-is-an-abaya",
    publishDate: "2025-08-20",
    author: "Islamic Fashion Expert"
  },
  {
    id: 'hijab-styles-guide',
    title: "The Ultimate Guide to Hijab Styles",
    description: "Comprehensive guide covering classic wraps, modern turbans, and trendsetting looks with detailed techniques for each style.",
    image: classicWrapImage,
    imageAlt: "Complete hijab style guide - classic wrap, modern turban, and styling techniques",
    readTime: "15 min read",
    views: "2.4K views",
    category: "Style Guide",
    featured: false,
    link: "/blog/hijab-styles-guide",
    publishDate: "2025-01-15",
    author: "Hijab Style Expert"
  },
  {
    id: 'chiffon-hijabs',
    title: "Best Chiffon Hijabs for Daily Wear",
    description: "Discover lightweight and breathable chiffon hijabs perfect for everyday styling and warm weather.",
    image: modernTurbanImage,
    imageAlt: "Best chiffon hijabs for daily wear - lightweight and breathable options",
    readTime: "8 min read", 
    views: "1.8K views",
    category: "Product Review",
    featured: false,
    link: "/blog/chiffon-hijabs",
    publishDate: "2025-07-10",
    author: "Product Review Team"
  },
  {
    id: 'hijab-accessories',
    title: "Essential Hijab Accessories Guide",
    description: "Complete guide to hijab magnets, undercaps, and pins that will transform your hijab experience.",
    image: accessoriesImage,
    imageAlt: "Essential hijab accessories - magnets, undercaps, pins, and styling tools",
    readTime: "10 min read",
    views: "3.1K views", 
    category: "Accessories",
    featured: false,
    link: "/blog/hijab-accessories",
    publishDate: "2025-06-05",
    author: "Accessory Expert"
  }
] as const;

// Helper functions for article data
export const getFeaturedArticles = () => BLOG_ARTICLES.filter(article => article.featured);
export const getRecentArticles = () => BLOG_ARTICLES.filter(article => !article.featured);
export const getArticleById = (id: string) => BLOG_ARTICLES.find(article => article.id === id);
export const getArticlesByCategory = (category: string) => BLOG_ARTICLES.filter(article => article.category === category);

// Category data
export const BLOG_CATEGORIES = [
  {
    name: "Hijab Styles",
    count: "23 articles",
    description: "From classic wraps to modern trends",
    slug: "hijab-styles"
  },
  {
    name: "Modest Outfits",
    count: "18 articles", 
    description: "Complete outfit inspiration and ideas",
    slug: "modest-outfits"
  },
  {
    name: "Fabric Guide",
    count: "12 articles",
    description: "Chiffon, silk, and premium materials",
    slug: "fabric-guide"
  },
  {
    name: "Accessories", 
    count: "15 articles",
    description: "Magnets, undercaps, and styling tools",
    slug: "accessories"
  },
  {
    name: "Seasonal Styles",
    count: "20 articles",
    description: "Weather-appropriate modest fashion",
    slug: "seasonal-styles"
  },
  {
    name: "Cultural Styles",
    count: "14 articles", 
    description: "Regional and traditional influences",
    slug: "cultural-styles"
  }
] as const;