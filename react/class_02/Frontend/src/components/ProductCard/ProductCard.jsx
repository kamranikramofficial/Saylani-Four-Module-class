import React from 'react';

const ProductCard = ({
    id,
    title,
    price, 
    description,
    image,
    material = "Handmade",
    category = "Bracelet"
}) => {
    return (
        <div className="w-full bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center pb-5">
            <div className="relative w-full">
                <span className="absolute top-4 right-4 bg-purple-100 text-purple-600 text-xs font-medium px-2.5 py-1 rounded-full">
                    {category}
                </span>
                <a href="#" className="block overflow-hidden rounded-t-xl">
                    <img 
                        className="p-4 w-full h-[300px] object-contain hover:scale-105 transition-transform duration-300" 
                        src={`${import.meta.env.VITE_IMAGE_BASE_URL}${image}`} 
                        alt={title} 
                    />
                </a>
            </div>
            <div className="px-5 w-full">
                <a href="#">
                    <h2 className="text-xl font-playfair font-semibold tracking-tight text-gray-900 text-center mt-2.5">
                        {title}
                    </h2>
                </a>
                <div className="flex justify-center gap-2 mt-1">
                    <span className="bg-pink-50 text-pink-600 text-xs px-2 py-1 rounded">
                        {material}
                    </span>
                    <span className="bg-purple-50 text-purple-600 text-xs px-2 py-1 rounded">
                        Customizable
                    </span>
                </div>
                <p className="text-gray-600 text-sm text-center mt-2.5 mb-5">
                    {description.length > 100 ? description.slice(0, 100) + '...' : description}
                </p>
                <div className="flex flex-col items-center gap-3 w-full">
                    <p className="text-2xl font-semibold text-gray-900 font-playfair">${price}</p>
                    <div className="flex gap-2 w-full">
                        <a 
                            href={`https://www.instagram.com/${import.meta.env.VITE_INSTAGRAM_USERNAME}`}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center text-white bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 hover:from-pink-600 hover:via-purple-600 hover:to-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300 transform hover:scale-[1.02] shadow-md"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                            Order on Instagram
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
