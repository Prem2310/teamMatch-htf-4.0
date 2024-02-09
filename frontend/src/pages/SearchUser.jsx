import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import ProfilePic from "../assets/pfp.png";
import { FiEdit2 } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import TeamDetails from "../components/TeamDetails";
import ProfileCard from "../components/ProfileCard";

const Dashboard = () => {
  return (
    <div className="bg-green-100 min-h-screen">
      <Navbar />
      <div className="flex gap-7">
        <div className="mt-10 rounded-xl w-full mx-10">
          <SearchBar />
          <div className="grid grid-cols-4 gap-10 p-10">
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
