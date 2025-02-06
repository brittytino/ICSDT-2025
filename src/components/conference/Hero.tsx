import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Star, Circle } from "lucide-react";

export const Hero = () => {
  const [currentColor, setCurrentColor] = useState(0);
  const colors = [
    "bg-gradient-to-r from-black via-red-900 to-black",
    "bg-gradient-to-r from-black via-green-900 to-black",
    "bg-gradient-to-r from-black via-blue-900 to-black",
    "bg-gradient-to-r from-black via-pink-900 to-black",
    "bg-gradient-to-r from-black via-yellow-900 to-black",
    "bg-gradient-to-r from-black via-purple-900 to-black",
    "bg-gradient-to-r from-black via-teal-900 to-black",
    "bg-gradient-to-r from-black via-orange-900 to-black",
    "bg-gradient-to-r from-black via-indigo-900 to-black",
    "bg-gradient-to-r from-black via-cyan-900 to-black",
    "bg-gradient-to-l from-black via-red-900 to-black",
    "bg-gradient-to-l from-black via-green-900 to-black",
    "bg-gradient-to-l from-black via-blue-900 to-black",
    "bg-gradient-to-l from-black via-pink-900 to-black",
    "bg-gradient-to-l from-black via-yellow-900 to-black",
    "bg-gradient-to-l from-black via-purple-900 to-black",
    "bg-gradient-to-l from-black via-teal-900 to-black",
    "bg-gradient-to-l from-black via-orange-900 to-black",
    "bg-gradient-to-l from-black via-indigo-900 to-black",
    "bg-gradient-to-l from-black via-cyan-900 to-black",
    "bg-gradient-to-t from-black via-red-900 to-black",
    "bg-gradient-to-t from-black via-green-900 to-black",
    "bg-gradient-to-t from-black via-blue-900 to-black",
    "bg-gradient-to-t from-black via-pink-900 to-black",
    "bg-gradient-to-t from-black via-yellow-900 to-black",
    "bg-gradient-to-t from-black via-purple-900 to-black",
    "bg-gradient-to-t from-black via-teal-900 to-black",
    "bg-gradient-to-t from-black via-orange-900 to-black",
    "bg-gradient-to-t from-black via-indigo-900 to-black",
    "bg-gradient-to-t from-black via-cyan-900 to-black",
    "bg-gradient-to-b from-black via-red-900 to-black",
    "bg-gradient-to-b from-black via-green-900 to-black",
    "bg-gradient-to-b from-black via-blue-900 to-black",
    "bg-gradient-to-b from-black via-pink-900 to-black",
    "bg-gradient-to-b from-black via-yellow-900 to-black",
    "bg-gradient-to-b from-black via-purple-900 to-black",
    "bg-gradient-to-b from-black via-teal-900 to-black",
    "bg-gradient-to-b from-black via-orange-900 to-black",
    "bg-gradient-to-b from-black via-indigo-900 to-black",
    "bg-gradient-to-b from-black via-cyan-900 to-black",
];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColor((prevColor) => (prevColor + 1) % colors.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative flex flex-col justify-center items-center h-[80vh] md:h-screen pt-16 md:pt-0 overflow-hidden transition-opacity duration-1000 ease-in-out ${colors[currentColor]}`}
    >
      {/* Floating Elements */}
      {[...Array(12)].map((_, i) => {
        const icons = [Sparkles, Star, Circle];
        const Icon = icons[Math.floor(Math.random() * icons.length)];
        return (
          <motion.div
            key={i}
            className="absolute text-white opacity-50"
            initial={{
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100,
            }}
            animate={{
              y: ["-30px", "30px", "-30px"],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ repeat: Infinity, duration: 3 + Math.random() * 2 }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            <Icon className="h-6 w-6 text-yellow-400" />
          </motion.div>
        );
      })}

      {/* Hero Text */}
      <div className="text-center z-10 p-6">
        <motion.h1
          className="text-4xl md:text-7xl font-bold text-white drop-shadow-lg tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ICSDT 2025
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-white mt-4 drop-shadow-md max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          International Conference on Sustainable Digital Transformation
        </motion.p>

        {/* Call-to-Action Buttons */}
        <div className="mt-6 flex gap-4 justify-center">
        <a href="/cfp" className="px-6 py-3 bg-white text-black font-bold rounded-lg shadow-md hover:bg-gray-200 transition">
          Call For Paper
        </a>
        <a href="/registration" className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg shadow-md hover:bg-yellow-600 transition">
          Register Now
        </a>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="absolute bottom-0 w-full overflow-hidden bg-black py-3">
        <motion.div
          className="inline-block text-white text-lg font-semibold whitespace-nowrap"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          🚀 Welcome to ICSDT 2025! | 🌱 Explore sustainable digital transformation | 🔥 Network with industry leaders | 📢 Gain insights from top experts | 🌍 Join us in shaping the future! | 🏆 Best Paper Awards | 🎤 Keynote Speakers from top universities & companies | 🌟 Hands-on Workshops | 🎓 Exclusive Research Presentation Sessions
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;