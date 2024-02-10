import { useState } from "react";
import { useNavigate } from "react-router-dom";
import login_graphics from "../assets/login_graphics.png";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login() {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          document.cookie = `LOGIN_INFO=${data.token}`;
          const jwt = document.cookie
            .split("; ")
            .find((row) => row.startsWith("LOGIN_INFO"))
            .split("=")[1];
          if (jwt) {
            navigate("/profile");
          }
        } else {
          alert("invalid user details"); // Show the error message returned from the server
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div>
      <Navbar />
      <div className="flex gap-10 ">
        <div className="w-1/2 h-full min-h-screen px-7 flex flex-col mt-20">
          <h1 className="text-5xl font-bold text-black-700 mb-5 tracking-wide italic ">
            Match Maker OR What
          </h1>
          <h1 className="text-5xl font-light text-black-700  tracking-wide">
            Let's find your team
          </h1>
          <img src={login_graphics} alt="login" className="w-96 m-auto mt-10" />
        </div>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="w-1/2  bg-green-100 flex p-10 justify-center  "
        >
          <div className="flex flex-col w-full ml-20 mr-20 ">
            <h1 className="text-4xl font-semibold mb-5 mt-10">LOGIN</h1>
            <input
              type="text"
              placeholder="Email"
              value={email}
              className="border-2 border-black rounded-xl p-2 w-gull mb-5"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              className="border-2 border-black rounded-xl p-2 w-full mb-5"
              onChange={(e) => setPassword(e.target.value)}
            />

            <p className="text-black-700 text-sm mb-5">
              Dont have an account?
              <Link to="/signup" className="text-green-700">
                Sign Up
              </Link>
            </p>
            <button
              onClick={login}
              className="bg-black text-white p-2 rounded-full w-full mt-5"
            >
              Submit
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
