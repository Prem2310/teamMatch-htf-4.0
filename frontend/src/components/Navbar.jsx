import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useEffect } from "react";

const Navbar = () => {
    

    // useEffect(() => {
    //     fetch("http://localhost:5000/getLoggedInUser", {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Authorization: document.cookie.split("; ").find((row) => row.startsWith("LOGIN_INFO")).split("=")[1],
    //         },
    //     })
    //         .then((res) => {
    //             return res.json();
    //         })
    //         .then((data) => {
    //             console.log(data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, [])


    return (
        <div className="bg-white">
            <div className="flex justify-between p-3 ">
                <div>
                    <img src={logo} alt="logo" className="h-6" />
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
                </div>
                <div className="flex">
                    <Link to="/signup" className="ml-10 text-lg hover:text-gray-400">
                        Sign Up
                    </Link>
                    <Link to="/login" className="ml-10 text-lg hover:text-gray-400">
                        Log In
                    </Link>
                </div>
            </div>
            <div>
                <hr className="dark:text-black-900" />
            </div>
        </div>
    );
};

export default Navbar;
