import React from "react";
import Navbar from "../components/Navbar/Navbar";
import SubNavbar from "../components/SubNavbar/SubNavbar";
import Footer from "../components/Footer.jsx/Footer";
import Title from "../ui/Title";
import DoctorCard from "../components/DoctorCard/DoctorCard";
import {
  doctorProfileData,
  clinicsList,
  hospitalsList,
  doctorsList,
} from "../constants/data";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import ClinicCard from "../components/ClinicCard/ClinicCard";
import { AiOutlineShareAlt, AiOutlineHeart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
const DoctorProfilePage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Header */}
      <header>
        <Navbar />
        <div className="pt-16">
          <SubNavbar />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto">
        {/* Hero Banner Section */}

        <section className="relative w-full min-h-[480px] md:min-h-[380px] overflow-hidden flex flex-col md:flex-row items-stretch">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1550831107-1553da8c8464')",
      filter: "brightness(0.5)",
    }}
  />

  {/* Main Content Container */}
  <div className="relative z-10 flex flex-col md:flex-row w-full">
    {/* Left - Doctor Info */}
    <div className="flex flex-col justify-center text-white px-5 md:px-10 py-5 md:py-10 w-full md:w-3/5">
      {/* Doctor Name & Caduceus Symbol */}
      <div className="flex flex-row items-center gap-4">
       <div>

        <img
          src="/public/images/caduceus-symbol.jpg"
          alt={doctorProfileData.fullName}
          className="w-15 h-15 rounded-full border-2 border-white"
        />
       </div>
       <div>

        <h1 className="text-2xl md:text-4xl font-bold tracking-wide bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
          {doctorProfileData.fullName}
        </h1>
      <p className="text-sm md:text-lg mt-1 bg-gradient-to-r from-yellow-300 to-orange-500 text-transparent bg-clip-text">
        {doctorProfileData.specialization} | {doctorProfileData.qualifications.join(", ")}
      </p>
       </div>

      </div>

      {/* Specialization */}




      {/* Experience */}
      <p className="text-sm md:text-base mt-3 text-gray-200 hover:text-white transition duration-300 ease-in-out">
        Experience:{" "}
        <span className="font-semibold text-lg bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          {doctorProfileData.yearsOfExperience}
        </span>{" "}
        years
      </p>

      {/* Consulting Locations */}
      <p className="text-sm md:text-base mt-2 text-gray-300 hover:text-gray-100 transition">
        Consulting Locations:{" "}
        <span className="font-semibold">
          Karalam, Thrissur, Irinjalakuda, Dr's residence, Thalassery
        </span>
      </p>

      {/* Rating & Rate Now Section */}
      <div className="mt-5 bg-gray-800 p-4 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4 w-full">
        <div className="flex items-center space-x-3">
          <span className="bg-green-600 px-4 py-2 rounded-full font-medium text-sm md:text-base">
            ⭐ {doctorProfileData.rating}/10
          </span>
          <span className="text-gray-300 text-sm md:text-base">
            {doctorProfileData.likes} people liked this profile
          </span>
        </div>
        <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-lg text-sm md:text-base transition">
          Rate Now
        </button>
      </div>
    </div>

    {/* Right - Doctor Photo Card + Buttons */}
    <div className="flex flex-col items-center w-full md:w-2/5 py-5 md:py-0">
      <div className="relative group w-44 h-64 md:w-56 md:h-80 rounded-2xl overflow-hidden shadow-xl cursor-pointer">
        <img
          src="/images/doctor.jpg"
          alt="Doctor Profile"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-out"
        />
      </div>

      {/* Like & Review Buttons */}
      <div className="flex gap-4 mt-4">
        <button className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white font-medium px-4 py-2 rounded-lg text-sm md:text-base transition">
          <FaHeart className="text-red-500" /> Like
        </button>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg text-sm md:text-base transition">
          ✍️ Write a Review
        </button>
      </div>
    </div>
  </div>

  {/* Top-right Share Icon */}
  <div className="absolute top-4 right-4 flex flex-col gap-4 z-20">
    {/* Share Button */}
    <button
      className="bg-black bg-opacity-60 text-white p-3 rounded-full hover:bg-opacity-90 transition"
      onClick={() => alert("Share Functionality Here")}
    >
      <AiOutlineShareAlt className="w-6 h-6" />
    </button>

    {/* Like Button */}
    <button
      className="bg-black bg-opacity-60 text-white p-3 rounded-full hover:bg-oionali-90 transition"
      onClick={() => alert("Liked!")}
    >
      <AiOutlineHeart className="w-6 h-6" />
    </button>
  </div>
</section>



      </main>

      {/* Footer */}
      <footer className="mt-12">
        <Footer />
      </footer>
    </div>
  );
};

export default DoctorProfilePage;
