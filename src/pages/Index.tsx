import { Hero } from "@/components/conference/Hero";
import { Speakers } from "@/components/conference/Speakers";
import { Schedule } from "@/components/conference/Schedule";
import { Footer } from "@/components/conference/Footer";
import { Objectives } from "@/components/conference/Objectives";
import { Navbar } from "@/components/conference/Navbar";
import { Collaboration } from "@/components/conference/Collaboration";
import { FAQ } from "@/components/conference/FAQ";
import { ChatbotWidget } from "@/components/conference/ChatbotWidget";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState, useRef, lazy, Suspense } from "react";
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// Loader component
const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 border-3 border-primary border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-3 text-gray-600 font-medium text-sm">
        Loading ICSDT 2025...
      </p>
    </div>
  </div>
);

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const { toast } = useToast();
  const mainContentRef = useRef(null);
  const sectionsRef = useRef({});
  
  // Track scroll for animations and visibility control
  const { scrollY } = useScroll();
  
  const backToTopOpacity = useTransform(scrollY, [100, 300], [0, 1]);
  const backToTopScale = useTransform(scrollY, [100, 300], [0.8, 1]);

  // Initialize and handle page loading
  useEffect(() => {
    // Prevent page transition flashing
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Force scroll position to top on initial load
    window.scrollTo(0, 0);
    
    // Optimized loading sequence
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      
      // Preload critical assets after main content is shown
      const preloadImages = [
        '/path/to/hero-image.jpg',
        '/path/to/logo.png'
      ];
      
      preloadImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
      
    }, 500);
    
    // Setup welcome toast with delayed execution
    const welcomeTimer = setTimeout(() => {
      const hasVisited = localStorage.getItem('hasVisitedICSDP2025');
      
      if (!hasVisited) {
        toast({
          title: "Welcome to ICSDT 2025!",
          description: "Explore the latest in sustainable digital transformation.",
          duration: 5000,
          variant: "default",
        });
        localStorage.setItem('hasVisitedICSDP2025', 'true');
      } else {
        toast({
          title: "Welcome Back!",
          description: "Glad to see you again at ICSDT 2025.",
          duration: 4000,
          variant: "default",
        });
      }
    }, 1000);
    
    // Ensure loader doesn't get stuck
    const fallbackTimer = setTimeout(() => {
      if (isLoading) setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(welcomeTimer);
      clearTimeout(fallbackTimer);
      document.documentElement.style.scrollBehavior = '';
    };
  }, [toast, isLoading]);
  
  // Set up intersection observer for section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            
            // Update URL hash without scrolling
            const newUrl = window.location.pathname + `#${entry.target.id}`;
            window.history.replaceState(null, null, newUrl);
          }
        });
      },
      { 
        rootMargin: "-100px 0px -300px 0px",
        threshold: 0.2 
      }
    );
    
    // Observe all sections
    const sections = ["hero", "collaboration", "objectives", "speakers", "faq"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        sectionsRef.current[id] = element;
        observer.observe(element);
      }
    });
    
    return () => {
      sections.forEach((id) => {
        const element = sectionsRef.current[id];
        if (element) observer.unobserve(element);
      });
    };
  }, [isLoading]);
  
  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      
      e.preventDefault();
      const targetId = target.getAttribute('href').substring(1);
      scrollToSection(targetId);
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Enhanced scroll to section function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    // Get navbar height dynamically
    const navbar = document.querySelector('nav');
    const navbarHeight = navbar ? navbar.offsetHeight : 80;
    
    // Calculate exact offset position
    const sectionRect = section.getBoundingClientRect();
    const offsetPosition = window.pageYOffset + sectionRect.top - navbarHeight - 20;
    
    // Use requestAnimationFrame for smoother animation
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
    
    // Update active section immediately for UI feedback
    setActiveSection(sectionId);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
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
        
        {/* Fix for scroll bar flashing */}
        <style>{`
          html {
            overflow-y: scroll;
            scrollbar-width: thin;
          }
          
          body {
            overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          /* Prevent iOS overscroll */
          html, body {
            overscroll-behavior-y: none;
            height: 100%;
          }
          
          /* Hide scrollbar in loading state */
          body.loading {
            overflow: hidden;
          }
          
          /* Consistent scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
          }
          
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          
          ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 10px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
          
          /* Fade-in transition for sections */
          .section-transition {
            transition: opacity 0.4s ease-in-out;
          }
          
          /* Progressive loading effect */
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
        `}</style>
      </Helmet>
      
      {/* Loading screen with AnimatePresence for smooth transitions */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Render content even while loading for smoother transition */}
      <div className={`min-h-screen ${isLoading ? 'invisible' : 'visible'}`} ref={mainContentRef}>
        {/* Fixed navbar */}
        <Navbar />
        
        {/* Main content with staggered animations */}
        <motion.div 
          className="pt-16 md:pt-20 overflow-hidden" 
          variants={containerVariants}
          initial="hidden"
          animate={isLoading ? "hidden" : "visible"}
        >
          {/* Hero section - full height without overflow issues */}
          <motion.section 
            id="hero" 
            variants={sectionVariants} 
            className="w-full relative section-transition"
            style={{ minHeight: "calc(100vh - 80px)", height: "auto" }}
          >
            <Hero />
          </motion.section>
          
          {/* Collaboration section - optimized spacing */}
          <motion.section 
            id="collaboration" 
            variants={sectionVariants} 
            className="w-full py-10 md:py-16 lg:py-20 section-transition"
          >
            <Collaboration />
          </motion.section>
          
          {/* Objectives section with proper background */}
          <motion.section 
            id="objectives" 
            variants={sectionVariants} 
            className="w-full py-10 md:py-16 lg:py-20 bg-gray-50 section-transition"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <Objectives />
            </div>
          </motion.section>
          
          {/* Speakers section */}
          <motion.section 
            id="speakers" 
            variants={sectionVariants} 
            className="w-full py-10 md:py-16 lg:py-20 section-transition"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <Speakers />
            </div>
          </motion.section>
          
          {/* FAQ section */}
          <motion.section 
            id="faq" 
            variants={sectionVariants} 
            className="w-full py-10 md:py-16 lg:py-20 bg-gray-50 section-transition"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <FAQ />
            </div>
          </motion.section>
          
          {/* Footer */}
          <motion.footer 
            id="footer" 
            variants={sectionVariants} 
            className="w-full section-transition"
          >
            <Footer />
          </motion.footer>
        </motion.div>
        
        {/* Optimized chat widget - lazy loaded */}
        <motion.div 
          className="fixed bottom-6 right-6 z-40"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <ChatbotWidget />
        </motion.div>
        
        {/* Improved back to top button with motion controls */}
        <motion.button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-6 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-all z-30 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Back to top"
          style={{ 
            opacity: backToTopOpacity,
            scale: backToTopScale,
            pointerEvents: scrollY.get() > 300 ? 'auto' : 'none'
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
        
        {/* Enhanced navigation dots */}
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-30 hidden lg:flex flex-col gap-3">
          {['hero', 'collaboration', 'objectives', 'speakers', 'faq'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                activeSection === section 
                  ? "bg-primary scale-125" 
                  : "bg-primary/30 hover:bg-primary/60"
              }`}
              aria-label={`Scroll to ${section} section`}
              aria-current={activeSection === section ? "true" : "false"}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;