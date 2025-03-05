import React from "react";
import Navbar from "../components/Navbar/Navbar";
import SubNavbar from "../components/SubNavbar/SubNavbar";
import Title from "../ui/Title";
import DepartmentsCarosel from "../components/DepartmentsCarosel/DepartmentsCarosel";
import DoctorsCard from "../components/DoctorsCard/DoctorsCard";
import Footer from "../components/Footer.jsx/Footer";
import ClinicsCard from "../components/ClinicsCard/ClinicsCard";
import HospitalsCard from "../components/HospitalsCard/HospitalsCard";

const Home = () => {
  return (
    <div className="dark:bg-gray-900">
      <Navbar />
      <div className="pt-16">
        <SubNavbar />
      </div>
      <main className="p-3">
        <Title>Choose Your Department</Title>
        <DepartmentsCarosel />
        <Title>Near by Doctors...</Title>
        <DoctorsCard />
        <Title>Near by Clinics...</Title>
        <ClinicsCard />
        <Title>Near by Hospitals...</Title>
        <HospitalsCard />
      </main>
      <div >
        <Footer />
      </div>
    </div>
  );
};

export default Home;
