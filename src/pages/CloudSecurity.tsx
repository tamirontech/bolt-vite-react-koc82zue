import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Cloud, Lock, Database } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const CloudSecurity = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Business Importance Section */}
      <div className="bg-quantm-lightGray py-12 mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-quantm-navy mb-6 text-center">
            Why Cloud Security Matters for Your Business
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-quantm-gray">
            <p className="mb-4">
              In today's digital landscape, your business data is increasingly moving to the cloud. 
              Without proper security measures, this transition can expose your organization to significant risks:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>60% of small businesses close within 6 months of a cyber attack</li>
              <li>Cloud-based attacks increased by 630% during the global pandemic</li>
              <li>The average cost of a data breach is $3.86 million</li>
            </ul>
            <p className="mt-4">
              Investing in cloud security isn't just about protection—it's about ensuring business continuity, 
              maintaining customer trust, and meeting compliance requirements in an increasingly regulated digital world.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-quantm-navy mb-6">Cloud Security Solutions</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Empower your organization with Quantm's robust cloud security solutions, designed to fortify your Office 365 and other cloud platforms against the most sophisticated threats. Experience enhanced security without the complexity.
        </p>
      </div>

      {/* Key Features */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardHeader>
            <Shield className="w-10 h-10 text-quantm-blue mb-4" />
            <CardTitle>Advanced Threat Protection</CardTitle>
            <CardDescription>
              Utilize state-of-the-art AI to detect threats across your cloud services, ensuring swift identification and response to security incidents.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <Cloud className="w-10 h-10 text-quantm-blue mb-4" />
            <CardTitle>Multi-Layer Security</CardTitle>
            <CardDescription>
              Benefit from a comprehensive, layered security approach that integrates seamlessly with your existing cloud infrastructure.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <Lock className="w-10 h-10 text-quantm-blue mb-4" />
            <CardTitle>Real-Time Scanning</CardTitle>
            <CardDescription>
              Implement cutting-edge scanning technology that operates between your existing security layers and digital workspace.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <Database className="w-10 h-10 text-quantm-blue mb-4" />
            <CardTitle>Data Loss Prevention</CardTitle>
            <CardDescription>
              Activate powerful DLP policies with just a few clicks, safeguarding sensitive information across your cloud environment.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-quantm-navy mb-8 text-center">Benefits</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-quantm-blue">Comprehensive Coverage</h3>
            <p className="text-gray-600">Extend protection across email, file storage, and collaboration tools within your cloud environments.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-quantm-blue">Streamlined Compliance</h3>
            <p className="text-gray-600">Navigate regulatory standards effortlessly, making your organization SOC2-ready.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-quantm-blue">Simplified Management</h3>
            <p className="text-gray-600">Deploy cloud security measures quickly and efficiently, with minimal disruption.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-quantm-blue">Cost Efficiency</h3>
            <p className="text-gray-600">Leverage competitive pricing structures that provide high-value security without premium cost.</p>
          </div>
        </div>
      </div>

      {/* Comparative Advantages */}
      <div className="mb-16">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold text-quantm-navy mb-4">Why Choose Quantm</h2>
            <p className="text-gray-600">
              Our cloud security solutions are tailored to meet the needs of modern enterprises, providing a unique blend of proactive defense mechanisms and seamless integration with your Office 365 setup. Whether you are a small business or a large corporation, Quantm offers scalable, effective protection designed to enhance your security without overwhelming your team.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-quantm-navy mb-6">Secure Your Cloud Today</h2>
        <Button size="lg" className="bg-quantm-blue hover:bg-blue-600">
          Contact Us to Get Started
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default CloudSecurity;
