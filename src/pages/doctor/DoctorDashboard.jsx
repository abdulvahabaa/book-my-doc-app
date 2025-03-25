import React from "react";
import { PiChartLineUp } from "react-icons/pi";
import DashboardLayout from "@/layouts/DashboardLayout";
import Card from "@/components/ui/Card";

const DoctorDashboard = () => {
  const cards = [
    {
      title: "Revenue",
      value: "$12,000.00",
      description: "Trending up this month",
      subtext: "Visitors for the last 6 months",
    },
    {
      title: "Appointments",
      value: "120",
      description: "Scheduled this month",
      subtext: "Compared to last month",
    },
    {
      title: "Patients",
      value: "3,200",
      description: "Total registered",
      subtext: "Active patients in records",
    },
    {
      title: "Reviews",
      value: "4.8/5",
      description: "Based on patient feedback",
      subtext: "Average rating",
    },
  ];

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
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
    </DashboardLayout>
  );
};

export default DoctorDashboard;
 