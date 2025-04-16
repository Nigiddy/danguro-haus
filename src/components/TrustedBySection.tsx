
import { Building, Building2, CircleUser, Users } from "lucide-react";

const TrustedBySection = () => {
  return (
    <div className="bg-danguro-light py-12">
      <div className="container-custom">
        <h2 className="text-center text-xl font-semibold text-danguro-dark mb-10">
          Trusted by the world's best
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
          <div className="flex flex-col items-center justify-center">
            <Building className="h-10 w-10 text-danguro opacity-70" />
            <span className="mt-2 text-sm font-medium text-danguro-accent">Royal Estate</span>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <Users className="h-10 w-10 text-danguro opacity-70" />
            <span className="mt-2 text-sm font-medium text-danguro-accent">Urban Living</span>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <Building2 className="h-10 w-10 text-danguro opacity-70" />
            <span className="mt-2 text-sm font-medium text-danguro-accent">City Homes</span>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <CircleUser className="h-10 w-10 text-danguro opacity-70" />
            <span className="mt-2 text-sm font-medium text-danguro-accent">Premium Trust</span>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <Building className="h-10 w-10 text-danguro opacity-70" />
            <span className="mt-2 text-sm font-medium text-danguro-accent">Archer Homes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBySection;
