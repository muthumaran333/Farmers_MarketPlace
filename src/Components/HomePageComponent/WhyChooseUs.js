import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Why Choose Farmer Marketplace?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <i className="fas fa-leaf text-green-600 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Fresh Produce</h3>
            <p>All our products are sourced directly from local farmers, ensuring freshness and quality.</p>
          </div>
          <div>
            <i className="fas fa-seedling text-green-600 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Sustainable Farming</h3>
            <p>We support sustainable farming practices that benefit both the environment and the community.</p>
          </div>
          <div>
            <i className="fas fa-users text-green-600 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Community Support</h3>
            <p>Your purchase supports local farmers and contributes to the local economy.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
