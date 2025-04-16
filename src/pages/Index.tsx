
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import ContentSectionWithImage from "@/components/ContentSectionWithImage";
import PropertyListingSection from "@/components/PropertyListingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <TrustedBySection />
        
        <ContentSectionWithImage
          title="Empowering Tomorrow's Communities"
          description="At DanguroHaus, we're committed to creating sustainable living spaces that foster community and well-being. Our expertise in modern architectural design and commitment to quality construction ensure that every project exceeds expectations."
          image="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          imagePosition="right"
          buttonText="Learn More"
          buttonLink="/about"
        />
        
        <ContentSectionWithImage
          title="Elevate Your Living Space with Expert Renovations"
          description="Transform your home with our professional renovation services. From minor updates to complete home transformations, our skilled team delivers superior quality with minimal disruption to your life."
          image="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          imagePosition="left"
          features={[
            "Kitchen renovations",
            "Bathroom remodels",
            "Basement finishing",
            "Interior design services",
            "Custom cabinetry",
            "Outdoor living spaces"
          ]}
          buttonText="Our Services"
          buttonLink="/services"
        />
        
        <ContentSectionWithImage
          title="Explore Our Latest Listings Available for Purchase Today"
          description="Discover a wide range of exceptional properties that match your lifestyle and investment goals. Our curated selection offers something for everyone, from first-time buyers to seasoned investors."
          image="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
          imagePosition="right"
          features={[
            "Residential properties",
            "Commercial spaces",
            "Investment opportunities",
            "Luxury listings",
            "Vacation homes"
          ]}
          buttonText="Browse Properties"
          buttonLink="/properties"
        />
        
        <PropertyListingSection />
        
        <TestimonialsSection />
        
        <FaqSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
