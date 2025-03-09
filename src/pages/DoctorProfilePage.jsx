import React from "react";
import Navbar from "../components/Navbar/Navbar";
import SubNavbar from "../components/SubNavbar/SubNavbar";
import Footer from "../components/Footer.jsx/Footer";
import Title from "../ui/Title";
import DoctorCard from "../ui/DoctorCard";
import {
  doctorProfileData,
  clinicsList,
  hospitalsList,
  doctorsList,
} from "../constants/data";
import HospitalCard from "../ui/HospitalCard";
import ClinicCard from "../ui/ClinicCard";
import { AiOutlineShareAlt, AiOutlineHeart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
const DoctorProfilePage = () => {
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
        {/* Hero Banner Section */}

        <article
          className="relative w-full min-h-[480px] md:min-h-[380px] overflow-hidden flex flex-col md:flex-row items-stretch"
          aria-labelledby="doctor-profile-title"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1550831107-1553da8c8464')",
              filter: "brightness(0.5)",
            }}
            role="img"
            aria-label="Background image of a medical setting"
          />

          {/* Main Content Container */}
          <div className="relative z-10 flex flex-col md:flex-row w-full">
            {/* Left - Doctor Info */}
            <section
              className="flex flex-col justify-center text-white px-5 md:px-10 py-5 md:py-10 w-full md:w-3/5"
              aria-labelledby="doctor-name"
            >
              {/* Doctor Name & Symbol */}
              <div className="flex flex-row items-center gap-4">
                <figure>
                  <img
                    src="/images/caduceus-symbol.jpg"
                    alt="Medical Caduceus Symbol"
                    className="w-15 h-15 rounded-full border-2 border-white"
                  />
                  <figcaption className="sr-only">
                    Symbol representing medical profession
                  </figcaption>
                </figure>

                <div>
                  <h1
                    id="doctor-name"
                    className="text-2xl md:text-4xl font-bold tracking-wide bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text"
                  >
                    {doctorProfileData.fullName}
                  </h1>
                  <p className="text-sm md:text-lg mt-1 bg-gradient-to-r from-yellow-300 to-orange-500 text-transparent bg-clip-text ">
                    {doctorProfileData.specialization} |{" "}
                    {doctorProfileData.qualifications.join(", ")}
                  </p>
                </div>
              </div>

              {/* Experience */}
              <p
                className="text-sm md:text-base mt-3 text-gray-200 hover:text-white transition duration-300 ease-in-out"
                aria-labelledby="doctor-experience"
              >
                Experience:{" "}
                <span
                  id="doctor-experience"
                  className="font-semibold text-lg bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text"
                >
                  {doctorProfileData.yearsOfExperience}
                </span>{" "}
                years
              </p>

              {/* Consulting Locations */}
              <p
                className="text-sm md:text-base mt-2 text-gray-300 hover:text-gray-100 transition"
                aria-labelledby="doctor-locations"
              >
                Consulting Locations:{" "}
                <span id="doctor-locations" className="font-semibold">
                  Karalam, Thrissur, Irinjalakuda, Dr's residence, Thalassery
                </span>
              </p>

              {/* Rating & Rate Now Section */}
              <div
                className="mt-5 bg-gray-800 p-4 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4 w-full"
                aria-labelledby="doctor-rating"
              >
                <div className="flex items-center space-x-3">
                  <span
                    id="doctor-rating"
                    className="bg-green-600 px-4 py-2 rounded-full font-medium text-sm md:text-base"
                  >
                    ⭐ {doctorProfileData.rating}/10
                  </span>
                  <span className="text-gray-300 text-sm md:text-base">
                    {doctorProfileData.likes} people liked this profile
                  </span>
                </div>
                <button
                  className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-lg text-sm md:text-base transition"
                  aria-label="Rate this doctor"
                >
                  Rate Now
                </button>
              </div>
            </section>

            {/* Right - Doctor Photo */}
            <aside
              className="flex flex-col items-center w-full md:w-2/5 py-5 md:py-0"
              aria-labelledby="doctor-image"
            >
              <figure className="relative group w-44 h-64 md:w-56 md:h-80 rounded-2xl overflow-hidden shadow-xl cursor-pointer">
                <img
                  src="/images/doctor.jpg"
                  alt={`Profile picture of ${doctorProfileData.fullName}`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-out"
                  id="doctor-image"
                />
              </figure>

              {/* Like & Review Buttons */}
              <div className="flex gap-4 mt-4">
                <button
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white font-medium px-4 py-2 rounded-lg text-sm md:text-base transition"
                  aria-label="Like this profile"
                >
                  <FaHeart className="text-red-500" /> Like
                </button>
                <button
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg text-sm md:text-base transition"
                  aria-label="Write a review for this doctor"
                >
                  ✍️ Write a Review
                </button>
              </div>
            </aside>
          </div>

          {/* Top-right Share & Like Buttons */}
          <div className="absolute top-4 right-4 flex flex-col gap-4 z-20">
            {/* Share Button */}
            <button
              className="bg-black bg-opacity-60 text-white p-3 rounded-full hover:bg-opacity-90 transition"
              onClick={() => alert("Share Functionality Here")}
              aria-label="Share this profile"
            >
              <AiOutlineShareAlt className="w-6 h-6" />
            </button>

            {/* Like Button */}
            <button
              className="bg-black bg-opacity-60 text-white p-3 rounded-full hover:bg-opacity-90 transition"
              onClick={() => alert("Liked!")}
              aria-label="Like this profile"
            >
              <FaHeart className="w-6 h-6 text-red-500" />
            </button>
          </div>
        </article>

        {/* Doctor Details Section */}
        <section className="mt-2 p-6">
          <h2 className="text-2xl font-bold mb-4">
            About Dr. {doctorProfileData.fullName}
          </h2>
          <p className="text-gray-300">{doctorProfileData.bio}</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Contact:</span>{" "}
                {doctorProfileData.contactNumbers.join(", ")}
              </p>
              <p>
                <span className="font-semibold">Online Consultation:</span>{" "}
                {doctorProfileData.onlineConsultation
                  ? "✅ Available"
                  : "❌ Not Available"}
              </p>
            </div>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">In-Person Consultation:</span>{" "}
                {doctorProfileData.inPersonConsultation
                  ? "✅ Available"
                  : "❌ Not Available"}
              </p>
              <p>
                <span className="font-semibold">Status:</span>{" "}
                <span className="capitalize">{doctorProfileData.status}</span>
              </p>
            </div>
          </div>
        </section>
        {/* Divider Line */}
        <div className="border-t border-gray-700 my-6 mx-6"></div>
        {/* Available At Section - Not Modified */}
        <section className="mt-2 p-6 ">
          <Title>Available At</Title>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
            {/* <DoctorCard doctor={doctorsList[0]} /> */}
            <ClinicCard clinic={clinicsList[0]} />
            <ClinicCard clinic={clinicsList[0]} />
            <HospitalCard hospital={hospitalsList[0]} />
          </div>
        </section>
        {/* Divider Line */}
        <div className="border-t border-gray-700 my-6"></div>
        {/* Top Reviews Section */}
        <section className="mt-2 p-6">
          <Title>Top Reviews</Title>
          <div className="bg-gray-800 p-6 rounded-xl">
            <p className="text-gray-400">
              🚧 No reviews available yet. Add your reviews data here later.
            </p>
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
