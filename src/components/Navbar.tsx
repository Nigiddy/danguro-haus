
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="text-danguro font-bold text-2xl">
          DanguroHaus
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-danguro-dark hover:text-danguro font-medium">
            Home
          </Link>
          <Link to="/buy" className="text-danguro-dark hover:text-danguro font-medium">
            Buy
          </Link>
          <Link to="/rent" className="text-danguro-dark hover:text-danguro font-medium">
            Rent
          </Link>
          <Link to="/sell" className="text-danguro-dark hover:text-danguro font-medium">
            Sell
          </Link>
          <Link to="/properties" className="text-danguro-dark hover:text-danguro font-medium">
            Properties
          </Link>
          <Link to="/contact" className="text-danguro-dark hover:text-danguro font-medium">
            Contact
          </Link>
        </div>

        <div className="hidden md:block">
          <Button className="bg-danguro hover:bg-danguro/90">Login</Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-danguro-dark"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-md absolute top-full left-0 right-0 z-50">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-danguro-dark hover:text-danguro font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/buy"
              className="text-danguro-dark hover:text-danguro font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Buy
            </Link>
            <Link
              to="/rent"
              className="text-danguro-dark hover:text-danguro font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Rent
            </Link>
            <Link
              to="/sell"
              className="text-danguro-dark hover:text-danguro font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sell
            </Link>
            <Link
              to="/properties"
              className="text-danguro-dark hover:text-danguro font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Properties
            </Link>
            <Link
              to="/contact"
              className="text-danguro-dark hover:text-danguro font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-danguro hover:bg-danguro/90 w-full">Login</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
