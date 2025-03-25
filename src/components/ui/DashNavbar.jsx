import { FaBell, FaSearch, FaSun } from "react-icons/fa";
import { FiSidebar } from "react-icons/fi";

export const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow-md h-16 flex items-center px-6 justify-between">
      <div className="flex items-center gap-2">
        <button
          className="text-violet-700 hover:text-violet-900 hover:cursor-pointer hover:scale-110"
          onClick={toggleSidebar}
        >
          <FiSidebar size={24} />
        </button>
        <span className="text-gray-400">/</span>
        <h1 className="text-violet-700 font-semibold text-lg">Dashboard</h1>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative text-violet-700 hover:text-violet-900">
          <FaBell size={20} />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        <div className="relative">
          <input
            type="text"
            className="p-2 pl-8 border rounded-md"
            placeholder="Search..."
          />
          <FaSearch className="absolute left-2 top-3 text-gray-500" />
        </div>
      </div>
    </header>
  );
};
