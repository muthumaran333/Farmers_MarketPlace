import React from 'react';
import { useParams } from 'react-router-dom'; // Import to fetch product ID from URL
import ProductDetails from './ProductDetails'; // Import your ProductDetails component

const ProductDetailsWrapper = ({ products }) => {
  const { productId } = useParams(); // Get the productId from the route
  const product = products.find((item) => item.id === parseInt(productId)); // Find the product by ID

  return (
    <ProductDetails product={product} />
  );
};

export default ProductDetailsWrapper;
