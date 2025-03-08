import React from "react";
import Navbar from "../components/Navbar/Navbar";
import SubNavbar from "../components/SubNavbar/SubNavbar";
import Footer from "../components/Footer.jsx/Footer";
import { doctorProfileData } from "../constants/data";

const BookingPage = () => {
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
        <section className="p-4">
          <div className="flex flex-row items-center gap-4">
            <figure >
              <img
                src="/public/images/caduceus-symbol.jpg"
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
                className="text-2xl md:text-4xl font-bold tracking-wide bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text pb-1 "
              >
                {doctorProfileData.fullName}
              </h1>
              <p className="text-sm md:text-lg mt-1 bg-gradient-to-r from-yellow-300 to-orange-500 text-transparent bg-clip-text ">
                {doctorProfileData.specialization} |{" "}
                {doctorProfileData.qualifications.join(", ")}
              </p>
            
            </div>
          </div>
          <div className="pt-2 px-18">
                <button className="border border-amber-500 text-amber-500 px-3 py-1 text-sm rounded-full transition cursor-pointer hover:bg-amber-500 hover:text-white ">
                  clinic 1
                </button>
              </div>
        </section>
        <div className="border-t border-gray-600 mx-4"></div>

        <section className="p-4" aria-labelledby="booking-section">
           

          </section>

      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default BookingPage;
