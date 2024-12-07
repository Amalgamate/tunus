import React from 'react';
import { Gift } from 'lucide-react';

interface RewardCardProps {
  title: string;
  description: string;
  pointsCost: number;
  imageUrl?: string;
  validUntil?: string;
  onClaim: () => void;
  disabled?: boolean;
}

const RewardCard: React.FC<RewardCardProps> = ({
  title,
  description,
  pointsCost,
  imageUrl,
  validUntil,
  onClaim,
  disabled,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-48 bg-purple-100 flex items-center justify-center">
          <Gift className="w-16 h-16 text-purple-500" />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {validUntil && (
          <p className="text-sm text-gray-500 mb-4">
            Valid until: {new Date(validUntil).toLocaleDateString()}
          </p>
        )}
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-purple-600">
            {pointsCost} points
          </span>
          <button
            onClick={onClaim}
            disabled={disabled}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Claim Reward
          </button>
        </div>
      </div>
    </div>
  );
};

export default RewardCard;