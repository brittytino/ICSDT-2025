import { Footer } from "@/components/conference/Footer";
import { Navbar } from "@/components/conference/Navbar";
import { ChatbotWidget } from "@/components/conference/ChatbotWidget";
import { Helmet } from 'react-helmet-async';
import AboutPage from "@/components/conference/AboutPage";
import { Globe, Leaf } from "lucide-react";


const About= () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>ICSDT 2025 | International Conference on Sustainable Digital Transformation</title>
        <meta name="description" content="Join ICSDT 2025, the International Conference on Sustainable Digital Transformation at Sri Ramakrishna College of Arts and Science (SRCAS). Explore cutting-edge research and innovation in digital transformation." />
        <meta name="title" content="ICSDT 2025 - International Conference on Sustainable Digital Transformation" />
        <meta name="keywords" content="ICSDT, International Conference, Digital Transformation, SRCAS, Sri Ramakrishna College of Arts and Science, Sustainable Technology, Research Conference" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://icsdt2025.com" />
        <meta property="og:title" content="ICSDT 2025 - International Conference at SRCAS" />
        <meta property="og:description" content="International Conference on Sustainable Digital Transformation at Sri Ramakrishna College of Arts and Science. Join leading researchers and innovators." />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://icsdt2025.com" />
        <meta property="twitter:title" content="ICSDT 2025 - International Conference at SRCAS" />
        <meta property="twitter:description" content="International Conference on Sustainable Digital Transformation at Sri Ramakrishna College of Arts and Science. Join leading researchers and innovators." />
        <meta name="author" content="Sri Ramakrishna College of Arts and Science" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="generator" content="SRCAS ICSDT Conference System" />
        <link rel="canonical" href="https://icsdt2025.com" />
      </Helmet>
      <Navbar />
      <div className="mt-16 w-full h-[150px] sm:h-[180px] md:h-[200px] flex items-center justify-center bg-gradient-to-r from-black to-[#09d31d] shadow-lg relative">
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="text-center text-white animate-fade-in relative z-10">
        <div className="flex justify-center items-center gap-2">
          <Globe className="w-6 h-6 text-white" />
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            About the Conference
          </h1>
          <Leaf className="w-6 h-6 text-[#09d31d]" />
        </div>
        <p className="mt-2 text-xs sm:text-sm text-white/80 max-w-md mx-auto">
          Join us in shaping the future of{" "}
          <strong className="text-[#09d31d]">Sustainable Digital Transformation</strong>!
        </p>
      </div>
    </div>
      <AboutPage />
      <Footer />
      <ChatbotWidget />
    </div>
  );
};

export default About;