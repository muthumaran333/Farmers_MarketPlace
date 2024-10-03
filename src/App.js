import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Slideshow from './Components/Slideshow';
import ProductCarousel from './Components/ProductCarousel'; 
import img1 from './Images/products_img/img1.jfif'; 
import img2 from './Images/products_img/img2.jfif'; 
import img3 from './Images/products_img/img3.jfif'; 
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
import { useParams } from 'react-router-dom';

// Sample products data
const productsData = [
  { id: 1, title: "Organic Apples", description: "High-quality organic apples from local farms.", image: img1, price: 2.5 },
  { id: 2, title: "Fresh Tomatoes", description: "Farm-fresh tomatoes, perfect for salads.", image: img2, price: 3.0 },
  { id: 3, title: "Sustainable Farming Solutions", description: "Innovative solutions for sustainable agriculture.", image: img3, price: 4.5 },
  { id: 4, title: "Product 4", description: "Description for product 4.", image: img1, price: 5.0 },
  { id: 5, title: "Product 5", description: "Description for product 5.", image: img2, price: 6.0 },
  { id: 6, title: "Product 6", description: "Description for product 6.", image: img3, price: 7.0 },
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

// Home component with Slideshow and ProductCarousel
function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulating an API call
    const fetchProducts = () => {
      setTimeout(() => {
        setProducts(productsData); // Set products after fetching
        setLoading(false); // Set loading to false after fetching
      }, 2000); // Simulate a 2-second loading time
    };

    fetchProducts();
  }, []);

  return (
    <>
      <HeroSection /> {/* Hero banner with call to action */}
      <CategoriesSection /> {/* Shop by category */}
      <WhyChooseUs /> {/* Why choose us section */}
      <Slideshow />

      <div className="container mx-auto py-8">
        <h2 className="text-4xl font-bold mb-4 text-center">Our Products</h2>

        {loading ? ( // Conditional rendering based on loading state
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-green-600"></div> {/* Simple spinner */}
          </div>
        ) : (
          <ProductCarousel products={products} />
        )}
      </div>
      <Testimonials />
    </>
  );
}

// ProductDetailsWrapper component to handle product details
function ProductDetailsWrapper() {
  const { productId } = useParams(); // Extract productId from URL

  // Use the global products array defined in App.js
  const product = productsData.find(p => p.id === parseInt(productId));

  return product ? (
    <ProductDetails product={product} />
  ) : (
    <p>Product not found.</p>
  );
}

function App() {
  return (
    <Router>
      <Header /> {/* Always show the Header */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page with slideshow and products */}
        <Route path="/products" element={<ProductGrid products={productsData} />} />
        <Route path="/signin" element={<SignIn />} /> {/* SignIn page */}
        <Route path="/createaccount" element={<CreateAccount />} /> {/* Create Account page */}
        <Route path="/create-business-account" element={<CreateBusinessAccount />} /> {/* Business account */}
        <Route path="/profile" element={<Profile userType={user.userType} user={user} />} />
        <Route path="/products/:productId" element={<ProductDetailsWrapper />} />
        <Route path="/about" element={<AboutUs />} /> {/* About Us page route */}
      </Routes>
      <Footer /> {/* Always show the Footer */}
    </Router>
  );
}

export default App;
