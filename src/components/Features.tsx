import { Shield, Cloud, Mail } from "lucide-react";

const features = [
  {
    title: "Managed Detection & Response",
    description: "24/7 monitoring and rapid response to cyber threats, keeping your business safe around the clock.",
    icon: Shield,
  },
  {
    title: "Cloud Security",
    description: "Protect your cloud infrastructure with advanced security measures and continuous monitoring.",
    icon: Cloud,
  },
  {
    title: "Email Protection",
    description: "Advanced email security to guard against phishing, spam, and sophisticated email-based threats.",
    icon: Mail,
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-quantm-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-quantm-navy mb-4">
            Comprehensive Security Solutions
          </h2>
          <p className="text-quantm-gray text-lg max-w-2xl mx-auto">
            Protect your business with our advanced cybersecurity features designed for modern threats.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-quantm-blue/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-quantm-blue" />
              </div>
              <h3 className="text-xl font-semibold text-quantm-navy mb-3">
                {feature.title}
              </h3>
              <p className="text-quantm-gray">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};