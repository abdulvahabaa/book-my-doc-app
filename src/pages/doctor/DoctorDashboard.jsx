import React from 'react'
import { useSelector } from "react-redux";
import ThemeToggle from '@/components/ui/ThemeToggle';

const DoctorDashboard = () => {
  // const theme = useSelector((state) => state.theme.mode);
  return (
    <div className={`dark:bg-sky-500 min-h-screen flex flex-col items-center justify-center`}>
    <h1 className="text-3xl font-bold text-primary">Hello, Tailwind + Redux!</h1>
    <ThemeToggle />
  </div>
  )
}

export default DoctorDashboard