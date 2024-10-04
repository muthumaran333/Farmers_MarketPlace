import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import translation hook
import i18n from './i18next/i18n'; // Import the i18n configuration
import LiveChat from './Components/LiveChat';
import Header from './Components/Header';
import Slideshow from './Components/Slideshow';
import ProductCarousel from './Components/ProductCarousel'; 
import img1 from './Images/products_img/img1.jfif'; 
import img2 from './Images/products_img/img2.jfif'; 
import img3 from './Images/products_img/img3.jfif'; 
import apple from './Images/products_img/apple.jfif'; 
import brocolii from './Images/products_img/brocolii.jfif'; 
import Cabbage from './Images/products_img/Cabbage.jfif'; 
import carrort from './Images/products_img/carrort_img.jfif'; 
import Cucumber from './Images/products_img/Cucumbers.jfif'; 
import spenesh from './Images/products_img/spenesh.jfif';
import tomato from './Images/products_img/tomato.jfif';
import Pumpkins from './Images/products_img/Pumpkins.jfif';
import ProductGrid from './Components/ProductGrid';
import Footer from './Components/Footer';
import SignIn from './Components/SignIn';
import CreateAccount from './Components/CreateAccount'; 
import ProductDetails from './Components/ProductDetails';
import CreateBusinessAccount from './Components/CreateBusinessAccount';
import Profile from './Components/Profiles/Profile';
import AboutUs from './Components/AboutUs';
import CategoriesSection from './Components/HomePageComponent/CategoriesSection';
import HeroSection from './Components/HomePageComponent/HeroSection';
import Testimonials from './Components/HomePageComponent/Testimonials';
import WhyChooseUs from './Components/HomePageComponent/WhyChooseUs';
import LanguageSwitcher from './Components/LanguageSwitcher'; // Import the Language Switcher
import { useParams } from 'react-router-dom';

