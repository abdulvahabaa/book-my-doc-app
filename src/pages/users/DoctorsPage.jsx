import React, { useState } from "react";
import Title from "../../components/ui/Title";
import DoctorCard from "../../components/ui/DoctorCard";
import { clinicsList, doctorsList } from "../../constants/data";
import AccordionFilter from "../../components/common/AccordionFilter/AccordionFilter";
import ClinicCard from "../../components/ui/ClinicCard";
import SwiperCarousel from "../../components/common/SwiperCarousel/SwiperCarousel";
import UserLayout from "../../layouts/UserLayout";
import { experienceOptions } from "../../constants/data";

const location = "Thrissur";

const DoctorsPage = () => {
  const [openFilters, setOpenFilters] = useState({
    department: false,
    experience: false,
  });

  const [selectedExperience, setSelectedExperience] = useState("");

  const toggleFilter = (filterName) => {
    setOpenFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName], // Only toggle the clicked filter
    }));
  };

  return (
    <UserLayout>
      <div className="mt-4 container mx-auto px-2">
        {/* 2 Column Grid with reduced sidebar width */}
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">
          <aside aria-labelledby="filter-doctor">
            <h3 className="text-xl text-amber-100 font-semibold mb-5 mt-2 ">
              Filters
            </h3>
            <div className="space-y-4">
              {/* Department Filter */}
              <AccordionFilter
                title="Department"
                isOpen={openFilters.department}
                toggle={() => toggleFilter("department")}
              >
                <select className="w-full bg-gray-700 text-white p-2 rounded focus:outline-none">
                  <option>Cardiology</option>
                  <option>Orthopedics</option>
                  <option>Dermatology</option>
                  <option>Pediatrics</option>
                </select>
              </AccordionFilter>

              {/* Experience Filter */}
              <AccordionFilter
                title="Years of Experience"
                isOpen={openFilters.experience}
                toggle={() => toggleFilter("experience")}
              >
                <div className="flex flex-wrap gap-2">
                  {experienceOptions.map((experience) => (
                    <button
                      key={experience}
                      className={`border border-amber-500 text-amber-500 px-3 py-1 text-xs rounded-full transition cursor-pointer ${
                        selectedExperience === experience
                          ? "bg-amber-500 text-white"
                          : "hover:bg-amber-500 hover:text-white"
                      }`}
                      onClick={() =>
                        setSelectedExperience(
                          selectedExperience === experience ? "" : experience
                        )
                      }
                    >
                      {experience}
                    </button>
                  ))}
                </div>
              </AccordionFilter>

              {/* Browse by Clinics Button */}
              <div className="mt-4">
                <button
                  className="w-full border border-amber-500 text-amber-500 py-2 rounded font-medium text-sm transition cursor-pointer hover:bg-amber-500 hover:text-white"
                  onClick={() => console.log("Browse by Clinics clicked")}
                >
                  Browse by Clinics
                </button>
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
        {/* <section aria-labelledby="might-like" className="mt-10">
          <h2 id="might-like">
            <Title>Nearby Clinics</Title>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-3">
            {clinicsList.map((clinic) => (
              <ClinicCard key={clinic.id} clinic={clinic} />
            ))}
          </div>

        </section> */}

        <section aria-labelledby="might-like" className="mt-10">
          <h2 id="might-like">
            <Title>Nearby Clinics</Title>
          </h2>

          <SwiperCarousel
            items={clinicsList}
            renderItem={(clinic) => (
              <ClinicCard key={clinic.id} clinic={clinic} />
            )}
          />
        </section>
      </div>
    </UserLayout>
  );
};

export default DoctorsPage;
