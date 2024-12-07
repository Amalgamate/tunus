import React from 'react';
import ProductCard from '../components/product/ProductCard';

const Home = () => {
  const featuredProducts = [
    {
      id: '1',
      name: 'Premium Headphones',
      price: 199.99,
      description: 'High-quality wireless headphones with noise cancellation',
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: '2',
      name: 'Smart Watch',
      price: 299.99,
      description: 'Advanced smartwatch with health tracking features',
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: '3',
      name: 'Wireless Earbuds',
      price: 149.99,
      description: 'True wireless earbuds with premium sound quality',
      imageUrl: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&q=80&w=1000'
    }
  ];

  const handleAddToCart = (id: string) => {
    console.log(`Added product ${id} to cart`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to TunuPerks</h1>
          <p className="text-xl mb-8">Discover amazing deals on premium products</p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">On orders over $50</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
              <p className="text-gray-600">Handpicked premium items</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">100% secure checkout</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;