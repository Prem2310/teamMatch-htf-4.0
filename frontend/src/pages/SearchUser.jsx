import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import ProfilePic from "../assets/pfp.png";
import { FiEdit2 } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import TeamDetails from "../components/TeamDetails";
import ProfileCard from "../components/ProfileCard";

const Dashboard = () => {
  const [hackathons, setHackathons] = useState([]);

  useEffect(() => {
    fetch("https:///hackathons")
      .then((response) => response.json())
      .then((data) => setHackathons(data));
  }, []);

  return (
    <div className="bg-green-100 min-h-screen">
      <Navbar />
      <div className="flex gap-7">
        <div className="bg-white mt-10 ml-7 rounded-3xl w-1/3">
          {/* Create a div for browsing hackathons */}
          <div className="p-5">
            <h1 className="text-3xl font-bold tracking-wide">
              Hey There! Browse Your Hackathons{" "}
            </h1>
            {hackathons.map((hackathon) => (
              <div key={hackathon.id} className="border-2 border-black rounded-xl p-2 w-full mb-2">
                <h3>{hackathon.name}</h3>
                <p>{hackathon.website}</p>
                <p>{hackathon.venue}</p>
                <p>Team Size: {hackathon.teamSize}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 rounded-xl w-full pr-10">
          <SearchBar />
          <div className="grid grid-cols-3 gap-10 pt-10 ">
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