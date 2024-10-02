import React from 'react';

const NavBar = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          {/* Logo and Name */}
          <div className="flex items-center">
            <img src="/path-to-your-logo.png" alt="Logo" className="h-8" /> {/* Adjust the path as necessary */}
            <span className="text-xl font-semibold text-gray-800 ml-2">Just Trip</span>
          </div>
          {/* Navigation Links */}
          <div className="flex space-x-4">
            <a href="/home" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="/about" className="text-gray-700 hover:text-gray-900">About</a>
            <a href="/packages" className="text-gray-700 hover:text-gray-900">Packages</a>
            <a href="/blog" className="text-gray-700 hover:text-gray-900">Blog</a>
            <a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a>
          </div>
        </div>
        {/* Book Now Button */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default NavBar;
