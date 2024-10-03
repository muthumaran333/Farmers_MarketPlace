import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, title, description, image, price }) => {
  return (
    <div className="max-w-sm w-full h-[420px] rounded overflow-hidden shadow-lg flex flex-col justify-between"> {/* Fixed height for uniformity */}
      <Link to={`/products/${id}`}>
        <img 
          className="w-full h-48 object-cover object-center" // Image maintains aspect ratio
          src={image} 
          alt={title} 
        />
      </Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-2">{description}</p>
        <p className="text-green-600 font-semibold text-lg">${price}</p>
      </div>
      <div className="px-6 pb-6">
        <Link
          to={`/products/${id}`}
          className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
