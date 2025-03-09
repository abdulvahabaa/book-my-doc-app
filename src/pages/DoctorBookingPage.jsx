import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import SubNavbar from "../components/SubNavbar/SubNavbar";
import Footer from "../components/Footer.jsx/Footer";
import { doctorProfileData } from "../constants/data";
import { FaChevronLeft, FaChevronRight, FaHeart } from "react-icons/fa";
import { MdCancel, MdInfo } from "react-icons/md";

const DoctorBookingPage = () => {
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
      <main className="container mx-auto">
        {/* Doctor Profile Section */}
        <section className="p-4 bg-gray-800" aria-labelledby="doctor-profile">
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
              <h1
                id="doctor-profile"
                className="text-xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text"
              >
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
        <hr className="border-t border-gray-600 py-2" />

        {/* Booking Section */}
        <section className="bg-gray-800 p-2" aria-labelledby="booking-section">
          <h2 id="booking-section" className="sr-only">
            Booking Section
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Left side navigation */}
            <nav
              className="flex flex-row items-center gap-2 md:gap-4 overflow-x-auto"
              aria-labelledby="date-selection"
            >
              <h3 id="date-selection" className="sr-only">
                Select a date
              </h3>
              <FaChevronLeft className="text-lg" />
              {[...Array(7)].map((_, index) => (
                <button
                  key={index}
                  aria-label={`Select date: Sunday, March 9`}
                  className="flex flex-col items-center px-4 py-2 rounded bg-pink-600 hover:bg-pink-800 text-sm"
                >
                  <time className="text-xs">SUN</time>
                  <span className="text-lg font-semibold">09</span>
                  <time className="text-xs">MAR</time>
                </button>
              ))}
              <FaChevronRight className="text-lg" />
            </nav>

            {/* Right Side: Clinic Name & Time Filter */}
            <div className="ml-30 flex flex-col md:flex-row items-center gap-4">
              {/* Clinic Selection */}
              <div className="pt-2 text-center md:text-left md:px-28">
                <button className="border border-amber-500 text-amber-500 px-4 py-2 text-sm rounded-full hover:bg-amber-500 hover:text-white transition">
                  Clinic 1
                </button>
              </div>

              {/* Time Filter Button */}
              <div className="relative ml-10">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="border border-white px-4 py-2 rounded hover:bg-white hover:text-gray-900"
                  aria-expanded={showFilters}
                  aria-controls="time-filter-options"
                >
                  Time Filter
                </button>

                {/* Checkboxes (Visible on Click) */}
                {showFilters && (
                  <div
                    id="time-filter-options"
                    className="absolute right-0 mt-2 bg-gray-800 p-4 rounded-lg shadow-lg w-36"
                  >
                    <fieldset
                      className="flex flex-col gap-2"
                      aria-labelledby="filter-time"
                    >
                      <legend id="filter-time" className="sr-only">
                        Select Time Slots
                      </legend>
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
                    </fieldset>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Availability Section */}
        <section
          className="m-2 bg-gray-800 rounded-md p-4"
          aria-labelledby="availability-section"
        >
          <h2 id="availability-section" className="sr-only">
            Availability Status
          </h2>
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 px-4">
            {[
              { label: "Available", color: "bg-green-500" },
              { label: "Filling Fast", color: "bg-yellow-500" },
              { label: "Not Available", color: "bg-red-500" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full ${item.color}`}
                  aria-hidden="true"
                ></div>
                <p className="text-xs">{item.label}</p>
              </div>
            ))}
          </div>
          <hr className="border-t border-gray-600 my-2" />

          <div className="container mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-4">
            <address className="flex flex-row gap-2 items-center ">
              <FaHeart className="text-red-500 cursor-pointer" />
              <h3>Doctor's clinic, address, pin</h3>
              <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition">
                <MdInfo /> More Info
              </button>
            </address>
            <div>
              <div
                className="flex gap-2 flex-wrap"
                aria-labelledby="available-time-slots"
              >
                <h3 id="available-time-slots" className="sr-only">
                  Select an available time slot
                </h3>
                {[
                  "10:00 AM",
                  "11:30 AM",
                  "2:00 PM",
                  "3:30 PM",
                  "5:00 PM",
                  "6:30 PM",
                  "8:00 PM",
                  "9:30 PM",
                  "11:00 PM",
                  "12:30 AM",
                ].map((slot, index) => (
                  <button
                    key={index}
                    className="border border-green-500 text-green-500 px-6 py-1 text-sm rounded-md hover:bg-green-500 hover:text-white transition"
                    aria-label={`Book appointment at ${slot}`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
              <p className="text-white text-xs flex items-center gap-2 mt-3">
                <MdCancel /> Cancellation Available
              </p>
            </div>
          </div>
          <hr className="border-t border-gray-600 my-3" />
        </section>
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default DoctorBookingPage;
