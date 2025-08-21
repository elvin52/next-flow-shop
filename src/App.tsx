import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import BlogHome from "./pages/BlogHome";
import ShopHome from "./pages/ShopHome";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={
                import.meta.env.VITE_BLOG_FIRST === 'true' ? <BlogHome /> : <ShopHome />
              } />
              <Route path="shop" element={
                import.meta.env.VITE_BLOG_FIRST === 'true' ? 
                  <Navigate to="/shop-coming-soon" replace /> : 
                  <ShopHome />
              } />
              <Route path="shop-coming-soon" element={<ShopComingSoon />} />
              {/* Islamic wear gender-based routing with advanced SEO */}
              <Route path=":gender" element={<IslamicProducts />} />
              <Route path=":gender/:category" element={<IslamicProducts />} />
              <Route path=":gender/:category/:style" element={<IslamicProducts />} />
              
              {/* Filter-based SEO URLs */}
              <Route path=":gender/:category/f/:filters" element={<IslamicProducts />} />
              <Route path=":gender/:category/f/:filters/page/:page" element={<IslamicProducts />} />
              
              {/* Pagination URLs */}
              <Route path=":gender/:category/page/:page" element={<IslamicProducts />} />
              <Route path=":gender/:category/:style/page/:page" element={<IslamicProducts />} />
              
              {/* Legacy/alternative routes */}
              <Route path="products" element={<IslamicProducts />} />
              <Route path="product/:id" element={<ProductDetail />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="account" element={<Account />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/hijab-styles-guide" element={<HijabStyleGuide />} />
              <Route path="blog/what-is-an-abaya" element={<AbayaArticle />} />
              <Route path="blog/what-do-muslim-men-wear" element={<MuslimMenWearArticle />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="privacy" element={<Privacy />} />
              <Route path="terms" element={<Terms />} />
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
