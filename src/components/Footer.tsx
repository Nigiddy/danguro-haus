
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-danguro text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">DanguroHaus</h3>
            <p className="text-white/80 mb-6">
              We help you find your dream property with ease. Our expert team is dedicated to providing exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/80 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-white">About Us</Link></li>
              <li><Link to="/properties" className="text-white/80 hover:text-white">Properties</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white">Services</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Customer Support</h4>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-white/80 hover:text-white">FAQs</Link></li>
              <li><Link to="/help" className="text-white/80 hover:text-white">Help Center</Link></li>
              <li><Link to="/privacy" className="text-white/80 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-white/80 hover:text-white">Terms of Service</Link></li>
              <li><Link to="/feedback" className="text-white/80 hover:text-white">Feedback</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact Information</h4>
            <address className="not-italic text-white/80 space-y-2">
              <p>123 Real Estate Avenue</p>
              <p>Vancouver, BC V6B 1A9</p>
              <p>Canada</p>
              <p className="mt-4">Phone: +1 (604) 555-1234</p>
              <p>Email: info@dangurohaus.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-white/60 text-sm">
            © {new Date().getFullYear()} DanguroHaus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
