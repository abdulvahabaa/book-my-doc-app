import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import SubNavbar from "../components/SubNavbar/SubNavbar";
import Footer from "../components/Footer.jsx/Footer";
import { doctorProfileData } from "../constants/data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BookingPage = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header>
        <Navbar />
        <div className="pt-16">
          <SubNavbar />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto ">
        {/* Doctor Profile Section */}
        <section className="p-4 bg-gray-800">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Doctor Image */}
            <figure>
              <img
                src="/public/images/caduceus-symbol.jpg"
                alt="Medical Caduceus Symbol"
                className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-white"
              />
              <figcaption className="sr-only">Medical Symbol</figcaption>
            </figure>

            {/* Doctor Info */}
            <div className="text-center md:text-left">
              <h1 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
                {doctorProfileData.fullName}
              </h1>
              <p className="text-sm md:text-lg mt-1 bg-gradient-to-r from-yellow-300 to-orange-500 text-transparent bg-clip-text">
                {doctorProfileData.specialization} |{" "}
                {doctorProfileData.qualifications.join(", ")}
              </p>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="border-t border-gray-600 py-2"></div>

        {/* Booking Section */}
        <section className="bg-gray-800 p-2">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Left side navigation */}
            <div className="flex flex-row items-center gap-2 md:gap-4 overflow-x-auto">
              <FaChevronLeft className="text-lg" />
              {[...Array(7)].map((_, index) => (
                <button
                  key={index}
                  className="flex flex-col items-center px-3 py-1 rounded bg-pink-600 hover:bg-pink-800 text-sm"
                >
                  <p className="text-xs">SUN</p>
                  <p className="text-lg font-semibold">09</p>
                  <p className="text-xs">MAR</p>
                </button>
              ))}
              <FaChevronRight className="text-lg" />
            </div>

            {/* Right Side: Clinic Name & Time Filter */}
            <div className=" ml-30 flex flex-col md:flex-row items-center gap-4">
              {/* Clinic Selection */}
              <div className="pt-2 text-center md:text-left md:px-28 ">
                <button className="border border-amber-500 text-amber-500 px-3 py-1 text-sm rounded-full hover:bg-amber-500 hover:text-white transition">
                  Clinic 1
                </button>
              </div>

              {/* Time Filter Button */}
              <div className="ml-10">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="border border-white px-3 py-1 rounded hover:bg-white hover:text-gray-900"
                >
                  Time Filter
                </button>

                {/* Checkboxes (Visible on Click) */}
                {showFilters && (
                  <div className="absolute right-0 mt-2 bg-gray-800 p-4 rounded-lg shadow-lg w-36">
                    <div className="flex flex-col gap-2">
                      {["Morning", "Afternoon", "Evening", "Night"].map(
                        (time, index) => (
                          <label
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <input
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-200 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="text-white text-sm">{time}</span>
                          </label>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-gray-600 "></div>
        {/* Availability Section */}
        <section className="m-2 bg-gray-800 rounded-md p-4">
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 px-4">
            {/* Availability Legend */}
            {[
              { label: "Available", color: "bg-green-500" },
              { label: "Filling Fast", color: "bg-yellow-500" },
              { label: "Not Available", color: "bg-red-500" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
                <p className="text-xs">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-600 "></div>
        </section>

        {/* Time Slots */}
        
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default BookingPage;
