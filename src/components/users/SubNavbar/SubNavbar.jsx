import React from 'react';

const SubNavbar = () => {
  const categories = [
    { name: 'Doctors', link: '#' },
    { name: 'Hospitals', link: '#' },
    { name: 'Clinics', link: '#' },
    { name: 'Departments', link: '#' },
    { name: 'Services', link: '#' },
    { name: 'Offers', link: '#' },
  ];

  return (
    <div className="w-full bg-gray-100 border-b border-gray-300 dark:bg-green-900 dark:border-gray-700">
      <div className="container mx-auto px-4 py-2 flex flex-wrap items-center justify-between">
        {/* Categories - always visible */}
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide w-full md:w-auto">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.link}
              className="text-gray-700 dark:text-white text-sm font-medium hover:text-amber-500 transition whitespace-nowrap"
            >
              {category.name}
            </a>
          ))}
        </div>

        {/* Right Side - only visible on md and larger screens */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-700 dark:text-white text-xs hover:text-amber-500 transition">
            List my Account
          </a>
          <a href="#" className="text-gray-700 dark:text-white text-xs hover:text-amber-500 transition">
            List Hospital
          </a>
          <a href="#" className="text-gray-700 dark:text-white text-xs hover:text-amber-500 transition">
            List Clinic
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
