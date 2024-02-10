import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ProfilePic from "../assets/pfp.png";
import TeamDetails from "../components/TeamDetails";
import AddSkills from "../components/AddSkills";

const ProfilePage = () => {
  const [showForm, setShowForm] = useState(false);
  const [hackathon, setHackathon] = useState({
    name: "",
    website: "",
    venue: "",
    teamSize: "",
  });

  const handleInputChange = (event) => {
    setHackathon({ ...hackathon, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(hackathon); // You can replace this with your own logic to handle the form submission
  };
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

          {/* <div>
            <h1 className="text-2xl mt-10">Your Teams</h1>

            <div>
              <TeamDetails />
              <TeamDetails />
            </div>
          </div> */}
        </div>

        <div className="mt-10 rounded-xl w-2/3 mx-10">
          <AddSkills />
          {/* New hackathon section */}
          <div className="mt-4">
            <button
              className="bg-green-900 hover:bg-green-700 text-white rounded-xl p-2 px-3"
              onClick={() => setShowForm(!showForm)}
            >
              New Hackathon
            </button>
            {showForm && (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={hackathon.name}
                  onChange={handleInputChange}
                  className="border-2 border-black rounded-xl p-2 w-full mb-2 mt-7"
                />
                <input
                  type="text"
                  name="website"
                  placeholder="Website"
                  value={hackathon.website}
                  onChange={handleInputChange}
                  className="border-2 border-black rounded-xl p-2 w-full mb-2"
                />
                <input
                  type="text"
                  name="venue"
                  placeholder="Venue"
                  value={hackathon.venue}
                  onChange={handleInputChange}
                  className="border-2 border-black rounded-xl p-2 w-full mb-2"
                />
                <input
                  type="number"
                  name="teamSize"
                  placeholder="Number of members per team"
                  value={hackathon.teamSize}
                  onChange={handleInputChange}
                  className="border-2 border-black rounded-xl p-2 w-full mb-2"
                />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white rounded-xl p-2 px-3 mt-2"
                >
                  Submit Hackathon
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
