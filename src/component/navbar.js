import React from "react";
import { Link } from "react-router-dom";
import '../global.css';
import logo from '../asset/logo.svg';

function NavBar() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4">
      <div className="flex items-center mb-4 md:mb-0">
        <img src={logo} alt="Logo" className="w-10 h-8 mr-2" />
        <h1 className="text-xl font-bold">Furniro</h1>
      </div>

      <nav className="md:flex items-center space-x-12">
        <Link to="/" className="hover:text-red-500 text-xl mb-2 md:mb-0 md:mt-0">Home</Link>
        <Link to="/shop" className="hover:text-red-500 text-xl mb-2 md:mb-0 md:mt-0">Shop</Link>
        <Link to="/about" className="hover:text-red-500 text-xl mb-2 md:mb-0 md:mt-0">About</Link>
        <Link to="/contact" className="hover:text-red-500 text-xl mb-2 md:mb-0 md:mt-0">Contact</Link>
      </nav>

      <div className="flex items-center space-x-4 md:space-x-8">
        {/* Add icons for wishlist, cart, profile, and search */}
        {/* For example, you can use Font Awesome icons or other icon libraries */}
        <span className="hidden md:flex text-xl hover:text-gray-300">&#128269;</span> {/* Search icon */}
        <span className="hidden md:flex text-xl hover:text-gray-300">&#x2665;</span> {/* Heart icon for wishlist */}
        <span className="hidden md:flex text-xl hover:text-gray-300">&#x1F6D2;</span> {/* Shopping cart icon */}
        <span className="hidden md:flex text-xl hover:text-gray-300">&#x1F464;</span> {/* Profile icon */}
      </div>
    </div>
  );
}

export default NavBar;
