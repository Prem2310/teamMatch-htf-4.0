// create login page taking email, email and password as input and send data to the server
import React, { useState } from "react";


export default function Login() {
    const [email, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    async function login() {
        const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        })
        .then((res) => {
            return res.json()
        }
        ).then((data) => {
            document.cookie = `LOGIN_INFO=${data.token}`
            console.log(data)
        }
        ).catch((err) => {
            console.log(err)
        }
    )}
    
    return (
        <div className="flex flex-col w-fit justify-center items-center m-auto mt-20">
        <h1>Login</h1>

        <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setUsername(e.target.value)}
            className="border-2 border-black rounded-xl p-2 m-2 w-52"
        />
        <input
            type="password"
            placeholder="password"
            value={password}
            className="border-2 border-black rounded-xl p-2 m-2 w-52"
            onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={login} className="bg-blue-400 w-fit p-2 rounded-full">Login</button>
        </div>
    );
}