import React from 'react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-purple-600">TunuPerks</Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-purple-600">Home</Link>
            <Link to="/products" className="text-gray-600 hover:text-purple-600">Products</Link>
            <Link to="/about" className="text-gray-600 hover:text-purple-600">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-purple-600">Contact</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" className="text-gray-600 hover:text-purple-600">
              <ShoppingCart className="w-6 h-6" />
            </Link>
            <Link to="/profile" className="text-gray-600 hover:text-purple-600">
              <User className="w-6 h-6" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-600 hover:text-purple-600">Home</Link>
              <Link to="/products" className="text-gray-600 hover:text-purple-600">Products</Link>
              <Link to="/about" className="text-gray-600 hover:text-purple-600">About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-purple-600">Contact</Link>
              <Link to="/cart" className="text-gray-600 hover:text-purple-600">Cart</Link>
              <Link to="/profile" className="text-gray-600 hover:text-purple-600">Profile</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;