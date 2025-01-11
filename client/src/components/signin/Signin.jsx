import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signin({setSignedin, setRoleu}) {

    const navigate = useNavigate()

    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function signinhandler(e) {
        e.preventDefault();
        try {

            const url = role === "user"
                ? "http://localhost:3000/user/signin"
                : "http://localhost:3000/creator/signin";

            const response = await axios.post(url, {
                email,
                password,
                role
            });
            console.log(response)
            if(response.data.token){
                localStorage.setItem("token", response.data.token)
                setSignedin(true)
                setRoleu(role)
                navigate("/")
            }else{
                alert("wrong credentials");
            }
            
        } catch (e) {
            console.log("this is error")
            alert("wrong credentials");
            console.log(e);
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
                <form>
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
                            onChange={(e) => setRole(e.target.value)}
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
                        onClick={signinhandler}
                    >
                        Sign In
                    </button>
                </form>
                <Link to="/signup" className="block text-center mt-8 hover:underline">Don't have an account? Sign up</Link>
            </div>
        </div>
    );
}