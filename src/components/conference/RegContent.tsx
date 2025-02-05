import { Link, useLocation } from "react-router-dom"; // React Router imports
import { FaFileAlt, FaRegFilePdf, FaClipboardList, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const RegContent = () => {
  const location = useLocation();

  const menuItems = [
    { name: "CALL FOR PAPERS", path: "/cfp", icon: <FaFileAlt className="mr-3 text-xl" /> },
    { name: "SUBMISSION", path: "/submission", icon: <FaRegFilePdf className="mr-3 text-xl" /> },
    { name: "REGISTRATION", path: "/registration", icon: <FaClipboardList className="mr-3 text-xl" /> },
    { name: "CONFERENCE VENUE", path: "/venue", icon: <FaMapMarkerAlt className="mr-3 text-xl" /> },
    { name: "PROGRAM", path: "/program", icon: <FaCalendarAlt className="mr-3 text-xl" /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-full sm:w-80 hidden sm:block min-h-screen bg-white border-r border-gray-300 p-6 space-y-4 shadow-md flex flex-col sticky top-0">
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
              <td className="border border-gray-300 px-4 py-2">$550</td>
              <td className="border border-gray-300 px-4 py-2">$580</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">Authors (Committees/Reviewers)</td>
              <td className="border border-gray-300 px-4 py-2">$580</td>
              <td className="border border-gray-300 px-4 py-2">$600</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">Authors (Regular)</td>
              <td className="border border-gray-300 px-4 py-2">$650</td>
              <td className="border border-gray-300 px-4 py-2">$670</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">Presentation Only (Abstract)</td>
              <td className="border border-gray-300 px-4 py-2">$380</td>
              <td className="border border-gray-300 px-4 py-2">$400</td>
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
  );
};

export default RegContent;
