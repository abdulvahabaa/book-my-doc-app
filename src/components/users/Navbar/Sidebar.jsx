import React from "react";
import { FaUserCircle, FaRegHeart, FaCog, FaMoon, FaSun, FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
// import { toggleTheme } from "../../redux/themeSlice"; // Update with your actual theme action

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userState);
  const isDarkMode = useSelector((state) => state.themeState.darkMode);

  return (
    <>
      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg transform ${showSidebar ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-50`}>
        <div className="p-5 relative">
          {/* Close Button */}
          <button className="absolute top-3 right-3 text-gray-600 dark:text-gray-300" onClick={() => setShowSidebar(false)}>
            ✖
          </button>

          {/* User Info */}
          <div className="text-center mb-4">
            <FaUserCircle className="text-3xl text-gray-700 dark:text-white mx-auto" />
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mt-2">{user?.name}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</p>
          </div>

          {/* Sidebar Menu */}
          <ul className="space-y-4">
            <li className="flex items-center space-x-2 cursor-pointer hover:text-amber-500 transition">
              <FaRegHeart className="text-lg" />
              <span>Wishlist</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer hover:text-amber-500 transition">
              <FaCog className="text-lg" />
              <span>Settings</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer hover:text-amber-500 transition" onClick={() => dispatch(toggleTheme())}>
              {isDarkMode ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
              <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer hover:text-red-500 transition mt-4" onClick={() => console.log("Logout function here")}>
              <FaSignOutAlt className="text-lg" />
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Sidebar Overlay (Click to Close) */}
      {showSidebar && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
          onClick={() => setShowSidebar(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
