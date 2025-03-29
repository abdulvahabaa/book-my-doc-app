import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Banner = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedDepartment, setSelectedDepartment] =
    useState("Choose Department");

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const selectDepartment = (department) => {
    setSelectedDepartment(department);
    setShowDropdown(false);
  };

  return (
    <div className="relative w-full h-[300px] md:h-[350px] bg-gradient-to-r from-blue-600 to-blue-400 flex items-center overflow-hidden">
      {/* Left Side Content */}
      <div className="relative z-10 w-full md:w-1/2 text-white px-6 md:px-12 space-y-4">
        {/* Heading with Gradient in Best Doctors */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Find the{" "}
          <span className="bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent">
            Best Doctors
          </span>{" "}
          Near You
        </h1>

        <p className="text-base md:text-lg">
          Book appointments with trusted doctors, hospitals, and specialists in
          just a few clicks.
        </p>

        {/* Search Box with Dropdown Filter */}
        <div className="flex items-center w-full max-w-lg bg-white rounded-lg border border-gray-300 shadow-lg overflow-hidden relative">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search for doctors, hospitals..."
            className="flex-grow py-3 px-4 text-gray-700 outline-none"
          />

          {/* Dropdown Button */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="bg-yellow-400 text-gray-800 flex items-center justify-between px-4 py-3 cursor-pointer"
            >
              {selectedDepartment}
              <FaChevronDown className="ml-2" />
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute top-full left-0 w-full bg-white border border-gray-300 shadow-lg rounded-md z-50">
                <ul className="text-gray-700">
                  {[
                    "Cardiology",
                    "Dermatology",
                    "Pediatrics",
                    "Orthopedics",
                    "Gynecology",
                  ].map((dept) => (
                    <li
                      key={dept}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => selectDepartment(dept)}
                    >
                      {dept}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="absolute right-0 bottom-0 hidden md:block w-1/3 h-full">
        <img
          src="/images/caduceus-symbol.jpg"
          alt="Doctor"
          className="h-full object-contain object-right opacity-10"
        />
      </div>
    </div>
  );
};

export default Banner;
