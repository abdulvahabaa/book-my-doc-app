import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaMapSigns,
  FaStar,
  FaHeart,
} from "react-icons/fa";

const HospitalCard = ({ hospital }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl relative">
      {/* Hospital Image with Zoom */}
      <div className="relative w-full h-32 overflow-hidden">
        <img
          src={hospital.image}
          alt={hospital.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Rating & Likes Section (Combined) */}
      <div className="flex justify-between items-center bg-black py-1 px-2">
        <div className="flex items-center gap-1">
          <FaStar className="text-yellow-500 text-sm" />
          <span className="font-semibold text-white text-sm">
            {hospital.rating}/10
          </span>
        </div>
        <div className="flex items-center gap-1">
          <FaHeart className="text-red-500 text-sm" />
          <span className="text-white text-xs">{hospital.likes}</span>
        </div>
      </div>

      {/* Hospital Info */}
      <div className="p-2 space-y-1">
        <h3 className="text-sm font-semibold text-gray-800 truncate">
          {hospital.name}
        </h3>

        <div className="flex items-center text-xs text-gray-600">
          <FaMapMarkerAlt className="text-red-500 mr-1" />
          <p className="truncate">{hospital.address}</p>
        </div>

        <div className="flex items-center text-xs text-gray-600">
          <FaMapSigns className="text-orange-500 mr-1" />
          <p className="truncate">{hospital.LandMark}</p>
        </div>

        <div className="flex items-center text-xs text-gray-600">
          <FaPhoneAlt className="text-green-500 mr-1" />
          <p>{hospital.contactNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default HospitalCard;
