import React from 'react'
import './App.css'
import Home from './pages/Home'
import SocialLinks from './pages/SocialLinks'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import NavBar from './pages/navBar'

function App() {

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />

      <SocialLinks />
      
      <Footer />
    </div>
  )
}

export default App
