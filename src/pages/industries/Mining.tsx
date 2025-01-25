import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Mining = () => {
  return (
    <div className="min-h-screen bg-quantm-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-quantm-navy mb-6">
            Mining Industry Cybersecurity Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protect your operational technology and critical infrastructure with our specialized cybersecurity solutions for the mining sector.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Mining;