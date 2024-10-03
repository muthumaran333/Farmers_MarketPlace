import React, { useState } from 'react';
import Reviews from './Reviews';
import LanguageSwitcher from './LanguageSwitcher';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ProductDetails = ({ product }) => {
  const { t } = useTranslation(); // Destructure `t`
  const navigate = useNavigate();
  const [userRating, setUserRating] = useState(0);
  const [averageRating, setAverageRating] = useState(product.rating || 0);

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleRatingClick = (rating) => {
    setUserRating(rating);
    setAverageRating(rating); // Update the average rating here
  };

  return (
    <><LanguageSwitcher/>
    <div className="container mx-auto py-8">
      <button 
        onClick={handleBackClick} 
        className="mb-4 text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
      >
        {t('back_button')} {/* Translated 'Back' */}
      </button>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <div className="overflow-hidden relative w-full h-64 md:h-80">
            <img 
              src={product.image} 
              alt={product.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 transform hover:scale-110" 
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-10 mt-6 md:mt-0">
          <h2 className="text-4xl font-bold mb-4">{product.title}</h2>
          <p className="text-green-600 text-3xl font-semibold mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">{t('rate_product')}</h3>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <span 
                  key={star} 
                  className={`cursor-pointer text-${userRating >= star ? 'yellow-500' : 'gray-300'}`}
                  onClick={() => handleRatingClick(star)}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="text-md mt-1">{t('your_rating')}: {userRating} {userRating ? '★' : ''}</p>
            <p className="text-md">{t('average_rating')}: {averageRating} ★</p>
          </div>

          <div className="flex space-x-4 mb-4">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200">
              {t('add_to_cart')}
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200">
              {t('buy_now')}
            </button>
          </div>

          <div className="flex space-x-4 mb-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none">
              {t('share_on_facebook')}
            </button>
            <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none">
              {t('share_on_twitter')}
            </button>
          </div>
        </div>
      </div>
      <Reviews product={product} />
    </div>
    </>
  );
};

export default ProductDetails;
