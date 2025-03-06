import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import DoctorsPage from './pages/DoctorsPage'

const App = () => {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/doctors" element={<DoctorsPage /> }/>
      <Route path="/contact" element={<h1>Contact</h1>}/>
    </Routes>
   </Router>
  )
}

export default App