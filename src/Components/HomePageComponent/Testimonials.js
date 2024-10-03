import React from 'react';

const testimonials = [
  {
    name: 'Alice Johnson',
    role: 'Customer',
    review: 'I love shopping on Farmer Marketplace! The produce is always fresh and the prices are great. I can support local farmers while getting high-quality food for my family.',
    image: '/images/testimonials/alice.jpg',
  },
  {
    name: 'Robert Smith',
    role: 'Farmer',
    review: 'As a local farmer, Farmer Marketplace has been an amazing platform for me to sell directly to customers. The support has been fantastic and the process is smooth.',
    image: '/images/testimonials/robert.jpg',
  },
  {
    name: 'Emily Davis',
    role: 'Customer',
    review: 'Farmer Marketplace makes it so easy to find organic products. I’ve recommended this site to all my friends because of the incredible selection and service!',
    image: '/images/testimonials/emily.jpg',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Customers and Farmers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-green-800 mb-2">{testimonial.name}</h3>
              <p className="text-sm text-green-600 italic mb-4">{testimonial.role}</p>
              <p className="text-gray-700">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
