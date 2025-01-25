import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Schedule", href: "#schedule" },
    { label: "Speakers", href: "#speakers" },
    { label: "Papers", href: "#papers" },
    { label: "FAQ", href: "#faq" },
  ];

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="font-bold text-xl text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            ICSDT 2025
          </span>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    <Button
                      variant="ghost"
                      className="px-4 py-2 text-sm hover:bg-primary/10 transition-colors rounded-full"
                      onClick={() => scrollToSection(item.href)}
                    >
                      {item.label}
                    </Button>
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
          <div className="md:hidden py-4 space-y-2 animate-fade-in">
            {menuItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="w-full text-left justify-start hover:bg-primary/10 rounded-lg"
                onClick={() => scrollToSection(item.href)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};