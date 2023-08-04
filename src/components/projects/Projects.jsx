import React from 'react'
import './projectStyle.css'
import { Parallax } from 'react-parallax'

import space from '../../images/SpaceBattle.png'

function Projects() {
  return (
    <div id='projectWrapper'>
      <Parallax className='projPara' bgImage={space} strength={200}>
        <h1>SPACE BATTLE</h1>
      </Parallax>
    </div>
  )
}

export default Projects
