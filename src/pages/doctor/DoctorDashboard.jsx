import React from "react";
import { PiChartLineUp } from "react-icons/pi";
import DoctorLayout from "@/layouts/DoctorLayout";
import Card from "@/components/ui/Card";

import { DoctorAreaChartdata, doctorDashCards } from "@/constants/data";
import AreaChartComponent from "@/components/ui/AreaChartComponent";

const DoctorDashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {doctorDashCards.map((card, index) => (
          <Card key={index} className="p-5 shadow-md rounded-lg bg-white">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-600">{card.title}</p>
              <button className="flex items-center gap-2 text-xs text-gray-500 hover:text-gray-700 transition">
                <PiChartLineUp />
                <span>View</span>
              </button>
            </div>
            <div className="text-2xl font-bold text-gray-900">{card.value}</div>
            <p className="text-sm font-semibold text-green-600 mt-2">
              {card.description}
            </p>
            <p className="text-xs text-gray-500">{card.subtext}</p>
          </Card>
        ))}
      </div>

      <div className="mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-4">
          <Card>
            <div>
              <p>Bookings</p>
            </div>
          </Card>
          <Card>
            <div>
              <p>Bookings</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
