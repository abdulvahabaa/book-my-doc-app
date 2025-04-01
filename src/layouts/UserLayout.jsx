import React from "react";
import Navbar from "../components/users/Navbar/Navbar";
import SubNavbar from "../components/users/SubNavbar/SubNavbar";
import Footer from "../components/users/Footer/Footer";

const UserLayout = ({ children }) => {
  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Top Navigation Bar */}
      <header>
        <Navbar />
        <div className="pt-14">
          <SubNavbar />
        </div>
      </header>

      {/* Main Content Area */}
      <main>{children}</main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default UserLayout;
