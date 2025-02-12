import { Link, useLocation } from "react-router-dom"; // React Router imports
import { FaFileAlt, FaRegFilePdf, FaClipboardList, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card"; // Adjust the import path as necessary
import { FileText } from "lucide-react";

const ProgContent = () => {
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
      <div className="container mx-auto py-12 px-4 md:px-8">
     

      <div className="bg-gray-50 rounded-lg p-8 shadow-lg space-y-8">
        <h3 className="text-2xl font-semibold text-gray-700 text-center">Program at a Glance</h3>

        {/* Friday */}
        <Card className="bg-white shadow-md rounded-lg p-6">
          <CardHeader>
            <h4 className="text-xl font-bold text-indigo-600">Wednesday | 06, August 2025</h4>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex justify-between text-gray-700">
                <span>10:00-16:00</span>
                <span>Sign-in and Conference Kit Collection</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Saturday */}
        <Card className="bg-white shadow-md rounded-lg p-6">
          <CardHeader>
            <h4 className="text-xl font-bold text-indigo-600">Wednesday | 06, August 2025</h4>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex justify-between text-gray-700">
                <span>9:00-9:05</span>
                <span>Opening Remark by Prof. Shuliang Li</span>
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
                <span>Session 1 for Onsite Participants</span>
              </li>
              <li className="flex justify-between text-gray-700">
                <span>13:00-14:45</span>
                <span>Session 2 - Data Science and Computational Analytics</span>
              </li>
              <li className="flex justify-between text-gray-700">
                <span>13:00-14:45</span>
                <span>Session 4 - Science Technology and Management</span>
              </li>
              <li className="flex justify-between text-gray-700">
                <span>15:00-17:00</span>
                <span>Session 3 - Intelligent Information System and Management</span>
              </li>
              <li className="flex justify-between text-gray-700">
                <span>15:00-17:00</span>
                <span>Session 5 - Enterprise Operation and Management</span>
              </li>
              <li className="flex justify-between text-gray-700">
                <span>17:30-18:30</span>
                <span>Dinner</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Sunday */}
        <Card className="bg-white shadow-md rounded-lg p-6">
          <CardHeader>
            <h4 className="text-xl font-bold text-indigo-600">Wednesday | 06, August 2025</h4>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex justify-between text-gray-700">
                <span>9:00-9:45</span>
                <span>Keynote Speaker IV</span>
              </li>
              <li className="flex justify-between text-gray-700">
                <span>9:45-10:30</span>
                <span>Keynote Speech V</span>
              </li>
              <li className="flex justify-between text-gray-700">
                <span>10:45-12:45</span>
                <span>Session 6 - Talent Training and Engineering Education</span>
              </li>
              <li className="flex justify-between text-gray-700">
                <span>13:00-14:45</span>
                <span>Session 7 - International Economy and Trading</span>
              </li>
              <li className="flex justify-between text-gray-700">
                <span>13:00-14:45</span>
                <span>Session 8 - Commodity Economics and Services</span>
              </li>
              <li className="flex justify-between text-gray-700">
                <span>15:00-16:45</span>
                <span>Session 9 - Industrial Production and Management</span>
              </li>
              <li className="flex justify-between text-gray-700">
                <span>15:00-16:45</span>
                <span>Session 10 - Industrial Manufacturing and Logistics</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
      </main>
    </div>
  );
};

export default ProgContent;
