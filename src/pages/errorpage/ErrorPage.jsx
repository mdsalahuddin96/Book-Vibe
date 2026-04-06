import React from "react";
import { Link } from "react-router";


const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 px-4">
      
      <div className="text-center text-white max-w-lg">
        
        {/* 404 Number */}
        <h1 className="text-8xl font-extrabold mb-4 tracking-widest">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-200 mb-8">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Go Back Home
        </Link>

      </div>

    </div>
  );
};

export default ErrorPage;