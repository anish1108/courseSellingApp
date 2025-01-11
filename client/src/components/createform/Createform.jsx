import React, { useState } from 'react';
import axios from 'axios';

const Createform = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: '',
        price: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { title, description, image, price } = formData;
        const token = localStorage.getItem('token');
        console.log(token)
        try {
            const response = await axios.post('http://localhost:3000/creator/createCourse', {
                title,
                description,
                image,
                price
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            console.log("course creted")
        } catch (e) {
            alert("invalid user")
            console.log("something error");
            console.log(e)
        }

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-lg"
            >
                <h2 className="text-2xl font-bold text-center mb-6">Add Product</h2>

                {/* Title */}
                <div className="mb-4">
                    <label
                        htmlFor="title"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Enter product title"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label
                        htmlFor="description"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Enter product description"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows="4"
                        required
                    ></textarea>
                </div>

                {/* Image URL */}
                <div className="mb-4">
                    <label
                        htmlFor="image"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Image URL
                    </label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="Enter image URL"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>

                {/* Price */}
                <div className="mb-6">
                    <label
                        htmlFor="price"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Price ($)
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Enter product price"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Createform;
