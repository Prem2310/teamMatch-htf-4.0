import ProfilePic from "../assets/pfp.png";
import { FiUserPlus } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

const ProfileCard = () => {
  const skills = ["Javascript", "React", "Node"];

  return (
    <div className="bg-white rounded-lg p-4 shadow-lg">
      <div className="flex flex-col items-center">
        <img
          src={ProfilePic}
          className="rounded-full border-2 border-green-800 "
          style={{ height: "100px" }}
          alt="Profile"
        />
        <p className="mt-2 text-xl font-bold">John Doe</p>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="border-2 border-gray-300 rounded-3xl hover:border-gray-500 text-center"
          >
            {skill.length > 5 ? `${skill.substring(0, 5)}...` : skill}
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        <button className="hover:bg-green-200 text-black rounded-full p-2 flex items-center">
          <FiUserPlus />
        </button>
        <button className=" hover:bg-green-200 text-black rounded-full p-2 flex items-center">
          <FaLinkedin />
        </button>
        <button className=" hover:bg-green-200 text-black rounded-full p-2 flex items-center">
          <FaGithub />
        </button>
        <button className=" hover:bg-green-200 text-black rounded-full p-2  flex items-center">
          <CiTwitter />
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
