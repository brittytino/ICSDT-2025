import { Footer } from "@/components/conference/Footer";
import { Navbar } from "@/components/conference/Navbar";
import SubContent from "@/components/conference/SubContent";
import { ChatbotWidget } from "@/components/conference/ChatbotWidget";
import { Helmet } from 'react-helmet-async';

const Submission = () => {
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
      <div className="relative flex justify-center items-center h-screen bg-gray-900 overflow-hidden">
        {/* Image */}
        <div className="relative w-full h-full">
          <img
            src="/sub/4.png"
            alt="Hero"
            className="absolute w-full h-full object-cover transition-opacity duration-1000 opacity-100"
          />
        </div>
      </div>
      <SubContent />
      <Footer />
      <ChatbotWidget />
    </div>
  );
};

export default Submission;