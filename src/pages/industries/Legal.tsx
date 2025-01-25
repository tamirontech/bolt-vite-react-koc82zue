import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Legal = () => {
  return (
    <div className="min-h-screen bg-quantm-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-quantm-navy mb-6">
            Legal Industry Cybersecurity Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Safeguard client confidentiality and protect sensitive legal documents with our specialized cybersecurity solutions for law firms.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Legal;