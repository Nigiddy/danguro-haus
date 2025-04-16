
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "DanguroHaus made finding our dream home effortless. Their expertise and attention to detail are unmatched.",
    author: "Sarah Johnson",
    role: "Homeowner"
  },
  {
    id: 2,
    quote: "The team at DanguroHaus went above and beyond to help us sell our property at the best possible price.",
    author: "Michael Chen",
    role: "Property Seller"
  },
  {
    id: 3,
    quote: "As a first-time buyer, I appreciated the guidance and support throughout the entire process. Highly recommended!",
    author: "Emma Rodriguez",
    role: "First-time Buyer"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-danguro">
      <div className="container-custom text-white">
        <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <Quote className="h-12 w-12 text-white/20 absolute -top-6 -left-2" />
            
            <div className="flex flex-col md:flex-row gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg transition-all duration-300 ${
                    index === activeIndex ? "scale-105 border border-white/30" : "opacity-70"
                  }`}
                >
                  <p className="text-white/90 mb-6">{testimonial.quote}</p>
                  <div className="mt-auto">
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-white/70">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    index === activeIndex ? "bg-white" : "bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
