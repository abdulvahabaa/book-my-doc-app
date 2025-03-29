import { useState } from "react";
import { AiOutlineTeam } from "react-icons/ai";
import {
  FaChartBar,
  FaSignOutAlt,
  FaUser,
  FaStethoscope,
} from "react-icons/fa";
import {
  IoCalendarOutline,
  IoSettingsOutline,
  IoTicketOutline,
} from "react-icons/io5";
import { MdOutlineDashboard, MdOutlineHelpOutline } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import HoverTooltip from "./Tooltip";
import { useNavigate } from "react-router-dom";

export const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <aside
      className={`bg-violet-700 text-white rounded-r-2xl h-full p-4 flex flex-col transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      {/* Logo & Title */}
      <div className="flex items-center gap-2 mb-3">
        <div className="rounded-full bg-green-400 p-2">
          <FaStethoscope />
        </div>
        <span className={isOpen ? "block" : "hidden"}>
          <p className="font-semibold">bookMyDoc</p>
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul>
          <li
            onClick={() => navigate("/doctor/dashboard")}
            className="p-2 rounded flex items-center gap-2 hover:bg-violet-600 cursor-pointer hover:font-semibold"
          >
            <HoverTooltip text="Dashboard">
              <MdOutlineDashboard />
            </HoverTooltip>
            <span className={isOpen ? "block" : "hidden"}>Dashboard</span>
          </li>
          <li
            onClick={() => navigate("/doctor/analytics")}
            className="p-2 rounded flex items-center gap-2 hover:bg-violet-600 cursor-pointer hover:font-semibold"
          >
            <HoverTooltip text="Analytics">
              <FaChartBar />
            </HoverTooltip>
            <span className={isOpen ? "block" : "hidden"}>Analytics</span>
          </li>
          <li
            onClick={() => navigate("/doctor/team")}
            className="p-2 rounded flex items-center gap-2 hover:bg-violet-600 cursor-pointer hover:font-semibold"
          >
            <HoverTooltip text="Team">
              <AiOutlineTeam />
            </HoverTooltip>
            <span className={isOpen ? "block" : "hidden"}>Team</span>
          </li>
          <li
            onClick={() => navigate("doctor/reports")}
            className="p-2 rounded flex items-center gap-2 hover:bg-violet-600 cursor-pointer hover:font-semibold"
          >
            <HoverTooltip text="Reports">
              <TbReportAnalytics />
            </HoverTooltip>
            <span className={isOpen ? "block" : "hidden"}>Reports</span>
          </li>
          <li
            onClick={() => navigate("/doctor/bookings")}
            className="p-2 rounded flex items-center gap-2 hover:bg-violet-600 cursor-pointer hover:font-semibold"
          >
            <HoverTooltip text="Bookings">
              <IoTicketOutline />
            </HoverTooltip>
            <span className={isOpen ? "block" : "hidden"}>Bookings</span>
          </li>
          <li
            onClick={() => navigate("/doctor/calendar")}
            className="p-2 rounded flex items-center gap-2 hover:bg-violet-600 cursor-pointer hover:font-semibold"
          >
            <HoverTooltip text="Calendar">
              <IoCalendarOutline />
            </HoverTooltip>
            <span className={isOpen ? "block" : "hidden"}>Calendar</span>
          </li>
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto">
        {/* Settings & Help */}
        <div
          onClick={() => navigate("/doctor/settings")}
          className="p-2 rounded flex items-center gap-2 hover:bg-violet-600 cursor-pointer text-sm"
        >
          <HoverTooltip text="Settings">
            <IoSettingsOutline />
          </HoverTooltip>
          <span className={isOpen ? "block" : "hidden"}>Settings</span>
        </div>
        <div
          onClick={() => navigate("/doctor/help")}
          className="p-2 rounded flex items-center gap-2 hover:bg-violet-600 cursor-pointer text-sm"
        >
          <HoverTooltip text="Help">
            <MdOutlineHelpOutline />
          </HoverTooltip>
          <span className={isOpen ? "block" : "hidden"}>Get Help</span>
        </div>

        {/* User Profile & Dropdown Button */}
        <div className="relative">
          <div
            className="flex items-center justify-between rounded cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="flex items-center gap-2">
              <div className="bg-yellow-500 p-2 rounded">
                <FaUser />
              </div>
              {isOpen && (
                <div>
                  <p className="text-sm font-semibold">Dr. John Doe</p>
                  <p className="text-xs text-gray-200">example@email.com</p>
                </div>
              )}
            </div>
            {isOpen && (
              <div>{isDropdownOpen ? <BsChevronUp /> : <BsChevronDown />}</div>
            )}
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute bottom-full mb-2 w-48 bg-white text-black rounded shadow-lg right-0">
              <ul className="py-2">
                <li
                  onClick={() => navigate("/doctor/profile")}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                >
                  Account
                </li>
                <li
                  onClick={() => navigate("/doctor/billing")}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                >
                  Billing
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex items-center gap-2 text-red-600">
                  <FaSignOutAlt />
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
