import React, { useState } from "react";
import { departmentsArray } from "../../constants/data";

// Duplicate list for seamless scrolling
const infiniteDepartments = [...departmentsArray, ...departmentsArray];

const DepartmentsCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="w-full overflow-hidden mt-3 relative p-3">
      <div
        className={`whitespace-nowrap flex items-center ${
          isPaused ? "" : "animate-scroll"
        }`}
      >
        {infiniteDepartments.map((department, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-4 transition-transform duration-300 hover:scale-110"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative overflow-hidden rounded-md">
              <img
                src={department.image}
                alt={department.name}
                className="w-32 h-32 object-cover rounded-md transition-transform duration-300 hover:brightness-110 hover:shadow-xl"
              />
            </div>
            <p className="mt-2 text-center text-amber-50 font-medium">
              {department.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentsCarousel;
