import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Shield, AlertTriangle, Users } from "lucide-react";

const Construction = () => {
  return (
    <div className="min-h-screen bg-quantm-white">
      <Navbar />
      
      <main>
        <section className="bg-gradient-to-r from-quantm-navy to-quantm-blue text-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Cybersecurity Solutions for Construction
              </h1>
              <p className="text-xl mb-8">
                Protect your construction projects, intellectual property, and operational data with industry-specific security solutions.
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
              Key Security Challenges in Construction
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Shield className="h-12 w-12 text-quantm-blue mb-4" />
                  <CardTitle>Project Data Protection</CardTitle>
                  <CardDescription>
                    Secure sensitive project plans, bids, and proprietary construction methods.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <AlertTriangle className="h-12 w-12 text-quantm-blue mb-4" />
                  <CardTitle>Site Security</CardTitle>
                  <CardDescription>
                    Protect IoT devices, surveillance systems, and smart construction equipment.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-12 w-12 text-quantm-blue mb-4" />
                  <CardTitle>Contractor Access</CardTitle>
                  <CardDescription>
                    Manage secure access for multiple contractors and third-party vendors.
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
                <h3 className="text-4xl font-bold text-quantm-blue mb-2">74%</h3>
                <p className="text-gray-600">Of construction firms experienced cyber incidents</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-quantm-blue mb-2">$5.2M</h3>
                <p className="text-gray-600">Average cost of a data breach in construction</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-quantm-blue mb-2">89%</h3>
                <p className="text-gray-600">Increase in IoT-related vulnerabilities</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-quantm-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Protect Your Construction Business Today
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

export default Construction;