import { Link, useLocation } from "react-router-dom"; // React Router imports
import { FaFileAlt, FaRegFilePdf, FaClipboardList, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card"; // Adjust the import path as necessary
import { FileText } from "lucide-react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";


const ProgContent = () => {
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
    <a href="/public/conference-template.docx" download className="block">
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
    </a>
    <a href="/public/templates/conference-latex-template.zip" download className="block mt-3">
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
    </a>
  </div>
</div>
        </motion.aside>

      {/* Main Content */}
      <main className="flex-1 p-6 sm:p-8 space-y-6">
      <div className="container mx-auto py-12 px-4 md:px-8">
     

      <div className="bg-gray-50 rounded-lg p-8 shadow-lg space-y-8">
        <h3 className="text-2xl font-semibold text-gray-700 text-center">Program at a Glance</h3>

      

        {/* Saturday */}
        <Card className="bg-white shadow-md rounded-lg p-6">
          <CardHeader>
            <h4 className="text-xl font-bold text-indigo-600">Wednesday | 06, August 2025</h4>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex justify-between text-gray-700">
                <span>9:00-9:05</span>
                <span>Opening Remark </span>
              </li>
              <li className="flex justify-between text-gray-700">
                <span>9:05-9:50</span>
                <span>Keynote Speaker I</span>
              </li>
              <li className="flex justify-between text-gray-700">
                <span>9:50-10:10</span>
                <span>Coffee Break and Group Photo</span>
              </li>
              <li className="flex justify-between text-gray-700">
                <span>10:10-10:55</span>
                <span>Keynote Speaker II</span>
              </li>
              <li className="flex justify-between text-gray-700">
                <span>10:55-11:40</span>
                <span>Keynote Speaker III</span>
              </li>
              <li className="flex justify-between text-gray-700">
                <span>12:00-13:30</span>
                <span>Lunch</span>
              </li>
              <li className="flex justify-between text-gray-700">
                <span>13:30-16:30</span>
                <span>Session 1 </span>
              </li>
              <li className="flex justify-between text-gray-700">
                <span>13:00-14:45</span>
                <span>Session 2 </span>
              </li>
              <li className="flex justify-between text-gray-700">
                <span>13:00-14:45</span>
                <span>Session 3 </span>
              </li>
              <li className="flex justify-between text-gray-700">
                <span>15:00-17:00</span>
                <span>Session 4 </span>
              </li>
              
            </ul>
          </CardContent>
        </Card>

 
      </div>
    </div>
      </main>
    </div></div>
  );
};

export default ProgContent;
