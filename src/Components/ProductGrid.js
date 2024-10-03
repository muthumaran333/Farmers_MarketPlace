import React from 'react';
import ProductCard from './ProductCard'; // Import your existing ProductCard component
import { useNavigate } from 'react-router-dom';

const ProductGrid = ({ products }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-4xl font-bold text-center mb-6">Our Products</h2>
      <button 
        onClick={handleBackClick} 
        className="mb-4 text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
      >
        Back {/* Translated 'Back' */}
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}            // Ensure a unique key is passed
            id={product.id}              // Pass the id prop to ProductCard for routing and other purposes
            title={product.title}         // Pass title prop
            description={product.description}  // Pass description prop
            image={product.image}         // Pass image prop
            price={product.price}         // Pass price prop
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
