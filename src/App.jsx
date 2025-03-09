import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import DoctorsPage from './pages/DoctorsPage'
import DoctorProfilePage from './pages/DoctorProfilePage'
import DoctorBookingPage from './pages/DoctorBookingPage'

const App = () => {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/doctors" element={<DoctorsPage /> }/>
      <Route path="/doctors/profile" element={<DoctorProfilePage />}/>
      <Route path="/doctors/profile/book" element={<DoctorBookingPage />}/>
    </Routes>
   </Router>
  )
}

export default App