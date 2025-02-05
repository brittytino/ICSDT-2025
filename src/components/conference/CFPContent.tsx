import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { FaBars } from "react-icons/fa";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { FileText } from "lucide-react";
import { FaFileAlt, FaRegFilePdf, FaMapMarkerAlt, FaClipboardList, FaCalendarAlt } from "react-icons/fa";

const topics = [
  {
    title: "Information Management & Systems",
    items: [
      "Business strategies & IS",
      "Knowledge-based systems",
      "Big data & analytics",
      "Blockchain & Metaverse",
      "E-Commerce & Digital Business",
      "Software Engineering & IT Security",
    ],
  },
  {
    title: "Marketing Intelligence & Digital Marketing",
    items: [
      "Social media marketing",
      "AI in marketing",
      "Marketing analytics",
      "Digital marketing & strategies",
    ],
  },
  {
    title: "Information Systems & Technology",
    items: [
      "Tourism management",
      "Business Administration",
      "Web Technology & Innovation",
      "Financial & Banking Systems",
    ],
  },
  {
    title: "E-Business Engineering & Management",
    items: [
      "E-Commerce Models & Applications",
      "Workflows & Transactions",
      "Mobile Commerce & Security",
      "Open Source in Business",
    ],
  },
  {
    title: "Green Marketing & Sustainable Business",
    items: [
      "Sustainable business strategies",
      "Green marketing & innovation",
      "Digital sustainability trends",
    ],
  },
  {
    title: "Human Resources & Digital HR",
    items: [
      "ICT & HR Management",
      "Social media & recruitment",
      "Digital HR strategies",
    ],
  },
  {
    title: "Metaverse & Business",
    items: [
      "Metaverse for business & industries",
      "Metaverse analytics & case studies",
    ],
  },
];

export default function CallForPapers() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const calendarDates = [
    { event: "Submission Deadline", date: "February 1st, 2025" },
    { event: "Notification Date", date: "February 20th, 2025" },
    { event: "Registration Deadline", date: "March 01st, 2025" },
    { event: "Camera Ready", date: "March 01st, 2025" },
    { event: "Conference Dates", date: "March 28th-30th, 2025" },
  ];

  const menuItems = [
    { name: "CALL FOR PAPERS", icon: <FaFileAlt className="mr-2" />, link: "/cfp" },
    { name: "SUBMISSION", icon: <FaRegFilePdf className="mr-2" />, link: "/submission" },
    { name: "REGISTRATION", icon: <FaClipboardList className="mr-2" />, link: "/registration" },
    { name: "CONFERENCE VENUE", icon: <FaMapMarkerAlt className="mr-2" />, link: "/venue" },
    { name: "PROGRAM", icon: <FaCalendarAlt className="mr-2" />, link: "/program" },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="lg:w-80 w-full bg-white border-r border-gray-300 p-6 space-y-4 shadow-md flex flex-col sticky top-0 lg:block hidden">
        {menuItems.map((item) => (
          <Link key={item.name} to={item.link}>
            <div
              className={`flex items-center p-3 cursor-pointer text-gray-700 hover:bg-blue-100 hover:text-blue-800 rounded-lg transition-all duration-300 ease-in-out font-medium text-lg ${
                location.pathname === item.link ? "bg-blue-50 text-blue-700 font-semibold" : ""
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
      <div className="lg:w-full w-full px-6 py-10 flex flex-col items-center">
        <div className="max-w-3xl w-full space-y-6">
          <div className="flex justify-between items-center w-full">
            <h1 className="text-3xl font-bold text-gray-900">Call for Papers</h1>
            
          </div>

          <Accordion type="single" collapsible>
            {topics.map((session, index) => (
              <AccordionItem key={index} value={session.title}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">{session.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      {session.items.map((topic, i) => (
                        <li key={i}>{topic}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Calendar Dates */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Important Dates</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Event</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {calendarDates.map((date, index) => (
                    <TableRow key={index}>
                      <TableCell>{date.event}</TableCell>
                      <TableCell>{date.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
