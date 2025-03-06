import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/doctors" element={<h1>About</h1>}/>
      <Route path="/contact" element={<h1>Contact</h1>}/>
    </Routes>
   </Router>
  )
}

export default App