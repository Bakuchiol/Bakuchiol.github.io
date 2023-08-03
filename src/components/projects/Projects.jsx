import React from 'react'
import './projectStyle.css'
import { Parallax } from 'react-parallax'

import mountain from '../../images/mountain.jpg'

function Projects() {
  return (
    <div id='projectWrapper'>
      <Parallax className='projPara' bgImage={mountain} strength={200}>
        <h3>project here</h3>
        <ol>
          <li>EACH PROJECT LINKS?</li>
          <li>EACH PROJECT PICS?</li>
          <li>EACH PROJECT BRIEF SYNOPSIS?</li>
        </ol>
        <h3>project here</h3>
        <h3>project here</h3>
      </Parallax>
    </div>
  )
}

export default Projects
