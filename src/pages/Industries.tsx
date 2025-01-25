import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, ArrowRight } from "lucide-react";

const Industries = () => {
  const industries = [
    { name: "Education", path: "/industries/education" },
    { name: "Energy", path: "/industries/energy" },
    { name: "Construction", path: "/industries/construction" },
    { name: "Finance", path: "/industries/finance" },
    { name: "Government", path: "/industries/government" },
    { name: "Healthcare", path: "/industries/healthcare" },
    { name: "Insurance", path: "/industries/insurance" },
    { name: "Legal", path: "/industries/legal" },
    { name: "Manufacturing", path: "/industries/manufacturing" },
    { name: "Media", path: "/industries/media" },
    { name: "Mining and Minerals", path: "/industries/mining" },
    { name: "Real Estate", path: "/industries/real-estate" },
    { name: "Retail", path: "/industries/retail" },
    { name: "Technology", path: "/industries/technology" },
    { name: "Telecommunications", path: "/industries/telecommunications" },
    { name: "Transport", path: "/industries/transport" }
  ];

  return (
    <div className="min-h-screen bg-quantm-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-quantm-navy mb-6">
            Industry-Specific Cybersecurity Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every industry faces unique cybersecurity challenges. Discover how Quantm Tech can protect your specific sector with tailored security solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <Link key={industry.path} to={industry.path}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Building2 className="h-8 w-8 text-quantm-blue" />
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                  </div>
                  <CardTitle className="mt-4">{industry.name}</CardTitle>
                  <CardDescription>
                    Discover cybersecurity solutions tailored for the {industry.name.toLowerCase()} sector
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Industries;