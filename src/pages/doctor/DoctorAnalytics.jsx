import React from "react";
import { PiChartLineUp } from "react-icons/pi";
import DoctorLayout from "@/layouts/DoctorLayout";
import Card from "@/components/ui/Card";

import { DoctorAreaChartdata, doctorDashCards } from "@/constants/data";
import AreaChartComponent from "@/components/ui/AreaChartComponent";

const DoctorAnalytics = () => {
  return (
    <div>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {doctorDashCards.map((card, index) => (
            <Card key={index} className="p-5 shadow-md rounded-lg bg-white">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-gray-600">
                  {card.title}
                </p>
                <button className="flex items-center gap-2 text-xs text-gray-500 hover:text-gray-700 transition">
                  <PiChartLineUp />
                  <span>View</span>
                </button>
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {card.value}
              </div>
              <p className="text-sm font-semibold text-green-600 mt-2">
                {card.description}
              </p>
              <p className="text-xs text-gray-500">{card.subtext}</p>
            </Card>
          ))}
        </div>
        <Card className="p-5 shadow-md rounded-lg bg-white width-full">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-lg font-semibold">Total Visiors</p>
              <p className="text-sm ">Total Visiors and Bookings count</p>
            </div>
            <div className="flex space-x-2">
              <button className="btn-sm bg-gray-200 px-3 py-1 rounded">
                Last 3 months
              </button>
              <button className="btn-sm bg-gray-200 px-3 py-1 rounded">
                Last 30 days
              </button>
              <button className="btn-sm bg-gray-200 px-3 py-1 rounded">
                Last 7 days
              </button>
            </div>
          </div>
          <div className="h-35">
            {/* chart goes here */}
            <AreaChartComponent
              data={DoctorAreaChartdata}
              dataKeys={["visitors", "bookings"]}
              colors={["#2B6CB0", "#1E8449"]}
            />
          </div>
        </Card>
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

export default DoctorAnalytics;
