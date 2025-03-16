import React from "react";
import Navbar from "../components/users/Navbar/Navbar";
import SubNavbar from "../components/users/SubNavbar/SubNavbar";
import Footer from "../components/users/Footer/Footer";

const UserLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto p-4">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UserLayout;
