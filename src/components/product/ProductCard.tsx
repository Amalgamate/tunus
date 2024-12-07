import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  onAddToCart: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  description,
  imageUrl,
  onAddToCart
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={imageUrl} 
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-purple-600 font-bold">${price.toFixed(2)}</span>
          <button
            onClick={() => onAddToCart(id)}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-purple-700 transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;