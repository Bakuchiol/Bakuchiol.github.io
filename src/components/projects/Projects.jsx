import React from 'react'
import './projectStyle.css'
import { Parallax } from 'react-parallax'

import space from '../../images/space.png'

function Projects() {
  return (
    <div id='projectWrapper'>
      <Parallax className='projPara' bgImage={space} strength={200}>
        <h1>CONSOLE WARS</h1>
      </Parallax>
    </div>
  )
}

export default Projects
