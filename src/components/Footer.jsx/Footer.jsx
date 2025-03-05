import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaBullhorn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineLiveHelp, MdOutlineConfirmationNumber } from "react-icons/md"; // Icons for FAQ and Resend Confirmation

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-4">
      {/* Listing Section */}
      <div className="bg-amber-300 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-3 md:space-y-0">
          {/* Left side with icon + text */}
          <div className="flex items-center space-x-3">
            <FaBullhorn className="text-3xl text-red-500" />
            <h3 className="text-lg font-semibold text-gray-900">
              For listing your clinic, hospital, or profile as a doctor
            </h3>
          </div>

          {/* List Now button */}
          <button className="bg-pink-500 text-white px-5 py-2 rounded-full hover:bg-pink-600 transition">
            List Now
          </button>
        </div>
      </div>

      {/* New Gray Section with Big Icons */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* Customer Care */}
          <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-700 text-white text-3xl">
              <FaPhoneAlt />
            </div>
            <p className="text-white text-lg font-medium">Customer Care</p>
          </div>

          {/* FAQ */}
          <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-700 text-white text-3xl">
              <MdOutlineLiveHelp />
            </div>
            <p className="text-white text-lg font-medium">FAQs</p>
          </div>

          {/* Resend Confirmation */}
          <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-700 text-white text-3xl">
              <MdOutlineConfirmationNumber />
            </div>
            <p className="text-white text-lg font-medium">
              Resend Confirmation
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 border-b border-gray-700 pb-6">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">About Us</h3>
            <p className="text-sm text-gray-400">
              We connect you with the best doctors in the city. Trusted
              healthcare at your fingertips.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Departments
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Doctors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Hospitals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Offers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Customer Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Resend Booking Confirmations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us with Rounded Icons */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 text-white text-xl transition-transform transform hover:scale-110"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-black text-white text-xl transition-transform transform hover:scale-110"
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-600 text-white text-xl transition-transform transform hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-700 text-white text-xl transition-transform transform hover:scale-110"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-500 mt-6">
          © {new Date().getFullYear()} HealthCare Co. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
