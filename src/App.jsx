import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<h1>Home</h1>}/>
      <Route path="/about" element={<h1>About</h1>}/>
      <Route path="/contact" element={<h1>Contact</h1>}/>
    </Routes>
   </Router>
  )
}

export default App