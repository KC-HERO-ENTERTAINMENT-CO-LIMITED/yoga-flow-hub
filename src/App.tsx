import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutYoga from "./pages/AboutYoga";
import YogaChildren from "./pages/YogaChildren";
import YogaAdults from "./pages/YogaAdults";
import YogaSeniors from "./pages/YogaSeniors";
import PosesLibrary from "./pages/PosesLibrary";
import SolutionHub from "./pages/SolutionHub";
import Contact from "./pages/Contact";
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
          <Route path="/about" element={<AboutYoga />} />
          <Route path="/yoga-children" element={<YogaChildren />} />
          <Route path="/yoga-adults" element={<YogaAdults />} />
          <Route path="/yoga-seniors" element={<YogaSeniors />} />
          <Route path="/poses" element={<PosesLibrary />} />
          <Route path="/solutions" element={<SolutionHub />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
