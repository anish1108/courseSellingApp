import React from 'react';

const Coursecard = ({ title, description, image, price }) => {
    return (
        <div className="max-w-sm bg-white shadow-2xl rounded-lg overflow-hidden ">
            {/* Image */}
            <img className="w-full h-48 object-cover" src={image} alt="not found" />

            {/* Content */}
            <div className="p-6">
                {/* Title */}
                <h2 className="text-lg font-bold text-gray-800">{title}</h2>

                {/* Description */}
                <p className="mt-2 text-gray-600 text-sm">{description}</p>

                {/* Price */}
                <div className="flex items-center justify-between mt-4">
                    <span className="text-blue-600 font-semibold text-lg">${price}</span>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Coursecard;
