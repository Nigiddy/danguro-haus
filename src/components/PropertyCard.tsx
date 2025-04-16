
import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  tag?: string;
}

const PropertyCard = ({
  image,
  title,
  location,
  price,
  beds,
  baths,
  sqft,
  tag,
}: PropertyCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        {tag && (
          <Badge className="absolute top-3 left-3 bg-danguro">
            {tag}
          </Badge>
        )}
        <button className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow-md hover:bg-gray-100 transition-colors">
          <Heart className="h-4 w-4 text-gray-500" />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 text-danguro-dark truncate">{title}</h3>
        <p className="text-sm text-gray-500 mb-3">{location}</p>
        
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-danguro text-lg">{price}</span>
          <div className="flex space-x-3 text-xs text-gray-500">
            <span>{beds} Beds</span>
            <span>{baths} Baths</span>
            <span>{sqft} sqft</span>
          </div>
        </div>
        
        <Button variant="outline" className="w-full border-danguro text-danguro hover:bg-danguro hover:text-white">
          View Details
        </Button>
      </div>
    </div>
  );
};

export default PropertyCard;
