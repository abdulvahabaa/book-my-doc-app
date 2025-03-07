import React from "react";
import Navbar from "../components/Navbar/Navbar";
import SubNavbar from "../components/SubNavbar/SubNavbar";
import Footer from "../components/Footer.jsx/Footer";
import Title from "../ui/Title";
import DoctorCard from "../components/DoctorCard/DoctorCard";
import { doctorProfileData } from "../constants/data";

const DoctorProfilePage = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <header>
        <Navbar />
        <div className="pt-16">
          <SubNavbar />
        </div>
      </header>

      <main className="container mx-auto">
        
      <section aria-labelledby="banner-title" className="relative w-full h-[300px] md:h-[350px] bg-gradient-to-r from-blue-600 to-blue-400 flex items-center overflow-hidden">
        <div className="relative z-10 w-full md:w-1/2 text-white px-6 md:px-12 space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent">
              Dr. John Doe
            </span>
          </h1>
          <p className="text-base md:text-lg">
            Book appointments with trusted doctors, hospitals, and specialists in just a few clicks.
          </p>
        </div>
      </section>

      <section className="p-3" aria-labelledby="doctor-profile-section">
        <h2 id="doctor-profile-section">
          <Title>Doctor Profile</Title>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-3">
         
            <DoctorCard key={doctorProfileData.name} doctor={doctorProfileData} />
        </div>
      </section>
      <section className="p-3" aria-labelledby="availability-section">
        <h2 id="availability-section">
          <Title>Availabie At</Title>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-3">
          {/* Availability */}
        </div>

      </section>

      <section className="p-3" aria-labelledby="reviews-section">
        <h2 id="reviews-section">
          <Title>Top Reviews</Title>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-3">
          {/* Reviews */}
        </div>

      </section>

       

      </main>

      <footer className="mt-12">
        <Footer />
      </footer>
    </div>
  );
};

export default DoctorProfilePage;