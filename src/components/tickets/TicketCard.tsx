import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface TicketCardProps {
  event: {
    title: string;
    date: string;
    venue: string;
    imageUrl?: string;
  };
  status: 'ACTIVE' | 'USED' | 'CANCELLED' | 'REFUNDED';
  purchaseDate: string;
  price: number;
  pointsEarned: number;
}

const TicketCard: React.FC<TicketCardProps> = ({
  event,
  status,
  purchaseDate,
  price,
  pointsEarned,
}) => {
  const statusColors = {
    ACTIVE: 'bg-green-100 text-green-800',
    USED: 'bg-gray-100 text-gray-800',
    CANCELLED: 'bg-red-100 text-red-800',
    REFUNDED: 'bg-yellow-100 text-yellow-800',
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {event.imageUrl && (
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">{event.title}</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[status]}`}>
            {status}
          </span>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2" />
            <span>{new Date(event.date).toLocaleDateString()}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{event.venue}</span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Purchase Date:</span>
            <span>{new Date(purchaseDate).toLocaleDateString()}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>Price:</span>
            <span>${price.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-purple-600 mt-2 font-medium">
            <span>Points Earned:</span>
            <span>{pointsEarned} points</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;