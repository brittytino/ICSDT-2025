import { useState, useEffect } from "react";
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
  Menu,
  X
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  // Close any open dropdowns when menu is closed
  useEffect(() => {
    if (!isMenuOpen) {
      setActiveDropdown(null);
    }
  }, [isMenuOpen]);

  const menuItems = [
    { 
      label: "Home", 
      href: "/",
      icon: <Home className="w-4 h-4 mr-2" />
    },
    { 
      label: "About", 
      href: "/about",
      icon: <Info className="w-4 h-4 mr-2" />
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
      icon: <Trophy className="w-4 h-4 mr-2" />
    },
    {
      label: "Submission Guide",
      icon: <FileText className="w-4 h-4 mr-2" />,
      dropdown: [
        { label: "Call for Papers", href: "/cfp", icon: <BookOpen className="w-4 h-4 mr-2" /> },
        { label: "Submissions", href: "/submission", icon: <FileCheck className="w-4 h-4 mr-2" /> },
        { label: "Registration", href: "/registration", icon: <ClipboardCheck className="w-4 h-4 mr-2" /> },
      ],
    },
    {
      label: "Attending",
      icon: <MapPin className="w-4 h-4 mr-2" />,
      dropdown: [
        { label: "Conference Venue", href: "/venue", icon: <Map className="w-4 h-4 mr-2" /> },
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "backdrop-blur-lg bg-white/90 shadow-md" : "bg-white/80 border-b border-gray-200/50"
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg"
            >
              <CalendarDays className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </motion.div>
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
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
                          className="flex items-center gap-1 px-3 lg:px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
                          onClick={() => toggleDropdown(item.label)}
                        >
                          {item.icon}
                          <span className="whitespace-nowrap">{item.label}</span>
                          <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
                        </Button>

                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 z-20"
                            >
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  to={subItem.href}
                                  className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {subItem.icon}
                                  {subItem.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link to={item.href}>
                        <Button
                          variant="ghost"
                          className="flex items-center gap-1 px-3 lg:px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
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
            className="md:hidden z-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 space-y-2 bg-white/95 backdrop-blur-sm border-t border-gray-100 overflow-hidden"
            >
              <div className="max-h-[70vh] overflow-y-auto pb-4">
                {menuItems.map((item) => (
                  <div key={item.label} className="px-4 py-1">
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
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-8 space-y-1 mt-1 overflow-hidden"
                            >
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  to={subItem.href}
                                  className="flex items-center px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-50"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {subItem.icon}
                                  {subItem.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.icon}
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};