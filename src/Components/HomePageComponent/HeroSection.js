import React from 'react';
import heroImage from '../../Images/hero-banner.jfif'; // Adjust the path as needed

const HeroSection = () => {
  return (
    <div className="relative w-full h-64">
      <img
        src={heroImage}
        alt="Hero Banner"
        className="object-cover w-full h-full"
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <h1 className="text-white text-4xl font-bold">Welcome to Farmer Marketplace</h1>
      </div>
    </div>
  );
};

export default HeroSection;
