import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, Brain, Zap, Target, Lock, CheckCircle2, BarChart3, Network, Eye, Database, ServerCog } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";

const MdrServices = () => {
  const features = [
    {
      icon: Shield,
      title: "Advanced Threat Detection",
      description: "Our AI-powered system automatically detects and responds to threats in real-time, identifying both known and unknown threats including zero-day attacks."
    },
    {
      icon: Brain,
      title: "Behavioral Analysis",
      description: "Advanced behavioral AI continuously monitors application and process behavior, detecting suspicious activities and stopping advanced threats before they cause damage."
    },
    {
      icon: Network,
      title: "Unified Protection Platform",
      description: "A comprehensive solution that combines endpoint protection, detection, and response in one unified platform for complete visibility."
    },
    {
      icon: Eye,
      title: "Continuous Monitoring",
      description: "24/7 monitoring of all endpoint activities with deep visibility for rapid threat hunting and incident response."
    },
    {
      icon: Database,
      title: "Machine Learning Integration",
      description: "Advanced machine learning capabilities analyze vast amounts of threat data to adapt and respond to new security threats automatically."
    },
    {
      icon: ServerCog,
      title: "Remote Management",
      description: "Secure remote access and control capabilities for efficient endpoint management, including remote patching and isolation."
    }
  ];

  const benefits = [
    {
      icon: Lock,
      title: "Reduce Risk",
      description: "Significantly lower the chance of major security breaches with proactive threat detection and response."
    },
    {
      icon: BarChart3,
      title: "Cost-effective",
      description: "Focus your resources on core business functions while we handle your security with our comprehensive solution."
    },
    {
      icon: CheckCircle2,
      title: "Compliance Assurance",
      description: "Stay compliant with industry regulations through documented audits and detailed security reports."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Integration",
      description: "Seamlessly integrate our MDR solution into your existing infrastructure with minimal disruption."
    },
    {
      number: "02",
      title: "Detection",
      description: "Our AI and behavioral analysis continuously monitor your environment to detect anomalies and threats."
    },
    {
      number: "03",
      title: "Response",
      description: "Rapidly respond to and mitigate identified threats with automated and manual response capabilities."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-b from-quantm-navy to-quantm-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Ahead of Threats with Quantm's Managed Detection and Response
            </h1>
            <p className="text-xl mb-8">
              Real-time threat detection and rapid response solutions tailored to your business needs.
            </p>
            <Button size="lg" className="bg-white text-quantm-navy hover:bg-quantm-lightGray">
              Get Protected Today
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-quantm-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-quantm-gray mb-8">
              Our Managed Detection and Response (MDR) services combine advanced technology, 
              expert analysts, and proven processes to protect your business from sophisticated 
              cyber threats around the clock.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Continuous Monitoring", "Expert Threat Analysis", "Rapid Incident Response"].map((item, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-quantm-navy">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-quantm-navy mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-quantm-blue mb-4" />
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-quantm-gray">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-quantm-lightGray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-quantm-navy mb-12">
            Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <benefit.icon className="w-12 h-12 text-quantm-blue mb-4" />
                  <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-quantm-gray">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-quantm-navy mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-quantm-lightBlue opacity-20 absolute -top-4 left-0">
                  {step.number}
                </div>
                <div className="pt-8">
                  <h3 className="text-xl font-bold text-quantm-navy mb-4">{step.title}</h3>
                  <p className="text-quantm-gray">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-16 bg-quantm-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to secure your network?</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-quantm-blue hover:bg-blue-600">
              Secure Your Network Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-quantm-navy">
              Schedule a Free Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MdrServices;