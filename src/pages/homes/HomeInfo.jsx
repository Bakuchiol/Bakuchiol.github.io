import React from 'react'
import './homeStyle.css'
import NavBar from '../../components/NavBar'
import About from '../../components/about/About'
import Home from '../../components/Home'
import Projects from '../../components/projects/Projects'

function HomeInfo() {
  return (
    <div>
      <NavBar />
      <Home />
  {/* ----------------------------------------------------------------- */}

    <div id='homeWrapper'>
      <h3>home stuff</h3>
      <h3>home stuff</h3>
      <h3>home stuff</h3>
      <h3>home stuff</h3>
    </div>
  {/* ----------------------------------------------------------------- */}

    <Projects />
    <About />

    </div>
  )
}

export default HomeInfo
