import React from "react";
import Navbar from "../components/Navbar";

const Landing = () => {
  return (
    <div className="bg-green-100 min-h-screen ">
      <Navbar />
      <div className="flex gap-6">
        <div className="bg-white p-5 mt-10 ml-10 rounded-2xl w-1/3">
          <p className="text-3xl">Build Your Dream Team with</p>
          <br></br>
          <h1 className="text-6xl">Coders Catalyst</h1>
          <br></br>
          <p>Caffine Overloaded, Code Transformers,Networking Nodes</p>
          <p>
            Coders Catalyst provides you with the tools and community to
            assemble top-tier teams of tech enthusiasts and professionals.
            Whether you're a startup founder, a seasoned developer, or a tech
            recruiter, we've got what you need to turbocharge your projects.
            Join us today and unlock the power of collaboration!
          </p>
          <button className="bg-green-200 hover:bg-green-500 text-black font-bold py-2 px-4 rounded mt-4">
            Get Started
          </button>
        </div>
        <div className="mt-10 mr-10 w-2/3 bg-white rounded-xl">
          <img
            src="https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/05/13204533/Teamwork.png"
            alt="teamwork"
            className="rounded-xl w-full h-full"
          />
          
        </div>
      </div>
    </div>
  );
};

export default Landing;
