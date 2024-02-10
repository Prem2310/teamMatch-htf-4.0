import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProfilePic from "../assets/pfp.png";
import TeamDetails from "../components/TeamDetails";
import AddSkills from "../components/AddSkills";

export default function ProfilePage(){
    const [showForm, setShowForm] = useState(false);

    const [updatedDetails, setUpdatedDetails] = useState({name: "", description: "",image: ""});
    const [reader,setReader]=useState()


    const [hackathon, setHackathon] = useState({
        name: "",
        website: "",
        venue: "",
        teamSize: "",
    });

    const [currUser, setCurrUser] = useState({})


    const handleInputChange = (event) => {
        setHackathon({ ...hackathon, [event.target.name]: event.target.value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(hackathon); // You can replace this with your own logic to handle the form submission
    };

    useEffect(() => {
        // Fetch the user's details
        fetch("http://localhost:5000/getLoggedInUser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: document.cookie.split("; ").find((row) => row.startsWith("LOGIN_INFO")).split("=")[1],
            },
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setCurrUser(data.user);
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });

        setReader(new FileReader());

        
    },[])

    const saveDetails = () => {
        fetch("http://localhost:5000/updateUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedDetails),
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    const uploadImage=(e)=>{
        reader.onload=(e)=>{
            setUpdatedDetails({...updatedDetails,image:e.target.result})
        }
        console.log(e.target.files[0],"file")
        const f=e.target.files[0];
        const check=reader.readAsDataURL(f);
        console.log(check,"check")
    }
    
    const editDetails = () => {
        // You can replace this with your own logic to handle the form submission
        console.log("Edit details");

    }


    return (
        <div>
            <Navbar />
            <div className="flex gap-7 bg-green-100 min-h-screen">
                <div className="bg-white ml-10 mt-10 mb-10 rounded-xl w-1/4 flex flex-col items-center">
                    <img
                        src={ProfilePic}
                        className="rounded-3xl cursor-pointer"
                        style={{ height: "250px" }}
                        alt="Profile"
                        // onClick={}
                    />
                    {
                        currUser.name ? <h1 className="text-3xl font-bold tracking-wide">{currUser.name}</h1> : <h1 className="text-3xl font-bold tracking-wide">Update Name...</h1>
                    }
                    <p className="mt-2 text-lg">{currUser.email}</p>
                    {
                        currUser.description ? <p className="mt-2 text-lg">{currUser.description}</p> : <p className="mt-2 text-lg">Update Bio...</p>
                    }

                    <div className="mt-5">
                        <button className="bg-green-200 hover:bg-green-500 text-black font-bold py-2 px-4 rounded" onClick={editDetails}>
                            Edit Profile
                        </button>

                        <button className="bg-green-200 hover:bg-green-500 text-black font-bold py-2 px-4 rounded ml-5">
                            Log Out
                        </button>
                    </div>

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
                    {
                        editDetails && 
                        <div className="mt-10 border-2 rounded-xl p-4 w-fit flex flex-col gap-2">
                            <input type="text" className="border-2 border-black p-2 rounded-full" placeholder="New Name..." onChange={
                                (e) => {
                                    setCurrUser({...updatedDetails, name: e.target.value})
                                }
                            }/>
                            {/* <input type="textarea" className="border-2 border-black p-2 rounded-full" placeholder="New Name..."/> */}
                            <textarea name="" id="" cols="30" rows="10" className="border-2 border-black p-2 rounded-xl" onChange={
                                (e) => {
                                    setCurrUser({...updatedDetails, description: e.target.value})
                                }
                            } ></textarea>

                            <button className="border-2 border-black rounded-md bg-white">
                                <input onChange={uploadImage} type="file" accept="image/*" />
                                {/* <input type="file" id="files" className="hidden cursor-pointer" accept="image/*" onChange={uploadImage}/>
                                <label for="files" className="cursor-pointer w-full">Add a profile pic ?</label> */}
                            </button>

                            <button type="submit" className="bg-green-200 hover:bg-green-500 text-black font-bold py-2 px-4 rounded" onClick={saveDetails}>
                                Save
                            </button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

