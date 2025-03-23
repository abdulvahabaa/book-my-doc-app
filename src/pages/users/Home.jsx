import React from "react";
import Title from "../../components/ui/Title";
import DepartmentsCarosel from "../../components/users/DepartmentsCarosel/DepartmentsCarosel";
import Banner from "../../components/users/Banners/Banner";
import { clinicsList, doctorsList, hospitalsList } from "../../constants/data";
import DoctorCard from "../../components/ui/DoctorCard";
import ClinicCard from "../../components/ui/ClinicCard";
import HospitalCard from "../../components/ui/HospitalCard";
import UserLayout from "../../layouts/UserLayout";

const Home = () => {
  return (
    <UserLayout>
      <div>
        <section aria-labelledby="home-banner">
          <Banner />
        </section>

        <section className="p-3" aria-labelledby="departments-section">
          <h2 id="departments-section">
            <Title>Nearby Departments</Title>
          </h2>
          <DepartmentsCarosel />
        </section>

        <section className="p-3" aria-labelledby="doctors-section">
          <h2 id="doctors-section">
            <Title>Nearby Doctors</Title>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-3">
            {doctorsList.map((doctor) => (
              <DoctorCard key={doctor.name} doctor={doctor} />
            ))}
          </div>
        </section>

        <section className="p-3" aria-labelledby="clinics-section">
          <h2 id="clinics-section">
            <Title>Nearby Clinics</Title>
          </h2>
          <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-3">
            {clinicsList.map((clinic) => (
              <ClinicCard key={clinic.id} clinic={clinic} />
            ))}
          </div>
        </section>

        <section className="p-3" aria-labelledby="hospitals-section">
          <h2 id="hospitals-section">
            <Title>Nearby Hospitals</Title>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-3">
            {hospitalsList.map((hospital) => (
              <HospitalCard key={hospital.id} hospital={hospital} />
            ))}
          </div>
        </section>
      </div>
    </UserLayout>
  );
};

export default Home;
