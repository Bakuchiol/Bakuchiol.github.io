import React, { useRef } from 'react'
import './homeStyle.css'
import Home from '../../components/Home'
import Projects from '../../components/projects/Projects'
import Test from '../../components/Test'
import Gucci from '../../components/Gucci'
import Word from '../../components/projects/Word'
import AboutCard from '../../components/about/AboutCard'
import Selected from '../../components/selected/Selected'
import FooterLinks from '../../components/footer_links/FooterLinks'


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
      <div id='navBar'>
        <div className="logoName">
          <p className='text'>LYNETTE CARGO</p>
        </div>
      <div className='navBox'>
        <ul className='navUl'>
            <li onClick={() => scrollTo(project)} className='navHov'>Portfolio</li>
            <li onClick={() => scrollTo(about)} className='navHov'>About</li>
            <li onClick={() => scrollTo(contact)} className='navHov'>Contact</li>
        </ul>
      </div>
    </div>
      {/* components */}
      <div className="home">
        <Home />
      </div>
      <br />
  {/* ----------------------------------------------------------------- */}
      <div ref={about} className="about">
          <AboutCard />
      </div>
  {/* ----------------------------------------------------------------- */}
      <div ref={project} className="projects">
        <Selected />
      </div>
        <Gucci />
        <Word />
        <Projects />
        <Test />
  {/* ----------------------------------------------------------------- */}
      <div ref={contact} className="contact">
        <FooterLinks />
      </div>
    </div>
  )
}

export default HomeInfo
