import { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { 
  Home,
  Info, 
  Users, 
  Mic, 
  Trophy, 
  FileText, 
  FileCheck, 
  ClipboardCheck, 
  CalendarDays, 
  MapPin, 
  Map, 
  BookOpen, 
  Mail,
  ChevronDown,
  Menu
} from "lucide-react";

import { motion } from "framer-motion";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const menuItems = [
    { 
      label: "Home", 
      href: "/",
      icon: <Home className="w-4 h-4 mr-2" />
    },
    { 
      label: "About", 
      href: "/about",
      icon: <Info className="w-4 h-4 mr-2" /> // Changed to Info icon (better fit for About section)
    },
    { 
      label: "Committees", 
      href: "/commitee",
      icon: <Users className="w-4 h-4 mr-2" />
    },
    { 
      label: "Speakers", 
      href: "/speakers",
      icon: <Mic className="w-4 h-4 mr-2" />
    },
    { 
      label: "Awards", 
      href: "/awards",
      icon: <Trophy className="w-4 h-4 mr-2" /> // Changed to Trophy (fits better for Awards)
    },
    {
      label: "Submission Guide",
      icon: <FileText className="w-4 h-4 mr-2" />,
      dropdown: [
        { label: "Call for Papers", href: "/cfp", icon: <BookOpen className="w-4 h-4 mr-2" /> }, // BookOpen for paper guidelines
        { label: "Submissions", href: "/submission", icon: <FileCheck className="w-4 h-4 mr-2" /> }, // FileCheck for submissions
        { label: "Registration", href: "/registration", icon: <ClipboardCheck className="w-4 h-4 mr-2" /> }, // ClipboardCheck for registration
      ],
    },
    {
      label: "Attending",
      icon: <MapPin className="w-4 h-4 mr-2" />,
      dropdown: [
        { label: "Conference Venue", href: "/venue", icon: <Map className="w-4 h-4 mr-2" /> }, // Map for venue
        { label: "Program", href: "/program", icon: <CalendarDays className="w-4 h-4 mr-2" /> },
      ],
    },
    { 
      label: "Contact", 
      href: "/contact",
      icon: <Mail className="w-4 h-4 mr-2" />
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-gray-200/50 bg-white/80 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg"
            >
              <CalendarDays className="h-6 w-6 text-white" />
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ICSDT 2025
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.label} className="relative">
                    {item.dropdown ? (
                      <div className="relative group">
                        <Button
                          variant="ghost"
                          className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
                          onClick={() => toggleDropdown(item.label)}
                        >
                          {item.icon}
                          {item.label}
                          <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
                        </Button>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ 
                            opacity: activeDropdown === item.label ? 1 : 0,
                            y: activeDropdown === item.label ? 0 : 10
                          }}
                          className="absolute left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100"
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                              {subItem.icon}
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      </div>
                    ) : (
                      <Link to={item.href}>
                        <Button
                          variant="ghost"
                          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
                        >
                          {item.icon}
                          {item.label}
                        </Button>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 space-y-2 bg-white/95 backdrop-blur-sm border-t border-gray-100"
          >
            {menuItems.map((item) => (
              <div key={item.label} className="px-4">
                {item.dropdown ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50"
                      onClick={() => toggleDropdown(item.label)}
                    >
                      <div className="flex items-center">
                        {item.icon}
                        {item.label}
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 transform transition-transform ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="pl-8 space-y-2"
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="flex items-center px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-50"
                          >
                            {subItem.icon}
                            {subItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-50"
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};