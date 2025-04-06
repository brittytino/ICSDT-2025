import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Cloud, Cpu, Database, Globe, BookOpen, Calendar, FileText, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { FaFileAlt, FaRegFilePdf, FaClipboardList, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

export default function CallForPapers() {
  const calendarDates = [
    { event: "Submission Deadline", date: "02 May, 2025" },
    { event: "Acceptance Notification Date", date: "15 June, 2025" },
    { event: "Camera Ready", date: "05 July, 2025" },
    { event: "Conference Dates", date: "06 August, 2025" },
  ];

  const tracks = [
    {
      title: "Sustainable AI & Intelligent Systems",
      icon: <Cpu className="h-6 w-6" />,
      items: [
        "AI-driven solutions for sustainability & green computing",
        "Machine learning for sustainable development",
        "Big Data & IoT for smart cities",
        "Renewable energy optimization using AI",
        "Sustainable blockchain applications",
      ],
    },
    {
      title: "Digital Transformation & Smart Technologies",
      icon: <Cloud className="h-6 w-6" />,
      items: [
        "Smart cities & digital governance",
        "AI-powered healthcare innovations",
        "5G, Edge & Cloud Computing",
        "Cybersecurity & data privacy",
        "Sustainable e-commerce & fintech",
      ],
    },
    {
      title: "Future Communication & Computing",
      icon: <Database className="h-6 w-6" />,
      items: [
        "Next-gen networking (5G & 6G)",
        "Quantum computing for sustainability",
        "Green ICT & energy-efficient computing",
        "Digital twins & simulation models",
        "Sustainable computing architectures",
      ],
    },
  ];

  const submissions = [
    {
      type: "Full-Length Paper",
      details: "", //Published in Springer (ACSRA series)
      requirements: "6-8 pages",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      type: "Short Paper",
      details: "Published in SBS proceedings (Google Scholar)",
      requirements: "<6 pages",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      type: "Abstract Only",
      details: "Included in conference souvenir",
      requirements: "500 words",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      type: "Poster Presentation",
      details: "Featured in e-souvenir",
      requirements: "A3 format",
      icon: <BookOpen className="h-5 w-5" />,
    },
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            International Conference on Sustainable Digital Transformation 2025
          </h1>
          <div className="flex justify-center items-center gap-4 text-gray-600">
            <div className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              <span>August 6, 2025</span>
            </div>
            <span>•</span>
            <span>INTI University,Malaysia</span>
          </div>
        </motion.div>

        {/* Conference Overview */}
        <section className="mb-16">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Conference Overview</h2>
              <div className="grid md:grid-cols-2 gap-8 text-gray-600">
                <div className="space-y-4">
                  <p>
                    ICSDT 2025 brings together researchers, academicians, and industry professionals
                    to discuss advancements in sustainable digital transformation. Featuring expert
                    keynotes, panel discussions, and technical presentations.
                  </p>
                  <div className="flex items-center gap-2 bg-green-50 p-4 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    {/* <span className="text-green-700">
                    Published in Springer ACSRA series
                    </span> */}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Publication Highlights</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Extended papers in leading journals</li>
                    <li>ACSRA series publication</li>
                    <li>Global visibility through Springer</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tabs Section */}
        <Tabs defaultValue="submissions" className="mb-16">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-3 bg-gray-100">
            <TabsTrigger value="submissions">Submission Types</TabsTrigger>
            <TabsTrigger value="tracks">Conference Tracks</TabsTrigger>
            <TabsTrigger value="publication">Publication Info</TabsTrigger>
          </TabsList>

          <TabsContent value="submissions">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {submissions.map((sub, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      {sub.icon}
                      <CardTitle className="text-lg">{sub.type}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-2">{sub.details}</p>
                    <Badge variant="outline" className="text-xs">
                      {sub.requirements}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tracks">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tracks.map((track, index) => (
                <Card key={index} className="bg-blue-50/20">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      {track.icon}
                      <CardTitle className="text-lg">{track.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      {track.items.map((item, i) => (
                        <li key={i} className="text-sm">{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="publication">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    {/* <h3 className="text-lg font-semibold mb-4">Springer ACSRA Series</h3> */}
                    <ul className="space-y-3 text-gray-600">
                      <li>✓ Rigorous peer-review process</li>
                      <li>✓ Global distribution</li>
                      <li>✓ Open Access options</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Previous Conferences</h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>ICSDT 2024</span>
                        <Badge variant="outline">Published</Badge>
                      </div>
                      {/* Add other years similarly */}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Important Dates */}
        <section className="mb-16">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Important Dates</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[60%]">Event</TableHead>
                    <TableHead className="text-right">Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {calendarDates.map((date, index) => (
                    <TableRow key={index}>
                      <TableCell>{date.event}</TableCell>
                      <TableCell className="text-right">{date.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>
      </div>
    </div></div></div>
  );
}