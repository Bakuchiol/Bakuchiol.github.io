import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './homeStyle.css'
import NavBar from '../../components/NavBar'
import About from '../../components/about/About'
import Home from '../../components/Home'
import Projects from '../../components/projects/Projects'
import Test from '../../components/Test'
import Footer from '../../components/Footer'
import Gucci from '../../components/Gucci'
import SpaceTxt from '../../components/projects/SpaceTxt'
import Word from '../../components/Word'
import AboutCard from '../../components/about/AboutCard'
import Selected from '../../components/Selected'

// import spaceBattle from '../../videos/spaceBattle.mov'

function HomeInfo() {
  // useRef
  const project = useRef(null)
  const about = useRef(null)
  const contact = useRef(null)

  const scrollTo = (element) => {
    window.scrollTo({
      top: element.current.offsetTop,
      behavior: 'smooth'
    })
  }



  return (
    <div id='mainWrapper'>
      {/* <NavBar /> */}
      <div id='navBar'>
      <div className='navBox'>
        <ul className='navUl'>
            <li onClick={() => scrollTo(project)}>Portfolio</li>
            <li onClick={() => scrollTo(about)}>About</li>
            <li onClick={() => scrollTo(contact)}>Contact</li>
        </ul>
      </div>
    </div>




      {/* components */}
      <div className="home">
        <Home />
      </div>
  {/* ----------------------------------------------------------------- */}
      <div id='homeWrapper'>

        <h3>nice to meet you</h3>
      </div>
  {/* ----------------------------------------------------------------- */}
  {/* <video src={spaceBattle} autoPlay loop muted /> */}
    <div ref={project} className="projects">
      <Selected />
    </div>
      <Gucci />
      <SpaceTxt />
      <Projects />
      {/* <SpaceTxt /> */}
      <Test />
      <SpaceTxt />
      <Word />
      <SpaceTxt />
    <div ref={about} className="about">
      <AboutCard />
    </div>
    <div ref={contact} className="contact">
      <About />
    </div>
      <Footer />
    </div>
  )
}

export default HomeInfo
