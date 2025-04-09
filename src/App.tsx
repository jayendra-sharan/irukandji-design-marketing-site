import React, { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import CaseStudy from "./pages/CaseStudy";
import NotFound from "./pages/NotFound";
import Header from "./components/layout/Header";
import ContactForm from "./components/contact/ContactForm";

const queryClient = new QueryClient();

const App = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("");

  const toggleContactForm = (pageName?: string) => {
    if (pageName) {
      setCurrentPage(pageName);
    }
    setIsContactFormOpen((prev) => !prev);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <Header toggleContactForm={() => toggleContactForm()} />
          <ContactForm
            isOpen={isContactFormOpen}
            onClose={() => setIsContactFormOpen(false)}
            referringPage={currentPage}
          />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/case-study/:slug" element={<CaseStudy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
