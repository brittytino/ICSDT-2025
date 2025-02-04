import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import KeyNoteSpeakers from "./pages/KeyNoteSpeakers";
import Committee from "./pages/Committee";
import CFP from "./pages/CFP";
import Visa from "./pages/Visa";
import Registration from "./pages/Registration";
import Submission from "./pages/Submission";
import Program from "./pages/Program";
import Venue from "./pages/Venue";
import Contact from "./pages/Contact";


const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/commitee" element={<Committee />} />
            <Route path="/speakers" element={<KeyNoteSpeakers />} />
            <Route path="/cfp" element={<CFP />} />
            <Route path="/visa" element={<Visa />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/program" element={<Program />} />
            <Route path="/submission" element={<Submission />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;