import { Navbar } from "@/components/conference/Navbar";
import { Footer } from "@/components/conference/Footer";
import { ChatbotWidget } from "@/components/conference/ChatbotWidget";
import { Helmet } from 'react-helmet-async';
import SpContent from "@/components/conference/SpContent";

const KeyNoteSpeakers = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>ICSDT 2025 | International Conference on Sustainable Digital Transformation</title>
        <meta name="description" content="Join ICSDT 2025, the International Conference on Sustainable Digital Transformation at Sri Ramakrishna College of Arts and Science (SRCAS)." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://icsdt2025.com" />
      </Helmet>
      <Navbar />
      <div className="mt-16 w-full h-[120px] sm:h-[150px] md:h-[180px] flex items-center justify-center bg-gradient-to-r from-black to-[#ea0b77] shadow-lg">
        
        {/* Hero Text */}
        <div className="text-center text-white animate-fade-in">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            Keynote Speaker's
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-white/80">
            Join us in shaping the future of <strong>Sustainable Digital Transformation</strong>!
          </p>
        </div>
      </div>
      <SpContent />
      <Footer />
      <ChatbotWidget />
    </div>
  );
};

export default KeyNoteSpeakers;