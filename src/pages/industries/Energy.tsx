import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Shield, AlertTriangle, Users } from "lucide-react";

const Energy = () => {
  return (
    <div className="min-h-screen bg-quantm-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-quantm-navy to-quantm-blue text-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Cybersecurity Solutions for Energy Sector
              </h1>
              <p className="text-xl mb-8">
                Protect your critical infrastructure, operational technology, and sensitive data with enterprise-grade security solutions designed for the energy sector.
              </p>
              <Button size="lg" variant="secondary">
                Request a Security Assessment
              </Button>
            </div>
          </div>
        </section>

        {/* Key Challenges Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-quantm-navy mb-12 text-center">
              Key Security Challenges in Energy Sector
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Shield className="h-12 w-12 text-quantm-blue mb-4" />
                  <CardTitle>Critical Infrastructure Protection</CardTitle>
                  <CardDescription>
                    Safeguard power generation, transmission, and distribution systems from cyber threats that could cause widespread disruption.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <AlertTriangle className="h-12 w-12 text-quantm-blue mb-4" />
                  <CardTitle>OT/IT Convergence Security</CardTitle>
                  <CardDescription>
                    Secure both operational technology and information technology systems as they become increasingly interconnected.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-12 w-12 text-quantm-blue mb-4" />
                  <CardTitle>Supply Chain Risks</CardTitle>
                  <CardDescription>
                    Protect against vulnerabilities in your supply chain and third-party integrations that could compromise your security.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-4xl font-bold text-quantm-blue mb-2">77%</h3>
                <p className="text-gray-600">Of energy companies experienced a cyber incident in the past year</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-quantm-blue mb-2">$6.2M</h3>
                <p className="text-gray-600">Average cost of a cyber breach in the energy sector</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-quantm-blue mb-2">54%</h3>
                <p className="text-gray-600">Increase in targeted attacks on energy infrastructure since 2020</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-quantm-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Protect Your Energy Infrastructure Today
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

export default Energy;