import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Technology = () => {
  return (
    <div className="min-h-screen bg-quantm-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-quantm-navy mb-6">
            Technology Industry Cybersecurity Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protect your intellectual property and secure development environments with our comprehensive cybersecurity solutions for technology companies.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Technology;