import React, { useCallback } from 'react';
import { Button } from "@/components/ui/button";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const Hero = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black bg-opacity-50 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="/confr.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Particle Effect */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: { color: "#ffffff", distance: 120, enable: true, opacity: 0.5, width: 1 },
            move: { enable: true, speed: 1, outModes: { default: "bounce" } },
            number: { density: { enable: true, area: 800 }, value: 60 },
            opacity: { value: 0.6 },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-10 pointer-events-none"
      />

      {/* Main Content */}
      <div className="relative z-20 text-center text-white max-w-4xl px-6 py-12 bg-black bg-opacity-40 rounded-xl shadow-lg">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-snug">
          International Conference on{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Sustainable Digital Transformation
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          August 6, 2025 • Nilai, Malaysia
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transform hover:scale-105 transition-transform"
          >
            Register Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-black hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg shadow-md transform hover:scale-105 transition-transform"
          >
            Submit Paper
          </Button>
        </div>
      </div>
    </div>
  );
};
