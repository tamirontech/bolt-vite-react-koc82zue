import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Shield, Cloud, Lock, Mail, Search, AlertCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Endpoint Detection and Response (EDR)",
      headline: "Boost Your Security. Minimize Your Risks.",
      description: "Relish real-time visibility with our EDR solutions that constantly monitor your endpoints, thwarting threats in their tracks. Gear up for a security upgrade like no other."
    },
    {
      icon: AlertCircle,
      title: "Extended Detection and Response (XDR)",
      headline: "Experience Security That's a Cut Above.",
      description: "Our XDR services bring together multiple security products, giving you streamlined security and comprehensive threat intelligence. Elevate your defenses with our integrated approach."
    },
    {
      icon: Mail,
      title: "Email Security",
      headline: "Keep Your Inbox Clean. Keep Threats at Bay.",
      description: "Our advanced email security solutions keep phishing, malware, spam, and targeted attacks at bay, securing your communication channels. Maintain trust in your business with our relentless email protection."
    },
    {
      icon: Search,
      title: "Vulnerability Management",
      headline: "Identify. Analyze. Respond. Elevate.",
      description: "Our vulnerability management services help find, classify, and neutralize threats, strengthening your security stance. Stay ahead of vulnerabilities with our thorough and strategic approach."
    },
    {
      icon: Lock,
      title: "Firewall Management",
      headline: "Strengthen Your First Line of Defense.",
      description: "Our managed firewall services give you 24/7 monitoring, ensuring your firewall rules prevent unauthorized access effectively. With Quantm, fortify your network's first line of defense."
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      headline: "Embrace the Future. Secure Your Cloud.",
      description: "Our cloud security solutions offer robust protection for your data, applications, and infrastructure as you transition to the cloud. Embark on your digital transformation journey fearlessly with Quantm."
    }
  ];

  return (
    <div className="min-h-screen bg-quantm-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-quantm-navy mb-6">
            Supercharge Your Security with Quantm Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Step into a world where cyber threats fear to tread. Experience cutting-edge cybersecurity solutions that are fine-tuned to your business needs. From endpoint monitoring to securing your cloud, Quantm's array of services are built to ensure your digital fort stays invincible. Dive in to discover more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="w-12 h-12 text-quantm-blue mb-4" />
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <h3 className="text-lg font-semibold text-quantm-blue mb-2">
                  {service.headline}
                </h3>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="text-center bg-quantm-navy text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-6">
            Are you ready to fortify your cybersecurity landscape?
          </h2>
          <Button 
            size="lg" 
            className="bg-quantm-blue hover:bg-blue-600 text-white"
          >
            Explore our solutions now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;