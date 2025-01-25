// Similar structure as Energy.tsx but with education-specific content
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Shield, AlertTriangle, Users } from "lucide-react";

const Education = () => {
  return (
    <div className="min-h-screen bg-quantm-white">
      <Navbar />
      
      <main>
        <section className="bg-gradient-to-r from-quantm-navy to-quantm-blue text-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Cybersecurity Solutions for Education
              </h1>
              <p className="text-xl mb-8">
                Protect student data, research assets, and educational infrastructure with comprehensive security solutions designed for educational institutions.
              </p>
              <Button size="lg" variant="secondary">
                Request a Security Assessment
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-quantm-navy mb-12 text-center">
              Key Security Challenges in Education
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Shield className="h-12 w-12 text-quantm-blue mb-4" />
                  <CardTitle>Student Data Protection</CardTitle>
                  <CardDescription>
                    Safeguard sensitive student information and comply with educational privacy regulations.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <AlertTriangle className="h-12 w-12 text-quantm-blue mb-4" />
                  <CardTitle>Research Security</CardTitle>
                  <CardDescription>
                    Protect valuable research data and intellectual property from cyber threats.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-12 w-12 text-quantm-blue mb-4" />
                  <CardTitle>Remote Learning Security</CardTitle>
                  <CardDescription>
                    Ensure secure access for remote learning platforms and digital educational resources.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-4xl font-bold text-quantm-blue mb-2">85%</h3>
                <p className="text-gray-600">Of educational institutions experienced a cyber incident</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-quantm-blue mb-2">$3.8M</h3>
                <p className="text-gray-600">Average cost of a data breach in education</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-quantm-blue mb-2">112%</h3>
                <p className="text-gray-600">Increase in ransomware attacks on schools since 2020</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-quantm-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Protect Your Educational Institution Today
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Don't wait for a breach to strengthen your security posture. Contact us for a comprehensive security assessment.
            </p>
            <Button size="lg" variant="secondary">
              Schedule a Consultation
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Education;