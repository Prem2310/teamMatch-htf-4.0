import React from "react";
import Navbar from "../components/Navbar";
import ProfilePic from "../assets/pfp.png";
import TeamDetails from "../components/TeamDetails";
import AddSkills from "../components/AddSkills";

const ProfilePage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex gap-7 bg-green-100 min-h-screen">
        <div className="bg-white ml-10 mt-10 mb-10 rounded-xl w-1/4 flex flex-col items-center">
          <img
            src={ProfilePic}
            className="rounded-3xl"
            style={{ height: "250px" }}
            alt="Profile"
          />
          <p className="mt-5 text-2xl">John Doe</p>
          <p className="mt-2 text-lg">johndoe@example.com</p>
          <p className="mt-2 text-lg">A short bio about John Doe</p>

          <div className="mt-5">
            <button className="bg-green-200 hover:bg-green-500 text-black font-bold py-2 px-4 rounded">
              Edit Profile
            </button>

            <button className="bg-green-200 hover:bg-green-500 text-black font-bold py-2 px-4 rounded ml-5">
              Log Out
            </button>
          </div>

          <div>
            <h1 className="text-2xl mt-10">Your Teams</h1>

            <div>
              <TeamDetails />
              <TeamDetails />
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-xl w-2/3 mx-10">
          <AddSkills />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
