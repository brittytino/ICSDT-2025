import { Hero } from "@/components/conference/Hero";
import { Navbar } from "@/components/conference/Navbar";
import { Footer } from "@/components/conference/Footer";
import { ChatbotWidget } from "@/components/conference/ChatbotWidget";
import { Helmet } from 'react-helmet-async';

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
      <div className="relative flex justify-center items-center h-screen bg-gray-900 overflow-hidden">
        {/* Image */}
        <div className="relative w-full h-full">
          <img
            src="/sub/2.png"
            alt="Hero"
            className="absolute w-full h-full object-cover transition-opacity duration-1000 opacity-100"
          />
        </div>
      </div>
      <Footer />
      <ChatbotWidget />
    </div>
  );
};

export default KeyNoteSpeakers;