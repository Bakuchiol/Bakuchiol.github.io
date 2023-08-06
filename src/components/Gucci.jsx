import React from 'react'
import { Parallax } from 'react-parallax'
import { Link } from 'react-router-dom'
import Draggable from 'react-draggable'

import mhw from '../images/mhw2.png'

function Gucci() {
  return (
    <div id='testWrap'>
      <Parallax className='testPara' bgImage={mhw} strength={200}>
        <div id='divTest'>
            <div className="mhwMobile"></div>
          <Draggable>
          <div className="divTwo">
            <p className='peek'>*peek inside*</p>
            <h1>Monster Hunter</h1>
            <div className="mwhTxt">
              <p>
                A fan made website using the <a href='https://docs.mhw-db.com/' target='_blank' rel='noreferrer'>Monster Hunter World API</a>.
                <br />
                The site is for looking up in-game monster information for Monster Hunter World, with the goal of aiding players in understanding and improving their gameplay experience.
              </p>
              <p>Assignment on making a React app incorporating an API.</p>
              <ul>
                <li><Link>Visit the site ↗</Link></li>
                <li><a href='https://github.com/Bakuchiol/MonsterHunterWorld' target='_blank' rel='noreferrer'>See the code <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="github" className='github'/></a></li>
              </ul>
            </div>    
          </div>
            </Draggable>
            
          <div className="mhwGif">
            <img src="https://giffiles.alphacoders.com/132/13273.gif" alt="mhw" className='zenogre'/>
            {/* <img src="https://media0.giphy.com/media/cWZx38y3V92KsLReZz/giphy.gif" alt="mhw" className='zenogre'/> */}
          </div>
        </div>
      </Parallax>
    </div>
  )
}

export default Gucci
