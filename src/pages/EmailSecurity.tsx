import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Mail, Lock, Brain, Cloud, CheckCircle2, BarChart3, Users, FileKey, Zap, Network, Eye } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const EmailSecurity = () => {
  const features = [
    {
      icon: Shield,
      title: "Advanced Threat Protection",
      description: "AI-powered anti-phishing detection combined with comprehensive scanning against malware and ransomware."
    },
    {
      icon: Brain,
      title: "Zero-Day Detection",
      description: "Innovative sandbox technology for detecting and preventing previously unknown threats."
    },
    {
      icon: Network,
      title: "Comprehensive Coverage",
      description: "Full spectrum email protection covering inbound, outbound, and internal communications."
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Seamless API-based integration with your existing cloud environment for immediate protection."
    },
    {
      icon: Lock,
      title: "Data Loss Prevention",
      description: "Robust controls and advanced content analysis to prevent sensitive data breaches."
    },
    {
      icon: Users,
      title: "Collaboration Security",
      description: "Extended protection for Microsoft Teams, Slack, and other collaboration platforms."
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Achieve a 99% reduction in phishing attacks with broad threat coverage."
    },
    {
      icon: Zap,
      title: "Improved Efficiency",
      description: "Quick deployment and AI-powered systems minimize false positives."
    },
    {
      icon: Eye,
      title: "Simplified Management",
      description: "Centralized dashboard with automated remediation processes."
    },
    {
      icon: FileKey,
      title: "Compliance Ready",
      description: "Support for HIPAA, PCI, GDPR, and other regulatory requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Business Importance Section */}
      <div className="bg-quantm-lightGray py-12 mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-quantm-navy mb-6 text-center">
            Why Email Security is Critical for Your Business
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-quantm-gray">
            <p className="mb-4">
              Email remains the primary attack vector for cyber threats, making it crucial to protect your business:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>94% of malware is delivered via email</li>
              <li>Business Email Compromise (BEC) scams cost businesses $26 billion annually</li>
              <li>A single successful phishing attack can compromise your entire network</li>
            </ul>
            <p className="mt-4">
              Protecting your email communications isn't optional—it's essential for safeguarding sensitive data, 
              maintaining client trust, and ensuring your business operations remain secure and compliant.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-quantm-navy to-quantm-blue py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Elevate Your Email Security with Quantm
            </h1>
            <p className="text-xl mb-8">
              Shield your email communications from advanced threats with Quantm's cutting-edge protection
              seamlessly integrated into your cloud environment.
            </p>
            <Button 
              size="lg"
              className="bg-white text-quantm-blue hover:bg-quantm-lightGray"
            >
              Enhance Your Email Security Now
            </Button>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="py-20 bg-quantm-lightGray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-quantm-navy">
            Comprehensive Email Security Features
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
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-quantm-navy">
            Benefits of Quantm Email Security
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <benefit.icon className="w-12 h-12 text-quantm-blue mb-4" />
                  <CardTitle className="text-lg mb-2">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Details Section */}
      <div className="py-20 bg-quantm-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Quantm Email Security?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Cloud-Native Solution</h3>
                <p className="mb-6">
                  Designed specifically for Microsoft 365 and Google Workspace, our solution
                  provides seamless integration and protection.
                </p>
                <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
                <p>
                  Our AI models are constantly updated to handle new and emerging threats,
                  keeping your organization protected.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">User Education</h3>
                <p className="mb-6">
                  Enhance your security posture with user notifications and educational
                  workflows that promote best practices.
                </p>
                <h3 className="text-xl font-semibold mb-4">Incident Response</h3>
                <p>
                  Quick and effective remediation tools to handle security events and
                  maintain business continuity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-quantm-lightGray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-quantm-navy">
            Ready to Secure Your Email Communications?
          </h2>
          <div className="space-x-4">
            <Button 
              size="lg"
              className="bg-quantm-blue text-white hover:bg-quantm-navy"
            >
              Secure Your Emails with Quantm
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-quantm-blue text-quantm-blue hover:bg-quantm-blue hover:text-white"
            >
              Contact Us for a Demo
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EmailSecurity;
