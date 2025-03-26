import React from "react";
import { PiChartLineUp } from "react-icons/pi";
import DashboardLayout from "@/layouts/DashboardLayout";
import Card from "@/components/ui/Card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = Array.from({ length: 30 }, (_, i) => ({
  name: `Day ${i + 1}`,
  visitors: Math.floor(Math.random() * 500) + 100,
  bookings: Math.floor(Math.random() * 300) + 50,
}));


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
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {cards.map((card, index) => (
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
              <button className="btn-sm bg-gray-200 px-3 py-1 rounded">Last 3 months</button>
              <button className="btn-sm bg-gray-200 px-3 py-1 rounded">Last 30 days</button>
              <button className="btn-sm bg-gray-200 px-3 py-1 rounded">Last 7 days</button>
            </div>
          </div>
          <div className="h-45">{/* chart goes here */}
          <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid stroke="#ddd" strokeDasharray="0" vertical={false} />
                <XAxis dataKey="name" stroke="#555" />
                <Tooltip />
                <Area type="monotone" dataKey="visitors" stroke="#2B6CB0" strokeWidth={1.5} fill="url(#colorVisitors)" />
                <Area type="monotone" dataKey="bookings" stroke="#1E8449" strokeWidth={1.5} fill="url(#colorBookings)" />
                <defs>
                  <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="10%" stopColor="#2B6CB0" stopOpacity={0.9} />
                    <stop offset="95%" stopColor="#2B6CB0" stopOpacity={0.3} />
                  </linearGradient>
                  <linearGradient id="colorBookings" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="10%" stopColor="#1E8449" stopOpacity={0.9} />
                    <stop offset="95%" stopColor="#1E8449" stopOpacity={0.3} />
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DoctorDashboard;
