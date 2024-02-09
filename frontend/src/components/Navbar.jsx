import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-between p-5">
        <div>pfp</div>
        <div className="flex">
          <p className="ml-10 text-lg">Home</p>
          <p className="ml-10 text-lg">Vision</p>
          <p className="ml-10 text-lg">About Us</p>
        </div>
        <div className="flex">
          <p className="ml-10 text-lg">Sign Up</p>
          <p className="ml-10 text-lg">Log In</p>
        </div>
      </div>
      <div>
        <hr className="dark:text-black-900" />
      </div>
    </div>
  );
};

export default Navbar;
