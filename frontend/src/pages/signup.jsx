// create signup page taking username, email and password as input and send data to the server

import React, { useState } from "react";

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
        <div className="flex flex-col w-fit justify-center items-center m-auto mt-20">
        <h1>Signup</h1>

        <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border-2 border-black rounded-xl p-2 m-2 w-52"
        />
        <input
            type="text"
            placeholder="email"
            value={email}
            className="border-2 border-black rounded-xl p-2 m-2 w-52"
            onChange={(e) => setEmail(e.target.value)}
        />
        <input
            type="password"
            placeholder="password"
            value={password}
            className="border-2 border-black rounded-xl p-2 m-2 w-52"
            onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={signup} className="bg-blue-400 w-fit p-2 rounded-full">Signup</button>
        </div>
    );
    }
