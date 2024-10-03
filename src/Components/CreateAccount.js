import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateAccount = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = (e) => {
    e.preventDefault();
    // Logic to handle account creation
    console.log("Account created with:", { name, mobile, password });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-12">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Logo / Heading */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-semibold text-green-900">Create Account</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleCreateAccount}>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First and last name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              required
            />
          </div>

          {/* Mobile Number */}
          <div className="mb-4">
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
              Mobile number
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md text-gray-500 sm:text-sm">
                IN +91
              </span>
              <input
                type="tel"
                id="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Mobile number"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-r-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 6 characters"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              To verify your number, we will send you a text message with a temporary code.
              Message and data rates may apply.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
          >
            Verify mobile number
          </button>
        </form>

        {/* Additional Links */}
        <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Buying for work? 
  <Link to="/create-business-account" className="text-green-500 hover:text-green-600">
    Create a free business account
  </Link></p>
          <p className="text-sm text-gray-600 mt-4">Already have an account? <Link to="/signin" className="text-green-500 hover:text-green-600">Sign in</Link></p>
        </div>

        {/* Footer Links */}
        <div className="text-center text-xs text-gray-500 mt-6">
          <a href="#conditions" className="hover:text-green-600">Conditions of Use</a> •{' '}
          <a href="#privacy" className="hover:text-green-600">Privacy Notice</a> •{' '}
          <a href="#help" className="hover:text-green-600">Help</a>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-400 mt-2">
          &copy; {new Date().getFullYear()} Farmer Marketplace. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
