import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Database, Cloud, RefreshCw, Lock, Check } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const BackupRecovery = () => {
  const features = [
    {
      icon: Database,
      title: "Versatile Backup Options",
      description: "Full backups, incremental, and reverse incremental backups optimized for storage and speed."
    },
    {
      icon: RefreshCw,
      title: "Instant VM Recovery",
      description: "Boot directly from backup files to minimize downtime and maintain business continuity."
    },
    {
      icon: Shield,
      title: "Advanced Data Protection",
      description: "Ransomware protection, data immutability, and stringent access controls for enhanced security."
    },
    {
      icon: Cloud,
      title: "Flexible Storage Options",
      description: "Multiple storage options across on-premises and cloud environments with WAN acceleration."
    },
    {
      icon: Lock,
      title: "Comprehensive Recovery",
      description: "Restore capabilities from single files to entire VMs, tailored to your specific recovery needs."
    },
    {
      icon: Check,
      title: "Advanced Monitoring",
      description: "Centralized management with unified view and advanced analytics for compliance and security."
    }
  ];

  const benefits = [
    {
      title: "Reliability",
      description: "Trust in a solution that offers secure, reliable backups, tested across diverse scenarios."
    },
    {
      title: "Cost-Effective",
      description: "Benefit from intelligent data compression and lifecycle management without compromising security."
    },
    {
      title: "User-Friendly",
      description: "Navigate easily through an intuitive interface with automated backup and recovery processes."
    },
    {
      title: "Scalability",
      description: "Grow your backup infrastructure flexibly as your data needs expand."
    },
    {
      title: "Innovation",
      description: "Stay ahead with regular updates incorporating the latest in AI technology and threat detection."
    }
  ];

  return (
    <div className="min-h-screen bg-quantm-white">
      <Navbar />
      
      {/* Business Importance Section */}
      <div className="bg-quantm-lightGray py-12 mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-quantm-navy mb-6 text-center">
            Why Data Backup & Recovery is Essential for Your Business
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-quantm-gray">
            <p className="mb-4">
              Data loss can be catastrophic for your business operations and reputation:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>93% of companies without disaster recovery who suffer a major data disaster are out of business within one year</li>
              <li>The average cost of downtime is $5,600 per minute</li>
              <li>Human error accounts for 88% of all data breaches</li>
            </ul>
            <p className="mt-4">
              A robust backup and recovery solution isn't just an IT expense—it's business insurance that 
              ensures continuity, protects your reputation, and maintains customer trust even when the unexpected occurs.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-quantm-navy to-quantm-blue text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Data Protection for Your Business
            </h1>
            <p className="text-xl mb-8">
              Safeguard your vital data across virtual, physical, and cloud environments with Quantm's robust backup and recovery solutions.
            </p>
            <div className="space-x-4">
              <Button size="lg" className="bg-white text-quantm-blue hover:bg-quantm-lightGray">
                Secure Your Business Data
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-quantm-blue">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-quantm-navy mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-quantm-blue mb-4" />
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-quantm-navy mb-12">
            Why Choose Quantm?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-bold text-quantm-blue mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-quantm-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Ready to Protect Your Critical Data?
          </h2>
          <div className="space-x-4">
            <Button size="lg" className="bg-white text-quantm-blue hover:bg-quantm-lightGray">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-quantm-blue">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BackupRecovery;
