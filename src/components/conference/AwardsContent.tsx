import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FaFileAlt, FaRegFilePdf, FaClipboardList, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Globe2, Users, BookOpen, Menu } from "lucide-react";
import { Medal, Trophy, Award, Star } from "lucide-react";

const AwardsContent = () => {
  const location = useLocation();




  const menuItems = [
    { name: "Call for Papers", path: "/cfp", icon: <FaFileAlt className="text-lg" /> },
    { name: "Submission", path: "/submission", icon: <FaRegFilePdf className="text-lg" /> },
    { name: "Registration", path: "/registration", icon: <FaClipboardList className="text-lg" /> },
    { name: "Venue", path: "/venue", icon: <FaMapMarkerAlt className="text-lg" /> },
    { name: "Program", path: "/program", icon: <FaCalendarAlt className="text-lg" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <Button className="rounded-full p-4 shadow-xl h-14 w-14" asChild>
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <motion.aside 
          className="lg:w-80 w-full bg-white border-r border-gray-100 lg:p-8 p-6 space-y-4 shadow-xl lg:sticky lg:top-0 lg:h-screen"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
        >
          <div className="space-y-6">
            {menuItems.map((item) => (
              <Link key={item.name} to={item.path}>
                <motion.div
                  whileHover={{ x: 5 }}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                    location.pathname === item.path 
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg"
                      : "hover:bg-blue-50 text-gray-700"
                  }`}
                >
                  <span className="text-blue-500">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="mt-12 space-y-6 border-t pt-8">
            <h3 className="text-lg font-bold text-gray-900">Resources</h3>
            <div className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full justify-start gap-3 rounded-xl py-5 border-blue-100 hover:border-blue-200 bg-white hover:bg-blue-50"
              >
                <FileText className="h-5 w-5 text-blue-600" />
                <div className="text-left">
                  <p className="font-medium">Download Template</p>
                  <p className="text-sm text-gray-500">Microsoft Word</p>
                </div>
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start gap-3 rounded-xl py-5 border-blue-100 hover:border-blue-200 bg-white hover:bg-blue-50"
              >
                <FileText className="h-5 w-5 text-blue-600" />
                <div className="text-left">
                  <p className="font-medium">Download Template</p>
                  <p className="text-sm text-gray-500">LaTeX</p>
                </div>
              </Button>
            </div>
          </div>
        </motion.aside>

        {/* Main Content */}
        <main className="flex-1 lg:p-12 p-6">
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
       
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Award Card */}
          <div className="relative bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="absolute top-4 right-4">
              <svg 
                className="w-12 h-12 text-amber-600"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Best Paper Awards
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Recognition of outstanding research contributions across various tracks. Winners will receive:
            </p>
            
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <svg 
                  className="w-5 h-5 text-amber-600 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
                Prestigious appreciation certificate
              </li>
              <li className="flex items-center">
                <svg 
                  className="w-5 h-5 text-amber-600 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
                Special conference privileges
              </li>
              <li className="flex items-center">
                <svg 
                  className="w-5 h-5 text-amber-600 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
                Exclusive publication opportunities
              </li>
            </ul>
            
            <div className="mt-6 border-t border-amber-100 pt-4">
              <p className="text-sm text-amber-700">
                * Awards will be given track-wise for comprehensive recognition
              </p>
            </div>
          </div>

          {/* Repeat similar blocks for other award categories if needed */}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">
            "Celebrating excellence in computer science and digital technology research"
          </p>
        </div>
      </div>
    </section>
        </main>
      </div>
    </div>
  );
};

export default AwardsContent;