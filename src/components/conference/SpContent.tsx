import { Link, useLocation } from "react-router-dom"; // React Router imports
import { FaFileAlt, FaRegFilePdf, FaClipboardList, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FileText, Mail, Phone, Menu } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const SpContent = () => {
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
        </motion.aside>

        {/* Main Content */}
        <main className="flex-1 p-6 sm:p-8 space-y-6">
          <Speakers />
        </main>
      </div>
    </div>
  );
};

const speakers = [
  {
    name: "Prof. Emeritus Dato' Ts. Dr. Tengku Mohd Bin Tengku Sembok",
    title: "Professor, IIUM Gombak Campus",
    affiliation: "Kulliyyah of Information and Communication Technology",
    image: "/tengku.jpeg",
    specializations: ["Computation Theory", "AI & NLP", "Information Retrieval"],
    email: "tmts@iium.edu.my",
  },
  {
    name: "Dr. Mijal Mistry",
    title: "Software Developer",
    affiliation: "Infotech IT Solutions, Canada",
    image: "/mij.jpeg",
    specializations: ["Software Development", "Cloud Computing", "AI Solutions"],
    email: "mijal@infotech.com",
  },
  {
    name: "Mr. Unknown",
    title: "Mobile and Web Application Architect",
    affiliation: "moxDroid Labs Inc., Toronto, Canada",
    image: "/mob.jpg",
    specializations: ["Mobile Development", "Full Stack Development", "AI & ML"],
    email: "tino@moxdroid.com",
  },
];

const Speakers = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {speakers.map((speaker, index) => (
          <Card key={index} className="rounded-2xl shadow-lg bg-white transition-transform transform hover:scale-105">
            <CardHeader className="flex flex-col items-center text-center">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-32 h-32 rounded-full border-4 border-gray-300 object-cover"
              />
              <CardTitle className="mt-4 text-xl font-semibold text-gray-800">
                {speaker.name}
              </CardTitle>
              <p className="text-gray-600">{speaker.title}</p>
              <p className="text-gray-500">{speaker.affiliation}</p>
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {speaker.specializations.map((spec, i) => (
                  <Badge key={i} variant="outline" className="px-3 py-1 text-sm">
                    {spec}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center gap-3 text-gray-700">
                <a
                  href={`mailto:${speaker.email}`}
                  className="flex items-center gap-2 text-blue-600 hover:underline"
                >
                  <Mail size={18} /> {speaker.email}
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};


export default SpContent;
