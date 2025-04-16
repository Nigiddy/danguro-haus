
import { Button } from "@/components/ui/button";
import PropertyCard from "./PropertyCard";

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    title: "Modern House in Downtown",
    location: "123 Main St, Vancouver",
    price: "$599,000",
    beds: 3,
    baths: 2,
    sqft: "2,100",
    tag: "For Sale"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
    title: "Luxury Apartment with View",
    location: "456 Park Ave, Toronto",
    price: "$750,000",
    beds: 2,
    baths: 2,
    sqft: "1,800",
    tag: "New"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
    title: "Minimalist Family Home",
    location: "789 Oak St, Montreal",
    price: "$450,000",
    beds: 4,
    baths: 3,
    sqft: "2,400",
    tag: "For Sale"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
    title: "Urban Townhouse",
    location: "101 Pine St, Calgary",
    price: "$385,000",
    beds: 3,
    baths: 2.5,
    sqft: "1,950",
    tag: "Hot Deal"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    title: "Mountain View Retreat",
    location: "202 Cedar Rd, Banff",
    price: "$875,000",
    beds: 4,
    baths: 3,
    sqft: "2,800",
    tag: "Exclusive"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    title: "Lakefront Property",
    location: "303 Birch Lane, Victoria",
    price: "$925,000",
    beds: 5,
    baths: 4,
    sqft: "3,200",
    tag: "Premium"
  }
];

const PropertyListingSection = () => {
  return (
    <section className="py-16 bg-danguro-muted">
      <div className="container-custom max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-danguro-dark mb-2">
          Discover your ideal home
        </h2>
        
        <div className="flex gap-4 mb-8">
          <Button variant="outline" className="bg-white border-danguro text-danguro hover:bg-danguro hover:text-white">
            All Homes
          </Button>
          <Button variant="outline" className="bg-white hover:bg-danguro hover:text-white">
            For Sale
          </Button>
          <Button variant="outline" className="bg-white hover:bg-danguro hover:text-white">
            For Rent
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              image={property.image}
              title={property.title}
              location={property.location}
              price={property.price}
              beds={property.beds}
              baths={property.baths}
              sqft={property.sqft}
              tag={property.tag}
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button className="bg-danguro hover:bg-danguro/90">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropertyListingSection;
