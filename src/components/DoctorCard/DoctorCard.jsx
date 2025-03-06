import React, { useState } from 'react'
import { FaStar, FaHeart } from 'react-icons/fa'
import { doctorsList } from '../../constants/data'



const DoctorCard = ({ doctor }) => {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div 
      className="relative bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
    >
      {/* Doctor Image */}
      <div className="relative w-full overflow-hidden">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-52 sm:h-56 object-cover transition-transform duration-300 hover:scale-110"
        />

        {/* Likes Count with Tooltip */}
        <div 
          className="absolute top-2 right-2 bg-white bg-opacity-90 rounded-full px-2 py-1 flex items-center gap-1 shadow-md cursor-pointer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <FaHeart className="text-red-500 text-sm" />
          <span className="text-xs font-medium">{doctor.likes}</span>
          {showTooltip && (
            <div className="absolute top-8 right-0 bg-black text-white text-xs py-1 px-2 rounded shadow-lg z-10">
              {doctor.likes} people liked this
            </div>
          )}
        </div>
      </div>

      {/* Rating Section */}
      <div className="flex justify-center items-center gap-1 bg-black py-1">
        <FaStar className="text-yellow-500 text-sm" />
        <span className="font-semibold text-white text-sm">{doctor.rating}/10</span>
      </div>

      {/* Doctor Information */}
      <div className="p-3 space-y-1">
        <h3 className="text-sm sm:text-base font-semibold text-gray-800 truncate">{doctor.name}</h3>
        <p className="text-xs sm:text-sm text-gray-500 font-bold">{doctor.department}</p>
        <p className="text-xs sm:text-sm text-gray-500">{doctor.qualification}</p>

        {/* Book Appointment Button */}
        <button className="mt-2 w-full bg-blue-500 text-white text-xs sm:text-sm py-1 rounded-full hover:bg-blue-600 transition">
          Book Appointment
        </button>
      </div>
    </div>
  )
}

export default DoctorCard
