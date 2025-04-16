
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-danguro-light py-20">
        <div className="container-custom text-center max-w-lg">
          <h1 className="text-6xl font-bold text-danguro mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-danguro-dark mb-6">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          <Button asChild className="bg-danguro hover:bg-danguro/90">
            <Link to="/">Return to Homepage</Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
