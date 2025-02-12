import { Link, useLocation } from "react-router-dom"; // React Router imports
import { FaFileAlt, FaRegFilePdf, FaClipboardList, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const SpContent = () => {
  const location = useLocation();

  const menuItems = [
    { name: "CALL FOR PAPERS", path: "/cfp", icon: <FaFileAlt className="mr-3 text-xl" /> },
    { name: "SUBMISSION", path: "/submission", icon: <FaRegFilePdf className="mr-3 text-xl" /> },
    { name: "REGISTRATION", path: "/registration", icon: <FaClipboardList className="mr-3 text-xl" /> },
    { name: "CONFERENCE VENUE", path: "/venue", icon: <FaMapMarkerAlt className="mr-3 text-xl" /> },
    { name: "PROGRAM", path: "/program", icon: <FaCalendarAlt className="mr-3 text-xl" /> },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="lg:w-80 w-full bg-white border-r border-gray-300 p-6 space-y-4 shadow-md flex flex-col sticky top-0 lg:block hidden">
        {menuItems.map((item) => (
          <Link key={item.name} to={item.path}>
            <div
              className={`flex items-center p-3 cursor-pointer text-gray-700 hover:bg-blue-100 hover:text-blue-800 rounded-lg transition-all duration-300 ease-in-out font-medium text-lg ${
                location.pathname === item.path ? "bg-blue-50 text-blue-700 font-semibold" : ""
              }`}
            >
              {item.icon}
              {item.name}
            </div>
          </Link>
        ))}

        <div className="mt-auto space-y-4 border-t pt-6">
          <h3 className="font-semibold text-lg text-gray-900">Download Brochure</h3>
          <p className="text-sm text-gray-600">Here are some useful documents</p>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start flex items-center gap-2 text-gray-700 border-gray-300 hover:bg-gray-100">
              <FileText className="h-5 w-5 text-gray-600" /> DOWNLOAD TEMPLATE (WORD)
            </Button>
            <Button variant="outline" className="w-full justify-start flex items-center gap-2 text-gray-700 border-gray-300 hover:bg-gray-100">
              <FileText className="h-5 w-5 text-gray-600" /> DOWNLOAD TEMPLATE (LATEX)
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6 sm:p-8 space-y-6">
        <p>Coming Soon...</p>
       
      </main>
    </div>
  );
};

export default SpContent;
