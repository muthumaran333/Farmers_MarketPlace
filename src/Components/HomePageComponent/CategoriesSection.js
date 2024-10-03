import React from 'react';

const categories = [
  { name: 'Fruits', image: '/images/categories/fruits.jpg' },
  { name: 'Vegetables', image: '/images/categories/vegetables.jpg' },
  { name: 'Dairy', image: '/images/categories/dairy.jpg' },
  { name: 'Meat', image: '/images/categories/meat.jpg' },
];

const CategoriesSection = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-4xl font-bold text-center mb-8">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div key={category.name} className="rounded-lg shadow-lg overflow-hidden">
            <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
