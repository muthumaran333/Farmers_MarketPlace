import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Introduction */}
        <h2 className="text-4xl font-bold text-green-900 mb-8">About Us</h2>
        <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto">
          Welcome to <span className="font-bold text-green-600">Farmer Marketplace</span>, your trusted online platform connecting local farmers directly with consumers. We aim to empower farmers by giving them the tools to sell their fresh, organic produce directly to customers, ensuring the highest quality and sustainability in every transaction.
        </p>

        {/* Mission Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-green-800 mb-4">Our Mission</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our mission is to create a thriving marketplace that fosters transparent, sustainable, and ethical trading practices between farmers and communities. We believe in fair prices for farmers and fresh, healthy produce for customers. By leveraging technology, we aim to create a seamless experience that benefits both ends of the marketplace.
          </p>
        </div>

        {/* Connection to Farmers and Community */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-green-800 mb-4">Connecting Farmers with Communities</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At <span className="font-bold text-green-600">Farmer Marketplace</span>, we prioritize building strong relationships between local farmers and their communities. By providing a direct line between producers and consumers, we support sustainable farming, reduce food waste, and ensure that communities have access to fresh, locally grown products. Our platform helps farmers focus on what they do best—growing high-quality food—while we take care of the rest.
          </p>
        </div>

        {/* Values Section */}
        <div className="flex flex-col md:flex-row justify-around items-start text-left max-w-4xl mx-auto space-y-8 md:space-y-0">
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-bold text-green-900 mb-2">Sustainability</h4>
            <p className="text-gray-600">
              We believe in supporting sustainable farming practices that ensure long-term health for both the land and the community.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-bold text-green-900 mb-2">Fair Trade</h4>
            <p className="text-gray-600">
              Farmers should receive a fair price for their hard work. We are committed to transparent pricing and ethical trading practices.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-bold text-green-900 mb-2">Community Support</h4>
            <p className="text-gray-600">
              Our platform strengthens the relationship between farmers and their local communities, encouraging local support and reducing food miles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
