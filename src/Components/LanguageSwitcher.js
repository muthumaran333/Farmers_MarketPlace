import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher text-center py-4 bg-gray-100 shadow-md rounded-lg w-82 mx-auto">
      <h4 className="text-lg font-semibold text-gray-700 mb-2">{t('select_language')}:</h4>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => changeLanguage('en')}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
        >
          English
        </button>
        <button
          onClick={() => changeLanguage('fr')}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-300"
        >
          Français
        </button>
        <button
          onClick={() => changeLanguage('es')}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
        >
          Español
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
