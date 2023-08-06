import React from 'react'
import './projectStyle.css'
import { Parallax } from 'react-parallax'
import './projectStyle.css'

import space from '../../images/space.png'
import Draggable from 'react-draggable'

function Projects() {
  return (
    <div id='spaceWrap'>
      <Parallax className='spacePara' bgImage={space} strength={200}>
        <div className="spaceDrag">
        <Draggable>
        <div className="spaceDiv">
          <div className="spaceTxt">
            <h3>Console Wars</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur officia veniam maiores rerum ut. Voluptatibus.</p>
          </div>
        </div>
        </Draggable>
        </div>
      </Parallax>
    </div>
  )
}

export default Projects
