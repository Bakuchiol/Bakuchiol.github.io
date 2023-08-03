import React from 'react'
import './homeStyle.css'
import NavBar from '../../components/NavBar'
import About from '../../components/about/About'
import Home from '../../components/Home'
import Projects from '../../components/projects/Projects'
import Test from '../../components/Test'
import Footer from '../../components/Footer'

function HomeInfo() {
  return (
    <div>
      <NavBar />
      <Home />
  {/* ----------------------------------------------------------------- */}
      <div id='homeWrapper'>
        <h3>home stuff</h3>
        <h3>home stuff</h3>
      </div>
  {/* ----------------------------------------------------------------- */}
      <Projects />
      <Test />
      <About />
      <Footer />
    </div>
  )
}

export default HomeInfo
