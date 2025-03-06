import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Globe, Calendar } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.freepik.com/free-photo/view-landmark-asian-sky-reflection_1417-266.jpg?t=st=1741245451~exp=1741249051~hmac=5a62aaaee34d1d7b9906f589ef6b0e024b807c6f9dbceaac789c96cd420a2dfc&w=2000"
          alt="Modern building"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
      </div>

      {/* Main Content */}
      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 pt-16 pb-24 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          {/* Conference Title Banner - ENLARGED as requested */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 inline-block"
          >
            <div className="text-lg font-bold text-white/95 md:text-xl lg:text-2xl">
              <span className="inline-block rounded-full bg-white/15 px-6 py-3 shadow-lg backdrop-blur-md border border-white/10">
                3rd International Conference on
              </span>
            </div>
          </motion.div>
          
          {/* Main Title with Gradient */}
          <h1 className="text-4xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
            Sustainable Digital
            <span className="block bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
              Transformation 2025
            </span>
          </h1>

          {/* Date and Mode Info */}
          <div className="my-8 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center rounded-full bg-white/15 px-6 py-3 shadow-md backdrop-blur-md border border-white/10 transition-all hover:bg-white/20">
              <Calendar className="mr-2 h-5 w-5 text-blue-300" />
              <span className="font-semibold text-white">6th August 2025</span>
            </div>
            <div className="flex items-center rounded-full bg-white/15 px-6 py-3 shadow-md backdrop-blur-md border border-white/10 transition-all hover:bg-white/20">
              <Globe className="mr-2 h-5 w-5 text-green-300" />
              <span className="font-semibold text-white">In-Person / Online Hybrid Mode Conference</span>
            </div>
          </div>

          {/* Logos Section */}
          <div className="my-10 flex flex-col items-center gap-6 md:flex-row md:justify-center">
            <motion.div 
              whileHover={{ y: -5 }}
              className="rounded-xl bg-white/90 p-4 shadow-lg backdrop-blur-md"
            >
              <img
                src="/srcas.png"
                alt="SRCAS"
                className="h-12 object-contain md:h-16 lg:h-20"
              />
            </motion.div>
            <div className="text-xl font-bold text-white/90 md:mx-4">in association with</div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="rounded-xl bg-white/90 p-4 shadow-lg backdrop-blur-md"
            >
              <img
                src="/inti1.png"
                alt="INTI"
                className="h-12 object-contain md:h-16 lg:h-20"
              />
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              href="/cfp"
              className="flex items-center rounded-lg bg-blue-600/90 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all hover:bg-blue-700 backdrop-blur-md"
            >
              <Sparkles className="mr-3 h-5 w-5" />
              Call For Papers
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              href="/registration"
              className="flex items-center rounded-lg bg-gradient-to-r from-green-600/90 to-blue-600/90 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all hover:opacity-90 backdrop-blur-md"
            >
              <Globe className="mr-3 h-5 w-5" />
              Register Now
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Marquee with Publication Info */}
      <motion.div
        className="absolute bottom-0 z-20 w-full bg-black/80 py-4 backdrop-blur-md border-t border-white/10"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex items-center space-x-8 text-sm font-medium text-white/90 md:text-base"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          <span>The after-conference proceeding of the ICCCT 2025 will be published in SCOPUS indexed Springer Book Series, 'ACSRA  - Advanced computer science Research and application'</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;