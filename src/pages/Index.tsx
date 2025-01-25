import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Shield, Cloud, Lock, Server, Mail, Search, AlertCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="font-inter">
      <Navbar />
      <Hero />
      <Features />
      
      {/* Features and Benefits Section */}
      <section className="py-16 bg-quantm-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-quantm-navy mb-12">
            Features & Benefits
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 text-quantm-blue mb-4" />
                <CardTitle>Advanced Protection</CardTitle>
                <CardDescription>
                  State-of-the-art security measures that adapt to evolving threats
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Lock className="w-12 h-12 text-quantm-blue mb-4" />
                <CardTitle>24/7 Monitoring</CardTitle>
                <CardDescription>
                  Round-the-clock surveillance and immediate threat response
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Server className="w-12 h-12 text-quantm-blue mb-4" />
                <CardTitle>Scalable Solutions</CardTitle>
                <CardDescription>
                  Security that grows with your business needs
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-quantm-navy mb-6">
              Why Choose Quantm?
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold text-quantm-blue mb-2">Expert Team</h4>
                <p className="text-gray-600">Certified security professionals</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold text-quantm-blue mb-2">Quick Response</h4>
                <p className="text-gray-600">Immediate threat mitigation</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold text-quantm-blue mb-2">Custom Solutions</h4>
                <p className="text-gray-600">Tailored to your needs</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold text-quantm-blue mb-2">Cost-Effective</h4>
                <p className="text-gray-600">Competitive pricing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;