import React from 'react'
import Navbar from './Components/Nav/navbar'
import Home from './Components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './Components/About'
import Services from './Components/Services'
import Footer from './Components/Footer/footer'
import './App.css'


export default function planet() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

      </Routes>
      <Footer />
    </Router>
  )
}
