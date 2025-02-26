import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Globe, Calendar } from "lucide-react";

export const Hero = () => {
  const [currentColor, setCurrentColor] = useState(0);
  const colors = [
    "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50",
    "bg-gradient-to-br from-green-50 via-cyan-50 to-blue-50",
    "bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColor((prev) => (prev + 1) % colors.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative h-screen w-full overflow-hidden transition-colors duration-1000 ${colors[currentColor]}`}>
      {/* Top Marquee */}
      <motion.div
        className="absolute top-0 w-full bg-blue-800 py-3"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex items-center space-x-4 text-sm font-medium text-white md:text-base"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          <span className="flex items-center">
            <Sparkles size={16} className="mr-2" />
            Proceedings published in SCOPUS indexed Springer Book Series
          </span>
          <span className="h-1 w-1 rounded-full bg-white" />
          <span>Best Paper Awards</span>
          <span className="h-1 w-1 rounded-full bg-white" />
          <span>Keynote Speakers from Top Institutions</span>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto flex h-full flex-col items-center justify-center px-4 pt-20 pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="mb-6 flex items-center justify-center text-sm font-semibold text-blue-800 md:text-base">
            <span className="mr-2 rounded-full bg-white px-4 py-1 shadow-lg">
              3rd International Conference
            </span>
          </div>
          
          <h1 className="text-4xl font-black leading-tight text-gray-900 md:text-6xl lg:text-7xl">
            Sustainable Digital
            <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Transformation 2025
            </span>
          </h1>

          <div className="my-8 flex flex-col items-center justify-center gap-4 text-gray-700 md:flex-row">
            <div className="flex items-center rounded-full bg-white px-6 py-2 shadow-md">
              <Calendar className="mr-2 h-5 w-5 text-blue-600" />
              <span className="font-semibold">6th August 2025</span>
            </div>
            <div className="flex items-center rounded-full bg-white px-6 py-2 shadow-md">
              <Globe className="mr-2 h-5 w-5 text-green-600" />
              <span className="font-semibold">Hybrid Mode Conference</span>
            </div>
          </div>

          {/* Logos */}
          <div className="my-8 flex flex-col items-center gap-8 md:flex-row">
            <div className="rounded-xl bg-white/80 p-4 shadow-lg backdrop-blur-sm">
              <img
                src="/srcas1.png"
                alt="SRCAS"
                className="h-12 object-contain opacity-90 transition hover:opacity-100 md:h-16"
              />
            </div>
            <div className="text-xl font-bold text-gray-600">in association with</div>
            <div className="rounded-xl bg-white/80 p-4 shadow-lg backdrop-blur-sm">
              <img
                src="/inti.png"
                alt="INTI"
                className="h-12 object-contain opacity-90 transition hover:opacity-100 md:h-16"
              />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/cfp"
              className="flex items-center rounded-lg bg-blue-600 px-8 py-4 text-white shadow-lg transition hover:bg-blue-700"
            >
              <Sparkles className="mr-2" />
              Call For Papers
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/registration"
              className="flex items-center rounded-lg bg-gradient-to-r from-green-600 to-blue-600 px-8 py-4 text-white shadow-lg transition hover:opacity-90"
            >
              <Globe className="mr-2" />
              Register Now
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Marquee */}
      <motion.div
        className="absolute bottom-0 w-full bg-gray-900 py-3"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
  className="flex items-center space-x-8 text-sm font-medium text-white md:text-base"
  animate={{ x: ["100%", "-100%"] }}
  transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
>
  <span>The after-conference proceeding of the ICCCT 2025 will be published in SCOPUS indexed Springer Book Series, ‘ACSRA  - Advanced computer science Research and application’</span>
</motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;