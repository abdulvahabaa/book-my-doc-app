import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import DoctorsPage from './pages/DoctorsPage'
import DoctorProfilePage from './pages/DoctorProfilePage'

const App = () => {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/doctors" element={<DoctorsPage /> }/>
      <Route path="/doctors/profile" element={<DoctorProfilePage />}/>
    </Routes>
   </Router>
  )
}

export default App