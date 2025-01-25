import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    { name: "Cloud Security", href: "/services/cloud-security" },
    { name: "MDR Services", href: "/services/mdr" },
    { name: "Email Security", href: "/services/email-security" },
    { name: "Backup & Recovery", href: "/services/backup-recovery" },
    { name: "Firewall Management", href: "/services/firewall-management" },
  ];

  const industries = [
    { name: "Finance", href: "/industries/finance" },
    { name: "Energy", href: "/industries/energy" },
    { name: "Education", href: "/industries/education" },
    { name: "Construction", href: "/industries/construction" },
    { name: "Government", href: "/industries/government" },
    { name: "Healthcare", href: "/industries/healthcare" },
    { name: "Insurance", href: "/industries/insurance" },
    { name: "Legal", href: "/industries/legal" },
    { name: "Manufacturing", href: "/industries/manufacturing" },
    { name: "Media", href: "/industries/media" },
    { name: "Mining", href: "/industries/mining" },
    { name: "Real Estate", href: "/industries/real-estate" },
    { name: "Retail", href: "/industries/retail" },
    { name: "Technology", href: "/industries/technology" },
    { name: "Telecommunications", href: "/industries/telecommunications" },
    { name: "Transport", href: "/industries/transport" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0 font-bold text-quantm-navy text-xl">
            Quantm Tech
          </Link>
          
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className="text-quantm-gray hover:text-quantm-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-quantm-gray hover:text-quantm-blue">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {services.map((service) => (
                        <li key={service.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{service.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-quantm-gray hover:text-quantm-blue">
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {industries.map((industry) => (
                        <li key={industry.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={industry.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{industry.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/about" className="text-quantm-gray hover:text-quantm-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    About Us
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact" className="text-quantm-gray hover:text-quantm-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Contact Us
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Button className="bg-quantm-blue hover:bg-quantm-navy text-white ml-4">
                    Get Started
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-quantm-gray hover:text-quantm-blue"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-quantm-gray hover:text-quantm-blue block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            <div className="space-y-2">
              <div className="text-quantm-gray px-3 py-2 text-base font-medium">Services</div>
              {services.map((service) => (
                <Link
                  key={service.href}
                  to={service.href}
                  className="text-quantm-gray hover:text-quantm-blue block px-6 py-2 rounded-md text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>

            <div className="space-y-2">
              <div className="text-quantm-gray px-3 py-2 text-base font-medium">Industries</div>
              {industries.map((industry) => (
                <Link
                  key={industry.href}
                  to={industry.href}
                  className="text-quantm-gray hover:text-quantm-blue block px-6 py-2 rounded-md text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {industry.name}
                </Link>
              ))}
            </div>

            <Link
              to="/about"
              className="text-quantm-gray hover:text-quantm-blue block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className="text-quantm-gray hover:text-quantm-blue block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>

            <Button className="w-full bg-quantm-blue hover:bg-quantm-navy text-white mt-4">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};