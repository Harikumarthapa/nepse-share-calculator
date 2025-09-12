
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const EmbedPage = lazy(() => import("./pages/EmbedPage"));
const IPOCalculator = lazy(() => import("./pages/IPOCalculator"));


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <LanguageProvider>
        <TooltipProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {/* English Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/embed" element={<EmbedPage />} />
              <Route path="/ipo-calculator" element={<IPOCalculator />} />
              
              {/* Nepali Routes */}
              <Route path="/ne" element={<Index />} />
              <Route path="/ne/privacy" element={<Privacy />} />
              <Route path="/ne/terms" element={<Terms />} />
              <Route path="/ne/disclaimer" element={<Disclaimer />} />
              <Route path="/ne/about" element={<About />} />
              <Route path="/ne/contact" element={<Contact />} />
              <Route path="/ne/sitemap" element={<Sitemap />} />
              <Route path="/ne/ipo-calculator" element={<IPOCalculator />} />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </LanguageProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
