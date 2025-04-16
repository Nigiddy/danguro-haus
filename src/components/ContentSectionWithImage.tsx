
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface ContentSectionProps {
  title: string;
  description: string;
  image: string;
  features?: string[];
  imagePosition?: "left" | "right";
  buttonText?: string;
  buttonLink?: string;
  children?: ReactNode;
}

const ContentSectionWithImage = ({
  title,
  description,
  image,
  features,
  imagePosition = "right",
  buttonText = "Learn More",
  buttonLink = "#",
  children,
}: ContentSectionProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          imagePosition === "left" ? "lg:flex-row-reverse" : ""
        }`}>
          <div className={`order-2 ${imagePosition === "left" ? "lg:order-1" : "lg:order-2"}`}>
            <img 
              src={image} 
              alt={title}
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          
          <div className={`order-1 ${imagePosition === "left" ? "lg:order-2" : "lg:order-1"}`}>
            <h2 className="text-3xl font-bold text-danguro-dark mb-4">{title}</h2>
            <p className="text-gray-600 mb-6">{description}</p>
            
            {features && features.length > 0 && (
              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-danguro/10 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-danguro"></div>
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
            
            {children}
            
            {buttonText && (
              <Button 
                className="bg-danguro hover:bg-danguro/90 mt-4"
                asChild
              >
                <a href={buttonLink}>{buttonText}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSectionWithImage;
