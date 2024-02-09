import React from "react";
import ProfilePic from "../assets/pfp.png";
import { FiMessageSquare, FiUserPlus } from "react-icons/fi";

const ProfileCard = () => {
  const skills = ["Javascript", "React", "Node"];

  return (
    <div className="bg-white rounded-lg p-4 shadow-lg">
      <div className="flex flex-col items-center">
        <img
          src={ProfilePic}
          className="rounded-full"
          style={{ height: "100px" }}
          alt="Profile"
        />
        <p className="mt-2 text-xl font-bold">John Doe</p>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="border-2 border-gray-300 rounded-3xl  text-center"
          >
            {skill.length > 5 ? `${skill.substring(0, 5)}...` : skill}
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-xl p-2 px-3 flex items-center">
          <FiUserPlus className="mr-2" /> Add to team
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white rounded-xl p-2 px-3 flex items-center">
          <FiMessageSquare className="mr-2" /> Chat
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
