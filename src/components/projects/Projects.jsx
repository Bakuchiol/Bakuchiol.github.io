import React from 'react'
import './projectStyle.css'
import { Parallax } from 'react-parallax'
import { Link } from 'react-router-dom'
import './projectStyle.css'

import space from '../../images/space.png'
import Draggable from 'react-draggable'

function Projects() {
  return (
    <div id='spaceWrap'>
      <Parallax className='spacePara' bgImage={space} strength={200}>
        <div className="spaceDrag">
          <div className="spaceMobile"></div>
        <Draggable>
        <div className="spaceDiv">
            <h3>Console Wars</h3>
          <div className="spaceTxt">
            <p>
              You duel against each alien battleship in order to protect the earth, a trial that begins with consoles and ends in the console.
              <br />
              The main challenge for this project was being able to iterate over an array to simulate a turn base game.
            </p>
            <ul>
              <li><Link to='/Space-Battle'>View Preview ↗</Link></li>
              <li><a href='https://github.com/Bakuchiol/SpaceGame' target='_blank' rel='noreferrer'>See the code <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="github" className='github'/></a></li>
            </ul>
          </div>
        </div>
        </Draggable>
        </div>
      </Parallax>
    </div>
  )
}

export default Projects
