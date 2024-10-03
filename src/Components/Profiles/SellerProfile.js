import React from 'react';

const SellerProfile = ({ user }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Product Listings</h2>
      <ul>
        {user.products.map((product) => (
          <li key={product.id} className="border p-4 mb-2 rounded">
            <p>Product Name: {product.name}</p>
            <p>Price: ${product.price}</p>
            <p>Status: {product.status}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded">
              Edit
            </button>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-bold mb-4 mt-6">Sales Overview</h2>
      <p>Total Sales: ${user.sales.totalSales}</p>
      <p>Total Orders: {user.sales.totalOrders}</p>
    </div>
  );
};

export default SellerProfile;
