import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4 md:px-8">
        
        {/* Left Section - Conference Name */}
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-xl font-bold text-white tracking-wide">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              ICSDT 2025
            </span>
          </h3>
          <p className="text-sm opacity-80">
            International Conference on Sustainable Digital Transformation
          </p>
        </div>

        {/* Center - Venue & Contact */}
        <div className="flex flex-col space-y-2 text-sm text-center md:text-left">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-blue-400" />
            <span>INTI UNIVERSITY, Nilai, Malaysia</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4 text-red-400" />
            <a href="mailto:springerconference@srcas.ac.in" className="hover:text-white transition">
            springerconference@srcas.ac.in
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4 text-green-400" />
            <span>+91 98430 99676</span>
            <Phone className="h-4 w-4 text-green-400" />
            <span>+91 99522 73425</span>
          </div>
        </div>

        {/* Right Section - Socials & Organizer */}
        <div className="flex flex-col space-y-2 items-center md:items-end">
          <p className="text-sm opacity-80">Organized by</p>
          <p className="text-sm text-white font-medium">
            Sri Ramakrishna College of Arts & Science <br />
            In association with INTI UNIVERSITY Malaysia
          </p>
          <div className="flex space-x-3 mt-2">
            <Button variant="ghost" size="icon" className="hover:bg-white/10 rounded-full">
              <Mail className="h-5 w-5 text-white" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-white/10 rounded-full">
              <Globe className="h-5 w-5 text-white" />
            </Button>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-6 text-center text-xs opacity-70 border-t border-gray-700 pt-4">
      <a href="https://tinobritty.tech"> © 2025 All rights reserved :)</a>
      </div>
    </footer>
  );
};

export default Footer;
