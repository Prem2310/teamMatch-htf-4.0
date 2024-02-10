import React from "react";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-between p-3 ">
        <div>
          {" "}
          <img src={logo} alt="logo" className="h-6" />
        </div>
        <div className="flex">
          <p className="ml-10 text-lg hover:text-gray-400">Home</p>
          <p className="ml-10 text-lg hover:text-gray-400">Vision</p>
          <p className="ml-10 text-lg hover:text-gray-400">About Us</p>
        </div>
        <div className="flex">
          <p className="ml-10 text-lg hover:text-gray-400">Sign Up</p>
          <p className="ml-10 text-lg hover:text-gray-400">Log In</p>
        </div>
      </div>
      <div>
        <hr className="dark:text-black-900" />
      </div>
    </div>
  );
};

export default Navbar;
