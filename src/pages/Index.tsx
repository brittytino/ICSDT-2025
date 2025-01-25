import { Hero } from "@/components/conference/Hero";
import { About } from "@/components/conference/About";
import { Speakers } from "@/components/conference/Speakers";
import { Schedule } from "@/components/conference/Schedule";
import { Footer } from "@/components/conference/Footer";
import { PaperSubmission } from "@/components/conference/PaperSubmission";
import { Objectives } from "@/components/conference/Objectives";
import { Navbar } from "@/components/conference/Navbar";
import { Collaboration } from "@/components/conference/Collaboration";
import { FAQ } from "@/components/conference/FAQ";
import { ChatbotWidget } from "@/components/conference/ChatbotWidget";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    const hasShownToast = sessionStorage.getItem("registrationToast");
    if (!hasShownToast) {
      setTimeout(() => {
        toast({
          title: "Welcome to ICSDT 2025!",
          description: "Registration is now open. Early bird discounts available!",
          duration: 5000,
        });
        sessionStorage.setItem("registrationToast", "true");
      }, 2000);
    }
  }, [toast]);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>ICSDT 2025 | International Conference on Sustainable Digital Transformation</title>
        <meta name="description" content="Join ICSDT 2025, the International Conference on Sustainable Digital Transformation at Sri Ramakrishna College of Arts and Science (SRCAS). Explore cutting-edge research and innovation in digital transformation." />
        
        {/* Primary Meta Tags */}
        <meta name="title" content="ICSDT 2025 - International Conference on Sustainable Digital Transformation" />
        <meta name="keywords" content="ICSDT, International Conference, Digital Transformation, SRCAS, Sri Ramakrishna College of Arts and Science, Sustainable Technology, Research Conference" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://icsdt2025.com" />
        <meta property="og:title" content="ICSDT 2025 - International Conference at SRCAS" />
        <meta property="og:description" content="International Conference on Sustainable Digital Transformation at Sri Ramakrishna College of Arts and Science. Join leading researchers and innovators." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://icsdt2025.com" />
        <meta property="twitter:title" content="ICSDT 2025 - International Conference at SRCAS" />
        <meta property="twitter:description" content="International Conference on Sustainable Digital Transformation at Sri Ramakrishna College of Arts and Science. Join leading researchers and innovators." />
        
        {/* Additional SEO Tags */}
        <meta name="author" content="Sri Ramakrishna College of Arts and Science" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="generator" content="SRCAS ICSDT Conference System" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://icsdt2025.com" />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Collaboration />
      <Objectives />
      <PaperSubmission />
      <Speakers />
      <Schedule />
      <FAQ />
      <Footer />
      <ChatbotWidget />
    </div>
  );
};

export default Index;