import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductDetails = ({ product }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  }; 

  return (
    <div className="container mx-auto py-8">
      <button 
        onClick={handleBackClick} 
        className="mb-4 text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
      >
        Back
      </button>
      <div className="flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <div className="overflow-hidden relative w-full h-64 md:h-80"> {/* Set a fixed height for the container */}
            <img 
              src={product.image} 
              alt={product.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 transform hover:scale-110" // Apply scale on hover
            />
          </div>
        </div>

        {/* Product Information */}
        <div className="w-full md:w-1/2 md:pl-10 mt-6 md:mt-0">
          <h2 className="text-4xl font-bold mb-4">{product.title}</h2>
          <p className="text-green-600 text-3xl font-semibold mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>

          {/* Add to Cart and Buy Now Buttons */}
          <div className="flex space-x-4 mb-4">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200">
              Add to Cart
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200">
              Buy Now
            </button>
          </div>

          {/* Product Rating */}
          <p className="text-md mb-4">
            Rating: {product.rating ? `${product.rating} ★` : 'No ratings yet'}
          </p>

          {/* Social Media Share */}
          <div className="flex space-x-4 mb-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none">
              Share on Facebook
            </button>
            <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none">
              Share on Twitter
            </button>
          </div>

          {/* Additional Information Section */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold mb-2">Additional Information</h3>
            <p className="text-md">Manufacturer: {product.manufacturer || 'N/A'}</p>
            <p className="text-md">Stock Status: {product.stockStatus || 'In Stock'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
