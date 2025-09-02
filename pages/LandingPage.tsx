
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedProducts } from '../services/productService';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';

const LandingPage: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const products = await getFeaturedProducts();
      setFeaturedProducts(products);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center bg-white p-10 rounded-lg shadow-md">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Welcome to <span className="text-indigo-600">E-Commerce Fusion</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Discover a curated selection of high-quality products designed for the modern lifestyle.
        </p>
        <Link
          to="/store"
          className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
        >
          Shop Now
        </Link>
      </section>

      {/* Featured Products Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        {loading ? (
           <div className="text-center">Loading featured products...</div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
            </div>
        )}
      </section>
    </div>
  );
};

export default LandingPage;
