import React from "react";

const Venue: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center text-black py-12 px-6">
      {/* Page Header */}
      <p className="text-lg text-black-300 mb-8 text-center">
        Join us at the prestigious <span className="text-black font-semibold">INTI International University, Nilai, Malaysia</span>, a hub of academic excellence and innovation.
      </p>

      {/* Venue Image */}
      <div className="w-full max-w-4xl">
        <img
          src="https://www.easyuni.in/media/institution/photo/2018/03/09/thumbs/inti.jpg.1150x500_q85.webp"
          alt="INTI International University, Malaysia"
          className="rounded-lg shadow-lg w-full"
        />
      </div>

      {/* Venue Details Section */}
      <div className="mt-8  text-black p-6 rounded-lg shadow-lg max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4 text-[#c81616]">About the Venue</h2>
        <p className="text-lg leading-relaxed">
          INTI International University, located in <strong>Nilai, Malaysia</strong>, is a renowned educational institution known for its commitment to academic excellence and cutting-edge research.
        </p>
        <ul className="list-disc pl-6 mt-4 text-lg">
          <li>State-of-the-art conference halls and auditoriums</li>
          <li>Modern infrastructure with high-speed internet</li>
          <li>Surrounded by lush greenery and a serene environment</li>
          <li>Convenient access to Kuala Lumpur International Airport (KLIA)</li>
        </ul>
      </div>

      {/* Additional Info */}
      <div className="mt-6 max-w-4xl text-center">
        <p className="text-lg text-black-300">
          Experience a world-class venue with top-notch facilities, making it the perfect location for <span className="text-white font-semibold">ICSDT 2025</span>.
        </p>
      </div>
    </div>
  );
};

export default Venue;