import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu visibility
  };

  return (
    <header className="bg-green-500 p-4 relative z-20">
      <nav className="flex justify-between items-center">
        <div className="text-white text-2xl font-bold">AGRICULTURE</div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/signin" className="text-white">Sign In</Link></li> {/* Updated Link for SignIn */}
          <li><Link to="/createaccount" className="text-white">Create Account</Link></li>
          <li><Link to="/about" className="text-white">About Us</Link></li> {/* About Us link */}
          <li><a href="#offers" className="text-white">Offers</a></li>
          <li><Link to="/profile" className="text-white">Profile</Link></li> {/* Link to Profile Page */}

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
            <li><Link to="/signin" className="text-white text-xl" onClick={toggleMenu}>Sign In</Link></li> {/* Fixed SignIn Link */}
            <li><Link to="/createaccount" className="text-white text-xl" onClick={toggleMenu}>Create Account</Link></li>
            <li><Link to="/about" className="text-white text-xl" onClick={toggleMenu}>About Us</Link></li> {/* About Us link */}

            <li><Link to="/profile" className="text-white text-xl" onClick={toggleMenu}>Profile</Link></li> {/* Link to Profile Page */}

            <li><a href="#offers" className="text-white text-xl" onClick={toggleMenu}>Offers</a></li>
            <li><Link to="/" className="text-white text-xl" onClick={toggleMenu}>Home</Link></li> {/* Added Home */}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
