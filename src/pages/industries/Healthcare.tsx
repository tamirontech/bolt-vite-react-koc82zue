// Similar structure with healthcare-specific content
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Shield, AlertTriangle, Users } from "lucide-react";

const Healthcare = () => {
  return (
    <div className="min-h-screen bg-quantm-white">
      <Navbar />
      
      <main>
        <section className="bg-gradient-to-r from-quantm-navy to-quantm-blue text-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Cybersecurity Solutions for Healthcare
              </h1>
              <p className="text-xl mb-8">
                Protect patient data and healthcare systems with HIPAA-compliant security solutions.
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
              Key Security Challenges in Healthcare
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Shield className="h-12 w-12 text-quantm-blue mb-4" />
                  <CardTitle>HIPAA Compliance</CardTitle>
                  <CardDescription>
                    Ensure compliance with healthcare data protection regulations.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <AlertTriangle className="h-12 w-12 text-quantm-blue mb-4" />
                  <CardTitle>Medical Device Security</CardTitle>
                  <CardDescription>
                    Protect connected medical devices and equipment from cyber threats.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-12 w-12 text-quantm-blue mb-4" />
                  <CardTitle>Patient Data Protection</CardTitle>
                  <CardDescription>
                    Secure electronic health records and patient information.
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
                <h3 className="text-4xl font-bold text-quantm-blue mb-2">89%</h3>
                <p className="text-gray-600">Of healthcare organizations experienced data breaches</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-quantm-blue mb-2">$9.2M</h3>
                <p className="text-gray-600">Average cost of a healthcare data breach</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-quantm-blue mb-2">278%</h3>
                <p className="text-gray-600">Increase in healthcare ransomware attacks</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-quantm-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Protect Your Healthcare Organization Today
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

export default Healthcare;