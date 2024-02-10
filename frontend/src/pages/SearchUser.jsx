import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import { CiBookmarkPlus } from "react-icons/ci";
import { CiBookmarkCheck } from "react-icons/ci";
import ProfileCard from "../components/ProfileCard";
import { Link } from "react-router-dom";

export default function Dashboard() {

    const [hackathons, setHackathons] = useState([]);
    const [currUser, setCurrUser] = useState({});
    const [allUsers, setAllUsers] = useState([]);
    const [selectedHackathon, setSelectedHackathon] = useState("");

    useEffect(() => {
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
            console.log(data,"DATA");
        })
        .catch((err) => {
            console.log(err);
        });

        fetch("http://localhost:5000/getAllHackathons")
            .then((response) => response.json())
            .then((data) =>{
                setHackathons(data);
                console.log(data,"hackathons");
            });

        fetch("http://localhost:5000/allUsers", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setAllUsers(data);
            console.log(data,"allUsers");
        })
        .catch((err) => {
            console.log(err);
        });

    }, []);

    const addHackathonInterested = (e) => {

        const currElement = e.target.parentElement.parentElement.children[0].innerText

        fetch('http://localhost:5000/updateHackathons', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: currUser.username,
                hackName: selectedHackathon.name
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <div className="bg-green-100 min-h-screen">
            <Navbar />
            <div className="flex gap-7">
                <div className="bg-white mt-10 ml-7 rounded-3xl w-1/3">
                    <div className="p-5">
                        <h1 className="text-2xl font-bold tracking-wide mb-8">
                            Hey There! Browse Your Hackathons{" "}
                        </h1>
                        {hackathons.map((hackathon, i) => (
                            <div
                                key={i}
                                className="border-2 border-green-800 rounded-xl p-2 w-full mb-2"
                            >
                                <Link to={hackathon.link} target="blank">
                                    <div className="flex justify-between items-center">
                                        <h3 className="hover:text-green-900">{hackathon.name} </h3>
                                        <button onClick={addHackathonInterested}>
                                            <CiBookmarkPlus size={20}/>
                                        </button>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-10 rounded-xl w-full pr-10">
                    <SearchBar />
                    <div className="grid grid-cols-3 gap-10 pt-10 ">
                        {allUsers.map((user, i) => (
                            user.username !== currUser.username &&
                            <ProfileCard user={user} currUser={currUser} key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

