import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Implement sign-in logic here
    console.log("Sign in with:", email);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-12">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Logo */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-semibold text-green-900">Farmer Marketplace</h1>
        </div>

        {/* Sign-in Form */}
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email or mobile phone number
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
          >
            Continue
          </button>

          <p className="mt-2 text-xs text-gray-600">
            By continuing, you agree to Farmer Marketplace's{' '}
            <a href="#conditions" className="text-green-500 hover:text-green-600">Conditions of Use</a> and{' '}
            <a href="#privacy" className="text-green-500 hover:text-green-600">Privacy Notice</a>.
          </p>

          <div className="mt-4">
            <a href="#help" className="text-green-500 hover:text-green-600 text-sm">Need help?</a>
          </div>
        </form>

        <div className="border-t border-gray-200 my-6"></div>

        {/* Amazon Business */}
        <div className="text-center">
          <a href="#business" className="text-green-500 hover:text-green-600 text-sm">Buying for work? Shop on Farmer Business</a>
        </div>

        {/* New to Amazon */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">New to Farmer Marketplace?</p>
          <Link
            to="/createaccount"
            className="block bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
          >
            Create your Farmer Marketplace account
          </Link>
        </div>

        {/* Footer Links */}
        <div className="text-center text-xs text-gray-500 mt-6">
          <a href="#conditions" className="hover:text-green-600">Conditions of Use</a> •{' '}
          <a href="#privacy" className="hover:text-green-600">Privacy Notice</a> •{' '}
          <a href="#help" className="hover:text-green-600">Help</a>
        </div>

        <div className="text-center text-xs text-gray-400 mt-2">
          &copy; {new Date().getFullYear()} Farmer Marketplace. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default SignIn;
