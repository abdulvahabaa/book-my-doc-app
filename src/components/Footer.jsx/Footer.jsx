import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        {/* Top Section - Footer Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-700 pb-6">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">About Us</h3>
            <p className="text-sm text-gray-400">
              We connect you with the best doctors in the city. Trusted healthcare at your fingertips.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Departments</a></li>
              <li><a href="#" className="hover:text-white">Doctors</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="text-center text-sm text-gray-500 mt-6">
          © {new Date().getFullYear()} HealthCare Co. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
