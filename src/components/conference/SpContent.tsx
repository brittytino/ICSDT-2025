import { Link, useLocation } from "react-router-dom"; // React Router imports
import { FaFileAlt, FaRegFilePdf, FaClipboardList, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone } from "lucide-react";

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
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <Card className="w-full max-w-4xl rounded-2xl shadow-xl bg-white">
        <CardHeader className="flex flex-col items-center text-center">
          <img
            src="/tengku.jpeg"
            alt="Prof. Emeritus Dato' Ts. Dr. Tengku Mohd Bin Tengku Sembok"
            className="w-32 h-32 rounded-full border-4 border-gray-300 object-cover"
          />
          <CardTitle className="mt-4 text-2xl font-semibold text-gray-800">
            Prof. Emeritus Dato' Ts. Dr. Tengku Mohd Bin Tengku Sembok
          </CardTitle>
          <p className="text-gray-600">Professor, IIUM Gombak Campus</p>
          <p className="text-gray-500">Kulliyyah of Information and Communication Technology</p>
          <div className="flex gap-2 mt-3">
            <Badge variant="outline">Computation Theory</Badge>
            <Badge variant="outline">AI & NLP</Badge>
            <Badge variant="outline">Information Retrieval</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="text-lg font-semibold">Specializations</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Computation Theory & Algorithm Analysis</li>
                <li>Artificial Intelligence & Natural Language Processing</li>
                <li>Computational Linguistics & Semantics</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Academic Qualifications</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>PhD in Computer Science - Glasgow University</li>
                <li>MS in Computer Science - Iowa University</li>
                <li>PostGrad Diploma in Islamic Studies - UKM</li>
                <li>BSc in Computer Science - Brighton University</li>
                <li>Diploma in Computer Science - MARA Institute of Technology</li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="mailto:tmts@iium.edu.my"
                className="flex items-center gap-2 text-blue-600 hover:underline"
              >
                <Mail size={18} /> tmts@iium.edu.my
              </a>
              <span className="flex items-center gap-2 text-gray-600">
                <Phone size={18} /> 6435
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
       
      </main>
    </div>
  );
};

export default SpContent;
