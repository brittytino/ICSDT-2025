import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FaFileAlt, FaRegFilePdf, FaClipboardList, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Globe2, Users, BookOpen, Menu } from "lucide-react";

const AboutPage = () => {
  const location = useLocation();

  const topics = [
    "Sustainable Computing", "Digital Education", "Green Engineering",
    "Tech Innovation", "Cross-Disciplinary Research", "Eco-Business Models",
    "Smart Cities", "Renewable Tech"
  ];

  const stats = [
    { icon: Users, value: "100+", label: "Global Experts", description: "From 20+ countries worldwide" },
    { icon: BookOpen, value: "400+", label: "Research Papers", description: "Peer-reviewed publications" },
    { icon: Globe2, value: "6", label: "Continents", description: "International collaboration" },
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
        <main className="flex-1 lg:p-12 p-6">
          {/* Hero Section */}
          <motion.section 
            className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 mb-16 shadow-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-6 leading-tight">
                  Shaping the Future of Sustainable Technology
                </h1>
                <div className="flex flex-wrap gap-3">
                  {topics.map((topic) => (
                    <motion.span
                      key={topic}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/20 transition"
                    >
                      {topic}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <img
                  src="/about1.avif"
                  alt="Conference"
                  className="rounded-2xl shadow-xl border-4 border-white/20"
                />
              </div>
            </div>
          </motion.section>

          {/* Stats Section */}
          <motion.section 
            className="grid md:grid-cols-3 gap-6 mb-16"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
          >
            {stats.map((stat, index) => (
              <Card key={index} className="group rounded-2xl border-0 bg-white shadow-lg hover:shadow-xl transition">
                <CardContent className="p-6 text-center">
                  <stat.icon className="h-12 w-12 mx-auto mb-4 text-blue-600 p-3 bg-blue-100 rounded-2xl" />
                  <h3 className="text-4xl font-bold mb-2 text-gray-900">{stat.value}</h3>
                  <p className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</p>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.section>

          {/* Proceedings Section */}
          <motion.section 
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Publication Partners
                </span>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6">
                  Prestigious Conference Proceedings
                </h2>
              </div>
              
              <div className="space-y-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Accepted papers will be published in the Springer CCIS series, indexed in 
                  <span className="font-semibold text-blue-600"> Scopus, EI Compendex, </span> 
                  and other leading databases, ensuring global visibility for your research.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gray-50 rounded-xl border border-blue-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Springer Standards</h3>
                    <p className="text-gray-600">
                      Ranked among the top 25% of Springer proceedings worldwide
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-blue-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Global Recognition</h3>
                    <p className="text-gray-600">
                      Average 10,000+ downloads per publication
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  );
};

export default AboutPage;