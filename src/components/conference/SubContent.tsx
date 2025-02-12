import { Link, useLocation } from "react-router-dom";  // React Router imports
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { FaFileAlt, FaRegFilePdf, FaMapMarkerAlt, FaClipboardList, FaCalendarAlt } from "react-icons/fa";

export default function SubContent() {
    const location = useLocation();  // Use location to check the active route
    
    const calendarDates = [
      { event: "Submission Deadline", date: "01 June, 2025" },
      { event: "Notification Date", date: "20 May, 2025" },
      { event: "Registration Deadline", date: "12 June, 2025" },
      { event: "Camera Ready", date: "15 July, 2025" },
      { event: "Conference Dates", date: "06, August 2025" },
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
        <div className="flex-1 p-6 sm:p-8 lg:p-10 space-y-6 lg:space-y-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Submission</h1>
  
          {/* Card for submission methods */}
          <Card>
            <CardHeader>
              <CardTitle>1. Submission Methods</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Please log in the{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Electronic Submission System
                </a>{" "}
                (.pdf only) to submit your full paper and abstract.
              </p>
              <p className="mt-2 text-gray-700">
                For any inquiry about the conference, please contact us at:{" "}
                <a href="mailto:icdct@gmail.com" className="text-blue-600 hover:underline">
                  icdct@gmail.com
                </a>
              </p>
            </CardContent>
          </Card>
  
          {/* Card for formatting */}
          <Card>
            <CardHeader>
              <CardTitle>2. Formatting Your Paper</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Prospective authors are invited to submit their draft paper. Submitted papers should not have been
                previously published nor be currently under consideration for presentation or publication elsewhere.
              </p>
              <ul className="list-decimal pl-5 space-y-2 text-gray-700">
                <li>Paper Length: (Short papers: 8-11 pages | Full papers: 12-15 pages)</li>
                <li>Do NOT Use footers, headers and page numbers.</li>
                <li>
                  The first page must include: Title of the paper; Name, affiliation, E-mail address for each author;
                  keywords.
                </li>
              </ul>
            </CardContent>
          </Card>
  
          {/* Review Process Card */}
          <Card>
            <CardHeader>
              <CardTitle>Reviewing Process</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                <li>
                  All manuscripts will be subjected to blind peer-reviewing and are expected to meet scientific
                  criteria of novelty and academic excellence.
                </li>
                <li>
                  The corresponding author is responsible for ensuring that the article's publication has been approved by
                  all other co-authors and takes responsibility for the paper during submission and peer review.
                </li>
                <li>
                  Review comments will be communicated to you and you may require to do necessary revisions and send
                  revised paper on or before prescribed day.
                </li>
              </ol>
            </CardContent>
          </Card>
  
          {/* Dual Submission Card */}
          <Card>
            <CardHeader>
              <CardTitle>Dual Submission Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Submissions that are identical (or substantially similar) to versions that have been previously published,
                or accepted for publication, or that have been submitted in parallel to other conferences or journals, are
                not allowed and violate our dual submission policy.
              </p>
            </CardContent>
          </Card>
  
          {/* Calendar Card */}
          <Card>
            <CardHeader>
              <CardTitle>ICSDT Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">Event</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {calendarDates.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.event}</TableCell>
                      <TableCell>{item.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <div className="flex justify-center">
    <a href="/registration" className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg shadow-md hover:bg-yellow-600 transition">
      Submit Now
    </a>
  </div><br></br>
          </Card>
        </div>
      </div>
    );
  }
  