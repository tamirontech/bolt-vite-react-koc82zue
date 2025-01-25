import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Users, Lightbulb, Target, Award, HandshakeIcon } from "lucide-react";

const About = () => {
  return (
    <div className="font-inter">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-quantm-navy to-quantm-blue text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Meet Your Cybersecurity Superheroes</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
            We are Quantm, a dedicated team of cybersecurity experts committed to protecting your business from ever-evolving cyber threats. Our mission? To supercharge your business security, ensuring your operations run smoothly and securely.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-quantm-navy mb-8">Our Journey to Supercharging Cybersecurity</h2>
          <p className="text-lg text-gray-700 mb-6">
            Founded in 2020, Quantm started with a simple mission - to make cybersecurity accessible, efficient, and effective for businesses of all sizes. Through continuous innovation and dedication to excellence, we've grown to become a trusted partner for organizations seeking robust cybersecurity solutions.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-quantm-navy mb-12 text-center">What Drives Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <Shield className="w-12 h-12 text-quantm-blue mb-4" />
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">We maintain the highest standards of honesty and transparency in all our operations.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Lightbulb className="w-12 h-12 text-quantm-blue mb-4" />
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">We continuously evolve our solutions to stay ahead of emerging threats.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Target className="w-12 h-12 text-quantm-blue mb-4" />
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in every aspect of our security services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-quantm-navy mb-8">Our Approach to Your Security</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <p className="text-lg text-gray-700">
                We employ a proactive approach to cybersecurity, combining cutting-edge technology with our team's vast expertise to detect, respond to, and prevent cyber threats. Our aim is to be an extension of your business, ensuring your security needs are met while you focus on what you do best: running your business.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <Shield className="w-48 h-48 text-quantm-blue" />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-quantm-navy mb-12 text-center">Making a Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="w-8 h-8 text-quantm-blue mb-4" />
              <p className="text-gray-700 mb-4">
                "Quantm's proactive approach to cybersecurity has transformed how we handle our digital assets. Their expertise and dedication are unmatched."
              </p>
              <p className="font-semibold">- Tech Solutions Inc.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <HandshakeIcon className="w-8 h-8 text-quantm-blue mb-4" />
              <p className="text-gray-700 mb-4">
                "Working with Quantm has given us peace of mind knowing our security is in capable hands. Their team's responsiveness and expertise are exceptional."
              </p>
              <p className="font-semibold">- Global Innovations Corp</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-quantm-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Cybersecurity Mission</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Interested in learning more or ready to take your business security to the next level? Get in touch with us today!
          </p>
          <Button className="bg-quantm-blue hover:bg-blue-600 text-white px-8 py-3 text-lg">
            Contact Us
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;