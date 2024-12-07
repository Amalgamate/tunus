import React from 'react';
import { CheckCircle } from 'lucide-react';

interface MembershipCardProps {
  tier: 'BASIC' | 'PREMIUM' | 'ELITE';
  price: number;
  features: string[];
  isPopular?: boolean;
  onSelect: () => void;
}

const MembershipCard: React.FC<MembershipCardProps> = ({
  tier,
  price,
  features,
  isPopular,
  onSelect,
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${isPopular ? 'border-2 border-purple-500' : ''}`}>
      {isPopular && (
        <div className="bg-purple-500 text-white text-center py-2">
          Most Popular
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900">{tier}</h3>
        <div className="mt-4">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-gray-500">/month</span>
        </div>
        
        <ul className="mt-6 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle className="h-5 w-5 text-purple-500 mr-2" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button
          onClick={onSelect}
          className={`mt-8 w-full py-3 px-4 rounded-md font-semibold text-white 
            ${isPopular ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-600 hover:bg-gray-700'}
            transition-colors`}
        >
          Select Plan
        </button>
      </div>
    </div>
  );
};

export default MembershipCard;