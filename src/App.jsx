import React from 'react'
import './App.css'
import Home from './pages/Home'
import SocialLinks from './pages/SocialLinks'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import NavBar from './pages/navBar'
import Footer from './pages/Footer'

function App() {

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />

      <SocialLinks />
    </div>
  )
}

export default App
