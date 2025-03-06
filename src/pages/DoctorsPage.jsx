import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import SubNavbar from "../components/SubNavbar/SubNavbar";
import Footer from "../components/Footer.jsx/Footer";
import Title from "../ui/Title";
import DoctorsCard from "../components/DoctorCard/DoctorCard";
import DoctorCard from "../components/DoctorCard/DoctorCard";
import { doctorsList } from "../constants/data";

const location = "Thrissur";

// Reusable Accordion Filter Component
const AccordionFilter = ({ title, isOpen, toggle, children }) => (
  <div className="border-b border-gray-600">
    <button
      onClick={toggle}
      className="w-full text-left py-4 text-white font-medium flex justify-between items-center"
    >
      {title}
      <span className="text-gray-300">{isOpen ? "-" : "+"}</span>
    </button>
    {isOpen && (
      <div className="pl-3 pb-4 space-y-2 text-sm text-gray-300">
        {children}
      </div>
    )}
  </div>
);

const DoctorsPage = () => {
  const [openFilter, setOpenFilter] = useState("");

  const toggleFilter = (filterName) => {
    setOpenFilter(openFilter === filterName ? "" : filterName);
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <header>
        <Navbar />
        <div className="pt-16">
          <SubNavbar />
        </div>
      </header>

      <main className="mt-4 container mx-auto px-2 ">
        {/* 2 Column Grid with reduced sidebar width */}
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 ">
          <aside aria-labelledby="filter-doctor">
            <h3 className="text-xl text-amber-100 font-semibold mb-6 mt-2">
              Filters
            </h3>
            <div className="bg-gray-800  rounded-lg shadow-lg p-2">
              <div className="space-y-4">
                {/* Department Filter */}
                <AccordionFilter
                  title="Department"
                  isOpen={openFilter === "department"}
                  toggle={() => toggleFilter("department")}
                >
                  <select className="w-full bg-gray-700 text-white p-2 rounded focus:outline-none">
                    <option>Cardiology</option>
                    <option>Orthopedics</option>
                    <option>Dermatology</option>
                    <option>Pediatrics</option>
                  </select>
                </AccordionFilter>
              </div>
            </div>
          </aside>

          {/* Right Side - Doctors List */}
          <section aria-labelledby="doctors-cards">
            <h2
              id="clinics-section"
              className="text-white text-3xl font-semibold mb-6"
            >
              <Title>Doctors in {location}...</Title>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctorsList.map((doctor) => (
              <DoctorCard key={doctor.name} doctor={doctor} />
            ))}
            </div>
          </section>
        </div>

        <footer className="mt-12">
          <Footer />
        </footer>
      </main>
    </div>
  );
};

export default DoctorsPage;
