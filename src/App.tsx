
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Interviews from "./pages/Interviews";
import Fashion from "./pages/Fashion";
import Lifestyle from "./pages/Lifestyle";
import Culture from "./pages/Culture";
import Architecture from "./pages/Architecture";
import Careers from "./pages/Careers";
import Privacy from "./pages/Privacy";
import Newsletter from "./pages/Newsletter";
import Poetry from "./pages/Poetry";
import Promotions from "./pages/Promotion";
import PressKit from "./pages/PressKit";
import BrandGuidelines from "./pages/BrandGuidelines";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/features" element={<Features />} />
          <Route path="/interviews" element={<Interviews />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/poetry" element={<Poetry />} />
          <Route path="/press" element={<PressKit />} />
          <Route path="/brand" element={<BrandGuidelines />} />
          {/* Category routes */}
          <Route path="/category/fashion" element={<Fashion />} />
          <Route path="/category/lifestyle" element={<Lifestyle />} />
          <Route path="/category/culture" element={<Culture />} />
          <Route path="/category/architecture" element={<Architecture />} />
          <Route path="/terms" element={<Privacy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
