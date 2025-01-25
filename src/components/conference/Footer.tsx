import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-secondary to-accent text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              ICSDT 2025
            </h3>
            <p className="text-sm opacity-90">
              International Conference on<br />
              Sustainable Digital Transformation
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/20">
                <Mail className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/20">
                <Globe className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-xl">Venue</h3>
            <div className="flex items-start space-x-3 text-sm opacity-90">
              <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
              <p>
                INTI UNIVERSITY<br />
                Nilai, Malaysia
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-xl">Contact</h3>
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <a href="mailto:mariaprisiclla@srcas.ac.in" className="hover:underline">
                  mariaprisiclla@srcas.ac.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span>+91 98431 69009</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-xl">Organized By</h3>
            <p className="text-sm opacity-90">
              Sri Ramakrishna College of Arts & Science<br />
              In association with<br />
              INTI UNIVERSITY Malaysia
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/20 text-center">
          <p className="text-sm opacity-80">
            © 2025 ICSDT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};