import { Link, useLocation } from "react-router-dom"; // React Router imports
import { FaFileAlt, FaRegFilePdf, FaClipboardList, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

const RegContent = () => {
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
      <main className="flex-1 p-6 sm:p-8 space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Registration</h1>
        <p className="mt-4 text-lg text-gray-700">
          All attendees participating in ANY session, event, meeting, social, or workshop, including presenters and discussants, MUST be registered to attend.
        </p>
        
        <h2 className="mt-6 text-2xl font-semibold text-gray-900">Registration Fee</h2>
        <p className="text-gray-700">
          We accept online payments via Credit Card (Mastercard & Visa), Alipay, UnionPay, and WeChat Pay.
        </p>

        <table className="mt-6 w-full border-collapse border border-gray-300 text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-200 text-gray-900">
              <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Early Registration</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Regular Registration</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">Authors (Students)</td>
              <td className="border border-gray-300 px-4 py-2">₹1500</td>
              <td className="border border-gray-300 px-4 py-2">₹2000</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">Authors (Research Scholar/Faculty)</td>
              <td className="border border-gray-300 px-4 py-2">₹3000</td>
              <td className="border border-gray-300 px-4 py-2">₹3500</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">Authors (Industrial)</td>
              <td className="border border-gray-300 px-4 py-2">₹7000</td>
              <td className="border border-gray-300 px-4 py-2">₹7500</td>
            </tr>
          </tbody>
        </table>

        <h2 className="mt-6 text-2xl font-semibold text-gray-900">Registration Policy</h2>
        <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-2">
          <li>The first author must attend, or a co-author must pay the full registration fee.</li>
          <li>All attending authors must register individually.</li>
          <li>Students must provide a valid student ID.</li>
          <li>Regular registration includes TEN pages; extra pages incur additional charges.</li>
        </ul>

        <h2 className="mt-6 text-2xl font-semibold text-gray-900">Refund/Cancellation Policy</h2>
        <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-2">
          <li>90+ days before event: 70% refund</li>
          <li>60-90 days before event: 50% refund</li>
          <li>30-60 days before event: 30% refund</li>
          <li>Less than 30 days before event: No refund</li>
        </ul>
      </main>
    </div>
    </div>
  );
};

export default RegContent;
