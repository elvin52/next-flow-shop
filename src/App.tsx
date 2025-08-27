import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import Layout from '@/components/Layout';
import { Skeleton } from '@/components/ui/skeleton';

// Lazy load pages for better performance
const Home = lazy(() => import('@/pages/Home'));
const BlogHome = lazy(() => import('@/pages/BlogHome'));
const Blog = lazy(() => import('@/pages/Blog'));
const HijabStyleGuide = lazy(() => import('@/pages/HijabStyleGuide'));
const MuslimMenWearArticle = lazy(() => import('@/pages/MuslimMenWearArticle'));
const AbayaArticle = lazy(() => import('@/pages/AbayaArticle'));
const ShopComingSoon = lazy(() => import('@/pages/ShopComingSoon'));
const IslamicProducts = lazy(() => import('@/pages/IslamicProducts'));
const ProductDetail = lazy(() => import('@/pages/ProductDetail'));
const Cart = lazy(() => import('@/pages/Cart'));
const Checkout = lazy(() => import('@/pages/Checkout'));
const Account = lazy(() => import('@/pages/Account'));
const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));
const Privacy = lazy(() => import('@/pages/Privacy'));
const Terms = lazy(() => import('@/pages/Terms'));
const NewsletterManagement = lazy(() => import('@/pages/NewsletterManagement'));
const NotFound = lazy(() => import('@/pages/NotFound'));

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

// Check if blog should be the primary landing page
const isBlogFirst = import.meta.env.VITE_BLOG_FIRST === 'true';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <BrowserRouter>
            <Suspense 
              fallback={<Skeleton className="min-h-screen w-full" />}
            >
              <Routes>
                <Route path="/" element={<Layout />}>
                  {/* Conditional homepage based on environment */}
                  <Route 
                    index 
                    element={isBlogFirst ? <BlogHome /> : <Home />} 
                  />
                  
                  {/* Blog routes */}
                  <Route path="blog" element={<Blog />} />
                  <Route 
                    path="blog/hijab-styles-guide" 
                    element={<HijabStyleGuide />} 
                  />
                  <Route 
                    path="blog/what-do-muslim-men-wear" 
                    element={<MuslimMenWearArticle />} 
                  />
                  <Route 
                    path="blog/what-is-an-abaya" 
                    element={<AbayaArticle />} 
                  />
                  
                  {/* Essential pages */}
                  <Route path="about" element={<About />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="privacy" element={<Privacy />} />
                  <Route path="terms" element={<Terms />} />
                  
                  {/* Admin routes */}
                  <Route 
                    path="admin/newsletter" 
                    element={<NewsletterManagement />} 
                  />
                  
                  {/* Shop routes - conditional based on environment */}
                  {isBlogFirst ? (
                    <>
                      {/* In blog-first mode, redirect these to coming soon */}
                      <Route path="products" element={<ShopComingSoon />} />
                      <Route path="product/:id" element={<ShopComingSoon />} />
                      <Route path="cart" element={<ShopComingSoon />} />
                      <Route path="checkout" element={<ShopComingSoon />} />
                      <Route path="account" element={<ShopComingSoon />} />
                      <Route path="men" element={<ShopComingSoon />} />
                      <Route path="women" element={<ShopComingSoon />} />
                      <Route path="men/:category" element={<ShopComingSoon />} />
                      <Route path="women/:category" element={<ShopComingSoon />} />
                      <Route path="shop" element={<ShopComingSoon />} />
                      <Route path="coming-soon" element={<ShopComingSoon />} />
                    </>
                  ) : (
                    <>
                      {/* Full shop functionality */}
                      <Route path="products" element={<IslamicProducts />} />
                      <Route path="product/:id" element={<ProductDetail />} />
                      <Route path="cart" element={<Cart />} />
                      <Route path="checkout" element={<Checkout />} />
                      <Route path="account" element={<Account />} />
                      <Route path="men" element={<IslamicProducts />} />
                      <Route path="women" element={<IslamicProducts />} />
                      <Route path="men/:category" element={<IslamicProducts />} />
                      <Route path="women/:category" element={<IslamicProducts />} />
                      <Route path="coming-soon" element={<ShopComingSoon />} />
                    </>
                  )}
                  
                  {/* 404 route */}
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </Suspense>
            <Toaster />
            <Sonner />
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;