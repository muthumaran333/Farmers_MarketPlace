import React from 'react';
import CustomerProfile from './CustomerProfile';
import SellerProfile from './SellerProfile';

const Profile = ({ userType, user }) => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-6">Profile</h1>
      
      {/* Shared Personal Information Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Personal Information</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>

      {/* Render Customer or Seller Profile */}
      {userType === 'customer' ? (
        <CustomerProfile user={user} />
      ) : (
        <SellerProfile user={user} />
      )}

      {/* Shared Account Settings */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">Account Settings</h2>
        <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">
          Update Account Info
        </button>
      </div>
    </div>
  );
};

export default Profile;
