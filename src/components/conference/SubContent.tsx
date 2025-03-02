import { Link, useLocation } from "react-router-dom";  // React Router imports
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { FaFileAlt, FaRegFilePdf, FaMapMarkerAlt, FaClipboardList, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export default function SubContent() {
    const location = useLocation();  // Use location to check the active route
    
    const calendarDates = [
      { event: "Submission Deadline", date: "02 May, 2025" },
      { event: "Acceptance Notification Date", date: "15 June, 2025" },
      { event: "Camera Ready", date: "5 July, 2025" },
      { event: "Conference Dates", date: "06, August 2025" },
    ];
  
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
                <a href="mailto:springerconference@srcas.ac.in" className="text-blue-600 hover:underline">
                springerconference@srcas.ac.in
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
            <a href="mailto:springerconference@srcas.ac.in" className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg shadow-md hover:bg-yellow-600 transition">
  Submit Now
</a>
  </div><br></br>
          </Card>
        </div>
      </div>
      </div>
    );
  }
  