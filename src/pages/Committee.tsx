import { Footer } from "@/components/conference/Footer";
import { Navbar } from "@/components/conference/Navbar";
import { ChatbotWidget } from "@/components/conference/ChatbotWidget";
import { Helmet } from 'react-helmet-async';
import ComContent from "@/components/conference/ComContent";

const Committee = () => {
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
      <div className="mt-16 w-full h-[120px] sm:h-[150px] md:h-[180px] flex items-center justify-center bg-gradient-to-r from-black to-[#ed0707] shadow-lg">
        
        {/* Hero Text */}
        <div className="text-center text-white animate-fade-in">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            Committee
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-white/80">
            Join us in shaping the future of <strong>Sustainable Digital Transformation</strong>!
          </p>
        </div>
      </div>
      <ComContent />
      <Footer />
      <ChatbotWidget />
    </div>
  );
};

export default Committee;