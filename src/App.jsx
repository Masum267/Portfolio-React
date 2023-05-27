import React from 'react'
import './App.css'
import NavBar from './pages/NavBar'
import Home from './pages/Home'
import SocialLinks from './pages/SocialLinks'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Experience from './pages/Experience'
import Contact from './pages/Contact'

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
    </div>
  )
}

export default App
