import React from "react";
import { Link } from "react-router-dom";
import '../global.css';
import logo from '../asset/logo.svg';

function NavBar() {
  return (
    <div className="flex items-center justify-between p-4  ">
      <div className="flex items-center ml-5">
        <img src={logo} alt="Logo" className="w-10 h-8 mr-2" />
        <h1 className="text-xl font-bold">Furniro</h1>
      </div>

      <nav className="flex items-center space-x-14">
        <Link to="/" className="hover:text-red-500 text-xl">Home</Link>
        <Link to="/shop" className="hover:text-red-500 text-xl">Shop</Link>
        <Link to="/about" className="hover:text-red-500 text-xl">About</Link>
        <Link to="/contact" className="hover:text-red-500 text-xl">Contact</Link>
      </nav>

      <div className="flex items-center space-x-4 mr-5">
        {/* Add icons for wishlist, cart, profile, and search */}
        {/* For example, you can use Font Awesome icons or other icon libraries */}
        <span className="text-xl hover:text-gray-300">&#128269;</span> {/* Search icon */}
        <span className="text-xl hover:text-gray-300">&#x2665;</span> {/* Heart icon for wishlist */}
        <span className="text-xl hover:text-gray-300">&#x1F6D2;</span> {/* Shopping cart icon */}
        <span className="text-xl hover:text-gray-300">&#x1F464;</span> {/* Profile icon */}
      </div>
    </div>
  );
}

export default NavBar;
