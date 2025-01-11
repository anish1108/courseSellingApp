import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

// added this navbar from chatgpt but it is not working signup and signin is working properly

const Navbar = ({signedin, setSignedin, roleu, setRoleu}) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="bg-blue-400 text-white shadow-2xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link to="/" className="text-2xl font-bold">
                                Mera Course
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-4">
                            <Link to="/" className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                                Home
                            </Link>

                            {
                                roleu === "creator" ? <Link to="/create-course" className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                                Add Course
                            </Link>: null
                            }
                            
                            <Link to="/services" className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                                Services
                            </Link>
                            <Link to="/contact" className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                                Contact
                            </Link>
                            

                            {
                                signedin ? <button onClick={()=>{
                                    localStorage.removeItem("token")
                                    setSignedin(false)
                                    setRoleu("")
                                    
                                }} 
                                className="bg-blue-500 px-3 py-2 rounded-md text-sm font-medium" >Sign Out</button>

                                : <button onClick={()=>{
                                    navigate("/signin")
                                }} className="bg-blue-500 px-3 py-2 rounded-md text-sm font-medium" >Sign In</button>
                            }
                            
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-white hover:bg-blue-500 px-3 py-2 rounded-md"
                            >
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    {isOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="space-y-1 px-2 pb-3">
                            <Link
                                to="/"
                                className="block hover:bg-blue-500 px-3 py-2 rounded-md text-base font-medium"
                            >
                                Home
                            </Link>
                            <Link
                                to="/about"
                                className="block hover:bg-blue-500 px-3 py-2 rounded-md text-base font-medium"
                            >
                                About
                            </Link>
                            <Link
                                to="/services"
                                className="block hover:bg-blue-500 px-3 py-2 rounded-md text-base font-medium"
                            >
                                Services
                            </Link>
                            <Link
                                to="/contact"
                                className="block hover:bg-blue-500 px-3 py-2 rounded-md text-base font-medium"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
            <Outlet />
        </>
    );
};

export default Navbar;
