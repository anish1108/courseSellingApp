import React, { useState } from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom"

export default function Signup() {

    const navigate = useNavigate();

    const [role, setRole] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function signuphandler(e) {
        e.preventDefault();
        try{
            const url = role === "user" 
            ? "http://localhost:3000/user/signup" 
            : "http://localhost:3000/creator/signup";

        const response = await axios.post(url, {
            username,
            email,
            password,
            role
        });
        navigate("/signin")
        console.log("signup successfull");
            
        }catch(err){
            alert("something is wrong")
            console.log(err);
        }
        
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
                <form>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='mb-4'>
                        <select
                            id="options"
                            name="options"
                            value={role}
                            onChange={(e)=>setRole(e.target.value)}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        >
                            <option value="" disabled>
                                -- Select the role --
                            </option>
                            <option value="user">User</option>
                            <option value="creator">Creator</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                        onClick={signuphandler}
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}