// Sample products data
const products = [
  {
    id: 1,
    title: "Organic Apples",
    description: "High-quality organic apples from local farms.",
    image: img1,
    price: 2.5,
    reviews: [
      { id: 1, text: "Amazing quality!", rating: 5 },
      { id: 2, text: "Fresh and delicious.", rating: 4 },
      { id: 3, text: "Good value for the price.", rating: 4 },
      { id: 4, text: "Could be a bit fresher.", rating: 3 },
    ],
  },
  {
    id: 2,
    title: "Fresh Tomatoes",
    description: "Farm-fresh tomatoes, perfect for salads.",
    image: img2,
    price: 3.0,
    reviews: [
      { id: 1, text: "Perfect for salads!", rating: 5 },
      { id: 2, text: "Nice and ripe.", rating: 4 },
      { id: 3, text: "A bit too soft for my liking.", rating: 3 },
      { id: 4, text: "Loved the taste!", rating: 5 },
    ],
  },
  {
    id: 3,
    title: "Sustainable Farming Solutions",
    description: "Innovative solutions for sustainable agriculture.",
    image: img3,
    price: 4.5,
    reviews: [
      { id: 1, text: "Great product for sustainable farming.", rating: 5 },
      { id: 2, text: "Helpful and efficient.", rating: 4 },
      { id: 3, text: "Improved our yield significantly.", rating: 5 },
    ],
  },
  {
    id: 4,
    title: "Product 4",
    description: "Description for product 4.",
    image: img1,
    price: 5.0,
    reviews: [
      { id: 1, text: "Very useful.", rating: 4 },
      { id: 2, text: "Satisfied with the quality.", rating: 4 },
    ],
  },
  {
    id: 5,
    title: "Product 5",
    description: "Description for product 5.",
    image: img2,
    price: 6.0,
    reviews: [
      { id: 1, text: "Exceeded my expectations!", rating: 5 },
      { id: 2, text: "Highly recommend.", rating: 5 },
      { id: 3, text: "Good, but a bit expensive.", rating: 4 },
    ],
  },
  {
    id: 6,
    title: "Product 6",
    description: "Description for product 6.",
    image: img3,
    price: 7.0,
    reviews: [
      { id: 1, text: "Very well made.", rating: 5 },
      { id: 2, text: "Would buy again.", rating: 5 },
      { id: 3, text: "A bit overpriced for what you get.", rating: 3 },
    ],
  },
  {
    id: 7,
    title: "Product 6",
    description: "Description for product 6.",
    image: apple,
    price: 7.0,
    reviews: [
      { id: 1, text: "Very well made.", rating: 5 },
      { id: 2, text: "Would buy again.", rating: 5 },
      { id: 3, text: "A bit overpriced for what you get.", rating: 3 },
    ],
  },
  {
    id: 8,
    title: "Product 6",
    description: "Description for product 6.",
    image: brocolii,
    price: 7.0,
    reviews: [
      { id: 1, text: "Very well made.", rating: 5 },
      { id: 2, text: "Would buy again.", rating: 5 },
      { id: 3, text: "A bit overpriced for what you get.", rating: 3 },
    ],
  },
  {
    id: 9,
    title: "Product 6",
    description: "Description for product 6.",
    image: Cabbage,
    price: 7.0,
    reviews: [
      { id: 1, text: "Very well made.", rating: 5 },
      { id: 2, text: "Would buy again.", rating: 5 },
      { id: 3, text: "A bit overpriced for what you get.", rating: 3 },
    ],
  },
  {
    id: 10,
    title: "Product 6",
    description: "Description for product 6.",
    image: Cucumber,
    price: 7.0,
    reviews: [
      { id: 1, text: "Very well made.", rating: 5 },
      { id: 2, text: "Would buy again.", rating: 5 },
      { id: 3, text: "A bit overpriced for what you get.", rating: 3 },
    ],
  },
  {
    id: 11,
    title: "Product 6",
    description: "Description for product 6.",
    image: carrort,
    price: 7.0,
    reviews: [
      { id: 1, text: "Very well made.", rating: 5 },
      { id: 2, text: "Would buy again.", rating: 5 },
      { id: 3, text: "A bit overpriced for what you get.", rating: 3 },
    ],
  },
  {
    id: 12,
    title: "Product 6",
    description: "Description for product 6.",
    image: spenesh,
    price: 7.0,
    reviews: [
      { id: 1, text: "Very well made.", rating: 5 },
      { id: 2, text: "Would buy again.", rating: 5 },
      { id: 3, text: "A bit overpriced for what you get.", rating: 3 },
    ],
  },
  {
    id: 13,
    title: "Product 6",
    description: "Description for product 6.",
    image: tomato,
    price: 7.0,
    reviews: [
      { id: 1, text: "Very well made.", rating: 5 },
      { id: 2, text: "Would buy again.", rating: 5 },
      { id: 3, text: "A bit overpriced for what you get.", rating: 3 },
    ],
  },
  {
    id: 14,
    title: "Product 6",
    description: "Description for product 6.",
    image: Pumpkins,
    price: 7.0,
    reviews: [
      { id: 1, text: "Very well made.", rating: 5 },
      { id: 2, text: "Would buy again.", rating: 5 },
      { id: 3, text: "A bit overpriced for what you get.", rating: 3 },
    ],
  },
];

// Example user object for both customer and seller
const user = {
  userType: 'seller',  // Change to 'customer' or 'seller'
  name: 'John Doe',
  email: 'john@example.com',
  phone: '1234567890',
  orders: [
    { id: 1, date: '2023-08-01', status: 'Shipped', total: 120 },
    { id: 2, date: '2023-08-05', status: 'Delivered', total: 50 }
  ],
  products: [
    { id: 1, name: 'Organic Apples', price: 25, status: 'In Stock' },
    { id: 2, name: 'Fresh Tomatoes', price: 18, status: 'Out of Stock' }
  ],
  sales: { totalSales: 500, totalOrders: 30 }
};

function Home() {
  const { t } = useTranslation(); // Hook for translation
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProductList(products); // Simulate product loading
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <HeroSection /> {/* Hero banner with call to action */}
      <CategoriesSection /> {/* Shop by category */}
      <WhyChooseUs /> {/* Why choose us section */}
      <Slideshow />

      <div className="container mx-auto py-8">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Our Products {/* Translated "Our Products" */}
        </h2>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-green-600"></div> {/* Loading Spinner */}
          </div>
        ) : (
          <ProductCarousel products={productList} />
        )}
      </div>

      <Testimonials />
    </>
  );
}

// ProductDetailsWrapper component
function ProductDetailsWrapper({ products }) {
  const { t } = useTranslation(); // Hook for translation
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  return product ? (
    <ProductDetails product={product} />
  ) : (
    <p>{t('product_not_found')}</p>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <LiveChat /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductGrid products={products} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/create-business-account" element={<CreateBusinessAccount />} />
        <Route path="/profile" element={<Profile userType={user.userType} user={user} />} />
        <Route path="/products/:productId" element={<ProductDetailsWrapper products={products} />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
