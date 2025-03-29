import React, { useState } from "react";
import AuthModal from "../../common/AuthModal/AuthModal";
import { GiStethoscope } from "react-icons/gi";
import { FcSearch } from "react-icons/fc";
import { FaRegHeart, FaUserCircle } from "react-icons/fa";
// import ThemeToggle from "@/components/ui/ThemeToggle";

const Navbar = () => {
  const [location, setLocation] = useState("Thrissur");
  const [showModal, setShowModal] = useState(false); // State to toggle modal

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-green-800 dark:border-gray-700">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Left Section - Logo, Title & Search */}
          <div className="flex items-center space-x-4 flex-grow">
            <div className="flex items-center space-x-2 whitespace-nowrap">
              <GiStethoscope className="text-3xl text-amber-500" />
              <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                Book My Doc
              </h1>
            </div>
            {/* Search Bar */}
            <div className="relative w-1/2 md:w-2/3">
              <FcSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl" />
              <input
                type="text"
                placeholder="Search doctors, clinics, hospitals..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Right Section - Location Dropdown, Wishlist, Profile & Login */}
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

            {/* Wishlist Icon with Notification Badge */}
            <div className="relative cursor-pointer text-gray-800 dark:text-white">
              <FaRegHeart className="text-2xl" />
              <span className="absolute -top-1 -right-2 flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-red-500"></span>
              </span>
            </div>

            {/* <ThemeToggle /> */}

            {/* User Profile Icon */}
            <FaUserCircle className="text-3xl cursor-pointer text-gray-800 dark:text-white" />

            {/* Login Button */}
            <button
              className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition"
              onClick={() => setShowModal(true)} // Open modal on click
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Render Auth Modal */}
      <AuthModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Navbar;
