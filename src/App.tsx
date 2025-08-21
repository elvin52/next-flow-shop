import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import BlogHome from "./pages/BlogHome";
import ShopComingSoon from "./pages/ShopComingSoon";
import IslamicProducts from "./pages/IslamicProducts";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";
import HijabStyleGuide from "./pages/HijabStyleGuide";
import Blog from "./pages/Blog";
import AbayaArticle from "./pages/AbayaArticle";
import MuslimMenWearArticle from "./pages/MuslimMenWearArticle";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import { Navigate } from "react-router-dom";

const queryClient = new QueryClient();

const isBlogFirst = import.meta.env.VITE_BLOG_FIRST === 'true';

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* Conditional homepage routing */}
              <Route index element={isBlogFirst ? <BlogHome /> : <Home />} />
              
              {/* Coming Soon page for shop */}
              <Route path="coming-soon" element={<ShopComingSoon />} />
              
              {/* Blog routes */}
              <Route path="blog" element={<Blog />} />
              <Route path="blog/hijab-styles-guide" element={<HijabStyleGuide />} />
              <Route path="blog/what-is-an-abaya" element={<AbayaArticle />} />
              <Route path="blog/what-do-muslim-men-wear" element={<MuslimMenWearArticle />} />
              
              {/* Essential pages */}
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="privacy" element={<Privacy />} />
              <Route path="terms" element={<Terms />} />
              
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
                  <Route path=":gender" element={<IslamicProducts />} />
                  <Route path=":gender/:category" element={<IslamicProducts />} />
                  <Route path=":gender/:category/:style" element={<IslamicProducts />} />
                  <Route path=":gender/:category/f/:filters" element={<IslamicProducts />} />
                  <Route path=":gender/:category/f/:filters/page/:page" element={<IslamicProducts />} />
                  <Route path=":gender/:category/page/:page" element={<IslamicProducts />} />
                  <Route path=":gender/:category/:style/page/:page" element={<IslamicProducts />} />
                  <Route path="products" element={<IslamicProducts />} />
                  <Route path="product/:id" element={<ProductDetail />} />
                  <Route path="cart" element={<Cart />} />
                  <Route path="checkout" element={<Checkout />} />
                  <Route path="account" element={<Account />} />
                </>
              )}
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
