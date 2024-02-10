import React, { useState } from "react";
import loginPic from "../assets/try3.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    document.cookie = `LOGIN_INFO=${data.token}`;
    console.log(data);
  }

  return (
    <div className="flex gap-10">
      <div className="w-2/3 h-full min-h-screen px-7 flex flex-col mt-20">
        <h1 className="text-5xl font-bold text-black-700 mb-5 tracking-wide italic ">
          Match Maker OR What
        </h1>
        <h1 className="text-5xl font-light text-black-700 mb-5 tracking-wide">
          Let's find your team
        </h1>
        <img
          src="https://cdn.dribbble.com/users/18463/screenshots/2963559/media/954dd0a6f73d21fb26d13713da763e08.png?resize=800x600&vertical=center"
          alt="login"
          className="w-full h-full"
        />
      </div>
      <div className="w-1/2 bg-green-100 flex p-10">
        <div className="flex flex-col w-full ">
          <h1 className="text-4xl font-semibold mb-5">LOGIN</h1>
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
          <button
            onClick={login}
            className="bg-black text-white p-2 rounded-full w-full mt-5"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
