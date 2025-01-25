import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-quantm-navy text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Quantm Tech</h3>
            <p className="text-quantm-lightGray">
              Empowering businesses with next-generation cybersecurity solutions.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-quantm-lightBlue transition-colors">Home</a></li>
              <li><a href="#features" className="hover:text-quantm-lightBlue transition-colors">Features</a></li>
              <li><a href="#testimonials" className="hover:text-quantm-lightBlue transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-quantm-lightBlue transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>contact@quantmtech.com</li>
              <li>1-800-QUANTM-TECH</li>
              <li>123 Security Street</li>
              <li>Cybertown, CT 06510</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-quantm-lightBlue transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-quantm-lightBlue transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-quantm-lightBlue transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-quantm-lightBlue transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {currentYear} Quantm Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};