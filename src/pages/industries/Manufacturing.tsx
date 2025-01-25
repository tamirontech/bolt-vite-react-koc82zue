import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Manufacturing = () => {
  return (
    <div className="min-h-screen bg-quantm-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-quantm-navy mb-6">
            Manufacturing Industry Cybersecurity Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protect your industrial control systems and intellectual property with our comprehensive cybersecurity solutions for manufacturers.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Manufacturing;