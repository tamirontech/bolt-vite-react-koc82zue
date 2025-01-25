import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Industries from "./pages/Industries";
import WhyQuantm from "./pages/WhyQuantm";
import Finance from "./pages/industries/Finance";
import Energy from "./pages/industries/Energy";
import Education from "./pages/industries/Education";
import Construction from "./pages/industries/Construction";
import Government from "./pages/industries/Government";
import Healthcare from "./pages/industries/Healthcare";
import Insurance from "./pages/industries/Insurance";
import Legal from "./pages/industries/Legal";
import Manufacturing from "./pages/industries/Manufacturing";
import Media from "./pages/industries/Media";
import Mining from "./pages/industries/Mining";
import RealEstate from "./pages/industries/RealEstate";
import Retail from "./pages/industries/Retail";
import Technology from "./pages/industries/Technology";
import Telecommunications from "./pages/industries/Telecommunications";
import Transport from "./pages/industries/Transport";
import CloudSecurity from "./pages/CloudSecurity";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MdrServices from "./pages/MdrServices";
import EmailSecurity from "./pages/EmailSecurity";
import BackupRecovery from "./pages/BackupRecovery";
import FirewallManagement from "./pages/FirewallManagement";
import CyberInsurance from "./pages/CyberInsurance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/why-quantm" element={<WhyQuantm />} />
          <Route path="/cyber-insurance" element={<CyberInsurance />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/finance" element={<Finance />} />
          <Route path="/industries/energy" element={<Energy />} />
          <Route path="/industries/education" element={<Education />} />
          <Route path="/industries/construction" element={<Construction />} />
          <Route path="/industries/government" element={<Government />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/insurance" element={<Insurance />} />
          <Route path="/industries/legal" element={<Legal />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/media" element={<Media />} />
          <Route path="/industries/mining" element={<Mining />} />
          <Route path="/industries/real-estate" element={<RealEstate />} />
          <Route path="/industries/retail" element={<Retail />} />
          <Route path="/industries/technology" element={<Technology />} />
          <Route path="/industries/telecommunications" element={<Telecommunications />} />
          <Route path="/industries/transport" element={<Transport />} />
          <Route path="/services/cloud-security" element={<CloudSecurity />} />
          <Route path="/services/mdr" element={<MdrServices />} />
          <Route path="/services/email-security" element={<EmailSecurity />} />
          <Route path="/services/backup-recovery" element={<BackupRecovery />} />
          <Route path="/services/firewall-management" element={<FirewallManagement />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
