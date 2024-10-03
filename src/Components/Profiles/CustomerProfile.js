import React from 'react';

const CustomerProfile = ({ user }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Order History</h2>
      <ul>
        {user.orders.map((order) => (
          <li key={order.id} className="border p-4 mb-2 rounded">
            <p>Order ID: {order.id}</p>
            <p>Date: {new Date(order.date).toLocaleDateString()}</p>
            <p>Status: {order.status}</p>
            <p>Total: ${order.total}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerProfile;
