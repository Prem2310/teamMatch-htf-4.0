import React from "react";
import Navbar from "../components/Navbar";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <header className="bg-green-100 flex-grow flex items-center justify-center text-center p-10">
        <div>
          <h1 className="text-6xl mb-4">MatchMaker</h1>
          <p className="text-2xl">
            We connect professionals to build their dream teams and accomplish
            projects together.
          </p>
          <p className="text-2xl mb-8">
            professionals to build their dream teams and accomplish projects
          </p>
          <button className="bg-green-900 hover:bg-green-500 text-white font-bold py-2 px-4 rounded mt-4 transition duration-500 ease-in-out">
            Get Started
          </button>
        </div>
      </header>
      <section className="bg-white p-10">
        <h2 className="text-4xl mb-4">Why Choose MatchMaker?</h2>
        <div className="flex gap-6">
          <div>
            <h3 className="text-3xl mb-2">Top-tier Teams</h3>
            <p>
              With MatchMaker, you can assemble top-tier teams of tech
              enthusiasts and professionals. We provide a platform for you to
              connect with experts in various fields to bring your projects to
              life.
            </p>
          </div>
          <div>
            <h3 className="text-3xl mb-2">Powerful Tools</h3>
            <p>
              MatchMaker offers a suite of powerful tools to help manage your
              projects. From task tracking to communication tools, we have
              everything you need to run your projects smoothly and efficiently.
            </p>
          </div>
          <div>
            <h3 className="text-3xl mb-2">Active Community</h3>
            <p>
              Join our active community of professionals. With MatchMaker, you
              can unlock the power of collaboration, gain insights from experts,
              and contribute to a community of like-minded individuals.
            </p>
          </div>
        </div>
      </section>
      <footer className="bg-green-100 p-10 text-center">
        <p>&copy; 2022 MatchMaker. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;
