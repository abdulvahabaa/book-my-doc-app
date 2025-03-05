import React from "react";
import Navbar from "../components/Navbar/Navbar";
import SubNavbar from "../components/SubNavbar/SubNavbar";

const Home = () => {
  return (
    <div className="dark:bg-gray-900 h-screen">
      {/* Navbar */}
      <Navbar />
      <div className="pt-16">
        <SubNavbar />
      </div>
      <div className="">
        <h1 className="text-white">Main Page Content Goes Here</h1>
      </div>
    </div>
  );
};

export default Home;
