import { Navbar } from "@/components/conference/Navbar";
import { Footer } from "@/components/conference/Footer";
import { ChatbotWidget } from "@/components/conference/ChatbotWidget";
import { Helmet } from 'react-helmet-async';
import SpContent from "@/components/conference/SpContent";
import { Mic, Users } from "lucide-react";

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
        <div className="text-center text-white animate-fade-in relative z-10">
        <div className="flex justify-center items-center gap-2">
          <Mic className="w-6 h-6 text-white" />
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            Keynote Speakers
          </h1>
          <Users className="w-6 h-6 text-[#09d31d]" />
        </div>
        <p className="mt-2 text-xs sm:text-sm text-white/80 max-w-md mx-auto">
          Gain insights from industry leaders on{" "}
          <strong className="text-[#09d31d]">Sustainable Digital Transformation</strong>!
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