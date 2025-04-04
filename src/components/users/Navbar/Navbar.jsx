import React, { useState } from "react";
import AuthModal from "../../common/AuthModal/AuthModal";
import Sidebar from "./Sidebar";
import { GiStethoscope } from "react-icons/gi";
import { FcSearch } from "react-icons/fc";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [location, setLocation] = useState("Thrissur");
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const { user, isAuthenticated } = useSelector((state) => state.userState);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-white dark:bg-green-800 border-b border-gray-200 dark:border-gray-600">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          {/* Left Section - Logo & Search */}
          <div className="flex items-center space-x-4 flex-grow">
            {/* Logo */}
            <div className="flex items-center space-x-2 whitespace-nowrap">
              <GiStethoscope className="text-xl md:text-2xl text-amber-500" />
              <h1 className="text-base md:text-lg font-bold text-gray-800 dark:text-white">
                Book My Doc
              </h1>
            </div>

            {/* Search Bar */}
            <div className="relative w-36 md:w-56 lg:w-64">
              <FcSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base md:text-lg" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-3 py-1.5 border border-gray-300 rounded-md w-full outline-none text-xs md:text-sm"
              />
            </div>
          </div>

          {/* Right Section - Location & Profile/Login */}
          <div className="flex items-center space-x-4">
            {/* Location Dropdown */}
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="text-gray-800 dark:text-white font-medium bg-transparent border-none outline-none cursor-pointer text-xs md:text-sm"
            >
              <option value="Thrissur">Thrissur</option>
              <option value="Kochi">Kochi</option>
              <option value="Trivandrum">Trivandrum</option>
              <option value="Calicut">Calicut</option>
            </select>

            {/* Profile or Login Button */}
            {isAuthenticated ? (
              <button onClick={() => setShowSidebar(true)} className="flex flex-col items-center text-gray-800 dark:text-white cursor-pointer">
                <FaUserCircle className="text-lg md:text-xl" />
                <span className="text-xs md:text-sm font-medium">{user?.name}</span>
              </button>
            ) : (
              <button
                className="bg-amber-500 text-white px-3 py-1.5 rounded-md hover:bg-amber-600 transition text-xs md:text-sm"
                onClick={() => setShowModal(true)}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Sidebar Component */}
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      {/* Auth Modal */}
      <AuthModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Navbar;
