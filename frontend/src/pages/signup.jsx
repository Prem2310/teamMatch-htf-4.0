import { useState } from "react";
import loginPic from "../assets/try3.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signup() {
    const response = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="flex gap-10">
      <motion.div
        className="w-1/2 min-h-screen px-7 flex flex-col justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold text-black-700 mb-5 tracking-wide italic ">
          Match Maker OR What
        </h1>
        <h1 className="text-5xl font-light text-black-700 mb-5 tracking-wide">
          Let's find your team
        </h1>
        <motion.img
          src={loginPic}
          alt="login"
          className="w-72 h-72"
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, repeatDelay: 5 }}
        />
      </motion.div>
      <motion.div
        className="w-1/2 bg-green-100 flex justify-center items-center"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <div className="flex flex-col w-1/2 -mt-24">
          <h1 className="text-4xl font-semibold mb-5">REGISTER</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border-2 border-black rounded-xl p-2 w-full mb-5"
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            className="border-2 border-black rounded-xl p-2 w-full mb-5"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            className="border-2 border-black rounded-xl p-2 w-full mb-5"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Link to="/login">Already have an account? Login</Link>
          <button
            onClick={signup}
            className="bg-black text-white p-2 rounded-full w-full mt-5"
          >
            Submit
          </button>
        </div>
      </motion.div>
    </div>
  );
}
