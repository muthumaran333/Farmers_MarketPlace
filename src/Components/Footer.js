import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
          {/* Company Info */}
          <div className="mb-4 md:mb-0 w-full md:w-1/4">
            <h3 className="text-3xl font-bold">Farmer Marketplace</h3>
            <p className="mt-2 text-sm">
              Connecting farmers with local communities. Fresh produce at your fingertips.
            </p>
            <p className="mt-2 text-sm">📞 (123) 456-7890</p>
            <p className="text-sm">✉️ info@farmermarketplace.com</p>
          </div>

          {/* Quick Links */}
          <div className="mb-4 md:mb-0 w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li><a href="#home" className="hover:text-green-300 transition duration-200">Home</a></li>
              <li><a href="#about" className="hover:text-green-300 transition duration-200">About Us</a></li>
              <li><a href="#products" className="hover:text-green-300 transition duration-200">Products</a></li>
              <li><a href="#contact" className="hover:text-green-300 transition duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="mb-4 md:mb-0 w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-2">Customer Service</h4>
            <ul className="space-y-1">
              <li><a href="#faq" className="hover:text-green-300 transition duration-200">FAQ</a></li>
              <li><a href="#shipping" className="hover:text-green-300 transition duration-200">Shipping Info</a></li>
              <li><a href="#returns" className="hover:text-green-300 transition duration-200">Returns</a></li>
              <li><a href="#privacy" className="hover:text-green-300 transition duration-200">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#facebook" className="hover:text-green-300 transition duration-200">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#twitter" className="hover:text-green-300 transition duration-200">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#instagram" className="hover:text-green-300 transition duration-200">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#linkedin" className="hover:text-green-300 transition duration-200">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-6 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Farmer Marketplace. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
