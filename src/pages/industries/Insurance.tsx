import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Shield, AlertTriangle, Users } from "lucide-react";

const Insurance = () => {
  return (
    <div className="min-h-screen bg-quantm-white">
      <Navbar />
      
      <main>
        <section className="bg-gradient-to-r from-quantm-navy to-quantm-blue text-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Insurance Industry Cybersecurity Solutions
              </h1>
              <p className="text-xl mb-8">
                Protect sensitive policyholder data and ensure regulatory compliance with comprehensive security solutions designed for insurance providers.
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
              Key Security Challenges in Insurance
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Shield className="h-12 w-12 text-quantm-blue mb-4" />
                  <CardTitle>Data Protection</CardTitle>
                  <CardDescription>
                    Secure sensitive policyholder information and maintain compliance with industry regulations.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <AlertTriangle className="h-12 w-12 text-quantm-blue mb-4" />
                  <CardTitle>Fraud Prevention</CardTitle>
                  <CardDescription>
                    Implement robust security measures to prevent insurance fraud and protect claims processing.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-12 w-12 text-quantm-blue mb-4" />
                  <CardTitle>Third-Party Risk</CardTitle>
                  <CardDescription>
                    Manage security risks associated with third-party vendors and service providers.
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
                <h3 className="text-4xl font-bold text-quantm-blue mb-2">92%</h3>
                <p className="text-gray-600">Of insurance firms experienced cyber incidents</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-quantm-blue mb-2">$5.9M</h3>
                <p className="text-gray-600">Average cost of a data breach in insurance</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-quantm-blue mb-2">165%</h3>
                <p className="text-gray-600">Increase in ransomware attacks targeting insurers</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-quantm-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Protect Your Insurance Business Today
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

export default Insurance;