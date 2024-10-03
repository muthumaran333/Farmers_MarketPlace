import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const ProductCarousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardsToShow = 3; // Number of cards to display at once

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(products.length / cardsToShow));
  };

  // Automatic slide change every 3 seconds
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [isHovered]);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-full md:w-1/3 px-4" // Ensures cards take equal space
          >
            <ProductCard
              id={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}
            />
          </div>
        ))}
      </div>

      {/* See More Products Button */}
      <div className="text-center mt-4">
        <Link to="/products">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 flex items-center justify-center">
            <span className="mr-2">See More Products</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </Link>
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center mt-2">
        {Array.from({ length: Math.ceil(products.length / cardsToShow) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 mx-1 rounded-full ${currentIndex === index ? 'bg-green-600' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
