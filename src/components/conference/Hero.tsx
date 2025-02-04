import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative flex justify-center items-center h-screen bg-gray-900 overflow-hidden">
      {/* Image Slider */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>

      {/* Navigation Icons */}
      <div className="absolute inset-0 flex justify-between items-center px-4">
        <FaChevronLeft
          className="text-white text-4xl cursor-pointer hover:text-gray-400 transition-colors"
          onClick={prevSlide}
        />
        <FaChevronRight
          className="text-white text-4xl cursor-pointer hover:text-gray-400 transition-colors"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default Hero;