import React from "react";
import { Link } from "react-router-dom";

const HeroSection = ({ onOpenModal }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">ZETAONE</h1>
        <p className="text-lg mb-8">
          Your One-Stop Solution for All Service Needs Anytime, Anywhere!
        </p>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search for a service..."
            className="p-3 text-gray-950 peer-placeholder-shown:text-neutral-700 rounded-l-lg w-2/3 border-none"
          />
          <Link to="/services">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-3 rounded-r-lg">
              Explore Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
