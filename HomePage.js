import React from 'react';
import Header from './Header';

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to MyShop</h1>
          <p className="text-lg md:text-xl mb-6">
            Discover the best products at unbeatable prices.
          </p>
          <a
            href="/shop"
            className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Example Product Cards */}
            {[1, 2, 3, 4].map((product) => (
              <div
                key={product}
                className="bg-white shadow-md rounded-lg p-4 text-center"
              >
                <img
                  src={`https://via.placeholder.com/150`}
                  alt="Product"
                  className="w-full h-40 object-cover mb-4 rounded"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Product {product}
                </h3>
                <p className="text-gray-600 mb-4">$99.99</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} MyShop. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;