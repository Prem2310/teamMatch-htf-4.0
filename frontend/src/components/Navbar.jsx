import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-between p-5">
        <div>pfp</div>
        <div className="flex">
          <p className="ml-10">Home</p>
          <p className="ml-10">Vision</p>
          <p className="ml-10">About Us</p>
        </div>
        <div className="flex">
          <p className="ml-10">Sign Up</p>
          <p className="ml-10">Log In</p>
        </div>
      </div>
      <div>
        <hr className="dark:text-black-900" />
      </div>
    </div>
  );
};

export default Navbar;
