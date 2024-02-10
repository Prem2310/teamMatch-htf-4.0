import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {

    const [currUser, setCurrUser] = useState({})

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
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])


    return (
        <div className="bg-white">
            <div className="flex justify-between p-3 items-center font-bricolage ">
                <div>
                    <img src={logo} alt="logo" className="h-10" />
                </div>
                <div className="flex">
                    <Link to="/" className="ml-10 text-lg hover:text-gray-400">
                        Home
                    </Link>
                    <Link to="/vision" className="ml-10 text-lg hover:text-gray-400">
                        Vision
                    </Link>
                    <Link to="/about" className="ml-10 text-lg hover:text-gray-400">
                        About Us
                    </Link>
                    <Link to="/searchUser" className="ml-10 text-lg hover:text-gray-400">
                        Peoples
                    </Link>
                </div>
                <div className="flex">
                    {
                        currUser.username &&
                        <Link to="/profile" className="ml-10 text-lg hover:text-gray-400 pr-10">
                            {currUser.username}
                        </Link>
                    }
                    {
                        !currUser.username &&
                        <>
                            <Link to="/signup" className="ml-10 text-lg hover:text-gray-400">
                            Sign Up
                            </Link>
                            <Link to="/login" className="ml-10 text-lg hover:text-gray-400">
                                Log In
                            </Link>
                        </>
                    }
                </div>
            </div>
            <div>
                <hr className="dark:text-black-900" />
            </div>
        </div>
    );
};

export default Navbar;
