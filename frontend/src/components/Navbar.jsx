import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-between p-3 ">
        <div>
          <img src={logo} alt="logo" className="h-6" />
        </div>
        <div className="flex">
          <Link to="/" className="ml-10 text-lg hover:text-gray-400">Home</Link>
          <Link to="/vision" className="ml-10 text-lg hover:text-gray-400">Vision</Link>
          <Link to="/about" className="ml-10 text-lg hover:text-gray-400">About Us</Link>
        </div>
        <div className="flex">
          <Link to="/signup" className="ml-10 text-lg hover:text-gray-400">Sign Up</Link>
          <Link to="/login" className="ml-10 text-lg hover:text-gray-400">Log In</Link>
        </div>
      </div>
      <div>
        <hr className="dark:text-black-900" />
      </div>
    </div>
  );
};

export default Navbar;