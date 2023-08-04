import React from 'react'
import './homeStyle.css'
import NavBar from '../../components/NavBar'
import About from '../../components/about/About'
import Home from '../../components/Home'
import Projects from '../../components/projects/Projects'
import Test from '../../components/Test'
import Footer from '../../components/Footer'
import Gucci from '../../components/Gucci'
import SpaceTxt from '../../components/projects/SpaceTxt'

function HomeInfo() {
  return (
    <div>
      <NavBar />
      <Home />
  {/* ----------------------------------------------------------------- */}
      <div id='homeWrapper'>

        <h3>nice to meet you</h3>
      </div>
  {/* ----------------------------------------------------------------- */}
      <Gucci />
      <SpaceTxt />
      <Projects />
      <SpaceTxt />
      <Test />
      <SpaceTxt />
      <About />
      <Footer />
    </div>
  )
}

export default HomeInfo
