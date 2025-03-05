import React from 'react'
import { FaStar, FaHeart } from 'react-icons/fa'
import { doctorsList } from '../../constants/data'

const DoctorsCard = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-3">
      {doctorsList.map((doctor) => (
        <div className="relative w-60 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
        {/* Doctor Image */}
        <div className="relative">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-64 object-cover"
          />
          {/* Likes Count - Top Right Corner */}
          <div className="absolute top-2 right-2 bg-white bg-opacity-70 rounded-full px-3 py-1 flex items-center gap-1">
            <FaHeart className="text-red-500" />
            <span className="text-sm font-medium">{doctor.likes}</span>
          </div>
        </div>
  
        {/* Rating (Stars out of 10) */}
        <div className="flex justify-center items-center gap-1 bg-black py-2">
          <FaStar className="text-yellow-500" />
          <span className="font-semibold text-white">{doctor.rating}/10</span>
        </div>
  
        {/* Doctor Info */}
        <div className="p-3 bg-white">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{doctor.name}</h3>
          <p className="text-sm text-gray-500 font-bold">{doctor.department}</p>
          <p className="text-sm text-gray-500">{doctor.qualification}</p>
        </div>
      </div>
      ))}
    </div>
  )
}

export default DoctorsCard
