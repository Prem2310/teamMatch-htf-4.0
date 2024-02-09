import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

const Dashboard = () => {
  return (
    <div className="bg-green-100">
      <Navbar />
      <div className="flex">
        <div>
            <img src="../assets/pfp.png" className="rounded-3xl"/>
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
