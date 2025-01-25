import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Shield, AlertTriangle, Users } from "lucide-react";

const Finance = () => {
  return (
    <div className="min-h-screen bg-quantm-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-quantm-navy to-quantm-blue text-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Cybersecurity Solutions for Financial Services
              </h1>
              <p className="text-xl mb-8">
                Protect your financial institution's assets, customer data, and reputation with enterprise-grade security solutions.
              </p>
              <Button size="lg" variant="secondary">
                Request a Security Assessment
              </Button>
            </div>
          </div>
        </section>

        {/* Why It Matters Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-quantm-navy mb-12 text-center">
              Why Financial Institutions Need Robust Cybersecurity
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Shield className="h-12 w-12 text-quantm-blue mb-4" />
                  <CardTitle>Regulatory Compliance</CardTitle>
                  <CardDescription>
                    Meet GDPR, PCI DSS, and other financial regulations while protecting sensitive data.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <AlertTriangle className="h-12 w-12 text-quantm-blue mb-4" />
                  <CardTitle>Fraud Prevention</CardTitle>
                  <CardDescription>
                    Protect against sophisticated financial fraud attempts and cyber threats.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-12 w-12 text-quantm-blue mb-4" />
                  <CardTitle>Customer Trust</CardTitle>
                  <CardDescription>
                    Maintain customer confidence by ensuring their financial data remains secure.
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
                <h3 className="text-4xl font-bold text-quantm-blue mb-2">$18.3M</h3>
                <p className="text-gray-600">Average cost of a financial sector data breach</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-quantm-blue mb-2">300%</h3>
                <p className="text-gray-600">Increase in cyberattacks on financial institutions since 2020</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-quantm-blue mb-2">60%</h3>
                <p className="text-gray-600">Of financial institutions experienced a cyber incident in 2023</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-quantm-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Protect Your Financial Institution Today
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

export default Finance;