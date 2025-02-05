import { useState } from "react";
import { Link } from "react-router-dom"; // Replace next/link with react-router-dom's Link
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const menuItems = [
    { label: "Committees", href: "/commitee" },
    { label: "Keynote Speakers", href: "/speakers" },
    {
      label: "Submission Guide",
      dropdown: [
        { label: "Call for Papers", href: "/cfp" },
        { label: "Submissions", href: "/submission" },
        { label: "Registration", href: "/registration" },
      ],
    },
    {
      label: "For Attending",
      dropdown: [
        { label: "Conference Venue", href: "/venue" },
        { label: "Program", href: "/program" },
      ],
    },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200/20 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
        <Link to="/"><span className="font-bold text-xl text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">ICSDT 2025</span></Link>


          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-4">
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.label} className="relative">
                    {item.dropdown ? (
                      <>
                        <button
                          className="flex items-center gap-1 px-4 py-2 text-sm hover:bg-primary/10 transition-colors rounded-full"
                          onClick={() => toggleDropdown(item.label)}
                        >
                          {item.label}{" "}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              activeDropdown === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {activeDropdown === item.label && (
                          <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg overflow-hidden w-48 transition-all duration-200 animate-fade-in">
                            {item.dropdown.map((subItem) => (
                              <Link key={subItem.label} to={subItem.href}>
                                <Button
                                  variant="ghost"
                                  className="block w-full text-left px-4 py-2 text-sm hover:bg-primary/10 transition-colors"
                                >
                                  {subItem.label}
                                </Button>
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link to={item.href}>
                        <Button
                          variant="ghost"
                          className="px-4 py-2 text-sm hover:bg-primary/10 transition-colors rounded-full"
                        >
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
          <div className="md:hidden py-4 space-y-2 bg-white shadow-lg rounded-b-lg animate-fade-in">
            {menuItems.map((item) => (
              <div key={item.label} className="px-4">
                {item.dropdown ? (
                  <>
                    <button
                      className="w-full flex justify-between items-center hover:bg-primary/10 rounded-lg"
                      onClick={() => toggleDropdown(item.label)}
                    >
                      {item.label}{" "}
                      <ChevronDown
                        className={`w-4 h-4 transform transition-transform ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="pl-4 space-y-2 animate-fade-in">
                        {item.dropdown.map((subItem) => (
                          <Link key={subItem.label} to={subItem.href}>
                            <Button
                              variant="ghost"
                              className="w-full text-left justify-start hover:bg-primary/10 rounded-lg"
                            >
                              {subItem.label}
                            </Button>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={item.href}>
                    <Button
                      variant="ghost"
                      className="w-full text-left justify-start hover:bg-primary/10 rounded-lg"
                    >
                      {item.label}
                    </Button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};