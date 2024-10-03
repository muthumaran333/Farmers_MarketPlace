import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegStar, FaPercent } from 'react-icons/fa'; // Import additional icons
import logo from '../Images/logo.png'; // Import your logo image (adjust the path accordingly)

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu visibility
  };

  return (
    <header className="bg-gradient-to-r from-green-500 to-blue-600 p-4 relative z-20">
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center transition-transform duration-300 hover:scale-105 mb-4">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <div className="flex items-center mb-4 md:mb-0">
            <FaRegStar className="text-yellow-300 mr-2" size={28} />
            <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">Limited Time Offer!</h2>
          </div>
          <div className="flex items-center">
            <FaPercent className="text-red-300 mr-2" size={24} />
            <p className="text-lg md:text-xl font-medium">Up to 50% off on selected items!</p>
          </div>
        </div>
        <button className="bg-yellow-300 text-black font-semibold py-2 px-5 rounded-lg shadow-md hover:bg-yellow-400 transition duration-300 transform hover:scale-105 mt-4 md:mt-0">
          Shop Now
        </button>
      </div>

      {/* Navigation Bar */}
      <nav className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Website Logo" className="h-12 md:h-16 mr-2" /> {/* Add your logo here */}
          <div className="text-white text-2xl font-bold">AGRICULTURE</div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/signin" className="text-white">Sign In</Link></li>
          <li><Link to="/createaccount" className="text-white">Create Account</Link></li>
          <li><Link to="/about" className="text-white">About Us</Link></li>
          <li><Link to="/profile" className="text-white">Profile</Link></li>
          <li><Link to="/" className="text-white">Home</Link></li>
        </ul>

        {/* Menu Button for Mobile */}
        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          {/* Hamburger Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        <div className={`fixed top-0 right-0 h-full w-1/2 bg-green-500 text-white transition-transform transform z-50 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-white text-2xl">×</button>
          <ul className="flex flex-col items-center justify-center h-full space-y-8">
            <li><Link to="/signin" className="text-white text-xl" onClick={toggleMenu}>Sign In</Link></li>
            <li><Link to="/createaccount" className="text-white text-xl" onClick={toggleMenu}>Create Account</Link></li>
            <li><Link to="/about" className="text-white text-xl" onClick={toggleMenu}>About Us</Link></li>
            <li><Link to="/profile" className="text-white text-xl" onClick={toggleMenu}>Profile</Link></li>
            <li><Link to="/" className="text-white text-xl" onClick={toggleMenu}>Home</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
