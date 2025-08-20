import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import IslamicProducts from "./pages/IslamicProducts";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";
import HijabStyleGuide from "./pages/HijabStyleGuide";

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
              <Route index element={<Home />} />
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
              <Route path="hijab-style-guide" element={<HijabStyleGuide />} />
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
