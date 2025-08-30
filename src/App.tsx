import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Suspense, lazy } from "react";
import Layout from "./components/Layout";
import { PageSkeleton } from "./components/ui/loading-skeleton";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const BlogHome = lazy(() => import("./pages/BlogHome"));
const ShopComingSoon = lazy(() => import("./pages/ShopComingSoon"));
const IslamicProducts = lazy(() => import("./pages/IslamicProducts"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Account = lazy(() => import("./pages/Account"));
const NotFound = lazy(() => import("./pages/NotFound"));
const HijabStyleGuide = lazy(() => import("./pages/HijabStyleGuide"));
const Blog = lazy(() => import("./pages/Blog"));
const AbayaArticle = lazy(() => import("./pages/AbayaArticle"));
const MuslimMenWearArticle = lazy(() => import("./pages/MuslimMenWearArticle"));
const HijabFabricsGuide = lazy(() => import("./pages/HijabFabricsGuide"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NewsletterManagement = lazy(() => import("./pages/NewsletterManagement"));

const queryClient = new QueryClient();

const isBlogFirst = import.meta.env.VITE_BLOG_FIRST === 'true';

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageSkeleton />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                {/* Conditional homepage routing */}
                <Route index element={
                  <Suspense fallback={<PageSkeleton />}>
                    {isBlogFirst ? <BlogHome /> : <Home />}
                  </Suspense>
                } />
                
                {/* Coming Soon page for shop */}
                <Route path="coming-soon" element={
                  <Suspense fallback={<PageSkeleton />}>
                    <ShopComingSoon />
                  </Suspense>
                } />
                
                {/* Blog routes */}
                <Route path="blog" element={
                  <Suspense fallback={<PageSkeleton />}>
                    <Blog />
                  </Suspense>
                } />
                <Route path="blog/hijab-styles-guide" element={
                  <Suspense fallback={<PageSkeleton />}>
                    <HijabStyleGuide />
                  </Suspense>
                } />
                <Route path="blog/what-is-an-abaya" element={
                  <Suspense fallback={<PageSkeleton />}>
                    <AbayaArticle />
                  </Suspense>
                } />
                <Route path="blog/what-do-muslim-men-wear" element={
                  <Suspense fallback={<PageSkeleton />}>
                    <MuslimMenWearArticle />
                  </Suspense>
                } />
                <Route path="blog/hijab-fabrics-guide" element={
                  <Suspense fallback={<PageSkeleton />}>
                    <HijabFabricsGuide />
                  </Suspense>
                } />
                
                {/* Essential pages */}
                <Route path="about" element={
                  <Suspense fallback={<PageSkeleton />}>
                    <About />
                  </Suspense>
                } />
                <Route path="contact" element={
                  <Suspense fallback={<PageSkeleton />}>
                    <Contact />
                  </Suspense>
                } />
                <Route path="privacy" element={
                  <Suspense fallback={<PageSkeleton />}>
                    <Privacy />
                  </Suspense>
                } />
                <Route path="terms" element={
                  <Suspense fallback={<PageSkeleton />}>
                    <Terms />
                  </Suspense>
                } />
                
                {/* Newsletter Management - Hidden route for admin */}
                <Route path="admin/newsletter" element={
                  <Suspense fallback={<PageSkeleton />}>
                    <NewsletterManagement />
                  </Suspense>
                } />
                
                {/* Shop routes - conditionally redirect or render */}
                {isBlogFirst ? (
                  <>
                    {/* Redirect all shop routes to coming-soon */}
                    <Route path="men" element={<Navigate to="/coming-soon" replace />} />
                    <Route path="women" element={<Navigate to="/coming-soon" replace />} />
                    <Route path="men/:category" element={<Navigate to="/coming-soon" replace />} />
                    <Route path="women/:category" element={<Navigate to="/coming-soon" replace />} />
                    <Route path="men/:category/:style" element={<Navigate to="/coming-soon" replace />} />
                    <Route path="women/:category/:style" element={<Navigate to="/coming-soon" replace />} />
                    <Route path="men/:category/f/:filters" element={<Navigate to="/coming-soon" replace />} />
                    <Route path="women/:category/f/:filters" element={<Navigate to="/coming-soon" replace />} />
                    <Route path="men/:category/f/:filters/page/:page" element={<Navigate to="/coming-soon" replace />} />
                    <Route path="women/:category/f/:filters/page/:page" element={<Navigate to="/coming-soon" replace />} />
                    <Route path="men/:category/page/:page" element={<Navigate to="/coming-soon" replace />} />
                    <Route path="women/:category/page/:page" element={<Navigate to="/coming-soon" replace />} />
                    <Route path="men/:category/:style/page/:page" element={<Navigate to="/coming-soon" replace />} />
                    <Route path="women/:category/:style/page/:page" element={<Navigate to="/coming-soon" replace />} />
                    <Route path="products" element={<Navigate to="/coming-soon" replace />} />
                    <Route path="product/:id" element={<Navigate to="/coming-soon" replace />} />
                    <Route path="cart" element={<Navigate to="/coming-soon" replace />} />
                    <Route path="checkout" element={<Navigate to="/coming-soon" replace />} />
                    <Route path="account" element={<Navigate to="/coming-soon" replace />} />
                  </>
                ) : (
                  <>
                    {/* Normal shop routes when not in blog-first mode */}
                    <Route path=":gender" element={
                      <Suspense fallback={<PageSkeleton />}>
                        <IslamicProducts />
                      </Suspense>
                    } />
                    <Route path=":gender/:category" element={
                      <Suspense fallback={<PageSkeleton />}>
                        <IslamicProducts />
                      </Suspense>
                    } />
                    <Route path=":gender/:category/:style" element={
                      <Suspense fallback={<PageSkeleton />}>
                        <IslamicProducts />
                      </Suspense>
                    } />
                    <Route path=":gender/:category/f/:filters" element={
                      <Suspense fallback={<PageSkeleton />}>
                        <IslamicProducts />
                      </Suspense>
                    } />
                    <Route path=":gender/:category/f/:filters/page/:page" element={
                      <Suspense fallback={<PageSkeleton />}>
                        <IslamicProducts />
                      </Suspense>
                    } />
                    <Route path=":gender/:category/page/:page" element={
                      <Suspense fallback={<PageSkeleton />}>
                        <IslamicProducts />
                      </Suspense>
                    } />
                    <Route path=":gender/:category/:style/page/:page" element={
                      <Suspense fallback={<PageSkeleton />}>
                        <IslamicProducts />
                      </Suspense>
                    } />
                    <Route path="products" element={
                      <Suspense fallback={<PageSkeleton />}>
                        <IslamicProducts />
                      </Suspense>
                    } />
                    <Route path="product/:id" element={
                      <Suspense fallback={<PageSkeleton />}>
                        <ProductDetail />
                      </Suspense>
                    } />
                    <Route path="cart" element={
                      <Suspense fallback={<PageSkeleton />}>
                        <Cart />
                      </Suspense>
                    } />
                    <Route path="checkout" element={
                      <Suspense fallback={<PageSkeleton />}>
                        <Checkout />
                      </Suspense>
                    } />
                    <Route path="account" element={
                      <Suspense fallback={<PageSkeleton />}>
                        <Account />
                      </Suspense>
                    } />
                  </>
                )}
              </Route>
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={
                <Suspense fallback={<PageSkeleton />}>
                  <NotFound />
                </Suspense>
              } />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
