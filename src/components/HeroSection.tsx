
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-danguro-dark mb-6">
            Buy, Rent, or Sell Your Property with Ease
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            We make finding your dream property simple, seamless, and stress-free.
          </p>
          
          {/* Property Search Tabs */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-4">
            <Tabs defaultValue="buy">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="buy">Buy</TabsTrigger>
                <TabsTrigger value="rent">Rent</TabsTrigger>
                <TabsTrigger value="sell">Sell</TabsTrigger>
              </TabsList>
              
              <TabsContent value="buy" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <Input placeholder="Enter location" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                        <SelectItem value="land">Land</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Min Price</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="No min" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="100000">$100,000</SelectItem>
                        <SelectItem value="200000">$200,000</SelectItem>
                        <SelectItem value="300000">$300,000</SelectItem>
                        <SelectItem value="500000">$500,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Max Price</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="No max" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="300000">$300,000</SelectItem>
                        <SelectItem value="500000">$500,000</SelectItem>
                        <SelectItem value="750000">$750,000</SelectItem>
                        <SelectItem value="1000000">$1,000,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1+</SelectItem>
                        <SelectItem value="2">2+</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                        <SelectItem value="4">4+</SelectItem>
                        <SelectItem value="5">5+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Button className="w-full bg-danguro hover:bg-danguro/90">
                  <Search className="mr-2 h-4 w-4" /> Search Properties
                </Button>
              </TabsContent>
              
              <TabsContent value="rent" className="space-y-4">
                {/* Similar form fields as buy, with rent-specific options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <Input placeholder="Enter location" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Min Rent</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="No min" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="500">$500</SelectItem>
                        <SelectItem value="1000">$1,000</SelectItem>
                        <SelectItem value="1500">$1,500</SelectItem>
                        <SelectItem value="2000">$2,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Max Rent</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="No max" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1500">$1,500</SelectItem>
                        <SelectItem value="2000">$2,000</SelectItem>
                        <SelectItem value="3000">$3,000</SelectItem>
                        <SelectItem value="5000">$5,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1+</SelectItem>
                        <SelectItem value="2">2+</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                        <SelectItem value="4">4+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Button className="w-full bg-danguro hover:bg-danguro/90">
                  <Search className="mr-2 h-4 w-4" /> Find Rentals
                </Button>
              </TabsContent>
              
              <TabsContent value="sell" className="space-y-4">
                <div className="space-y-4">
                  <Input placeholder="Enter your property address" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
                      <SelectItem value="land">Land</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="w-full bg-danguro hover:bg-danguro/90">
                    Get Property Valuation
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        <div className="hidden lg:block relative">
          <img 
            src="/lovable-uploads/rrlestate.jpg" 
            alt="Modern house" 
            className="w-full h-auto rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
