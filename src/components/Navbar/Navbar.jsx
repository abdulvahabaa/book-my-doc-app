import React, { useState } from 'react';
import { GiStethoscope } from "react-icons/gi";
import { FcSearch } from "react-icons/fc";

const Navbar = () => {
  const [location, setLocation] = useState('Thrissur');

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-green-800 dark:border-gray-700">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">

        {/* Left Section - Logo, Title & Search */}
        <div className="flex items-center space-x-4 flex-grow">
          {/* Logo and Title */}
          <div className="flex items-center space-x-2 whitespace-nowrap">
            <GiStethoscope className="text-3xl text-amber-500" />
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">Book My Doc</h1>
          </div>

          {/* Search Bar - Takes 2/3 width */}
          <div className="relative" style={{ flex: "0 0 66.666%" }}>
            <FcSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl" />
            <input 
              type="text" 
              placeholder="Search doctors, clinics, hospitals..." 
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full outline-none text-sm"
            />
          </div>
        </div>

        {/* Right Section - Location Dropdown and Login */}
        <div className="flex items-center space-x-6 ml-4">

          {/* Location Dropdown */}
          <select 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="text-gray-800 dark:text-white font-medium bg-transparent border-none outline-none cursor-pointer"
          >
            <option value="Thrissur">Thrissur</option>
            <option value="Kochi">Kochi</option>
            <option value="Trivandrum">Trivandrum</option>
            <option value="Calicut">Calicut</option>
          </select>

          {/* Login Button */}
          <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition">
            Login
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
