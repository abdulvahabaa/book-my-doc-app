import React, { useState } from "react";
import { Sidebar } from "@/components/ui/DashSidebar.jsx";
import { Navbar } from "@/components/ui/DashNavbar.jsx";

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen w-full bg-gray-100">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <div className="flex flex-col flex-1">
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="p-3">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
