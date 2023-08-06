import React from 'react'
import { Parallax } from 'react-parallax'
import './selectStyles.css'

import gucci from '../../images/gucci.png'
import txt from '../../images/gucciTxt.png'
import { Link } from 'react-router-dom'

function Selected() {
    
  return (
    <div id='selectCard'>
      <Parallax className='selectPara' bgImage={txt} strength={200}>
        <div className="testyPara">
          <h1>Portfolio</h1>
          <div id='divTest'>
            <div className="gucci">
              <img src={gucci} alt="gucci" className='gucciImg'/>
            </div>
            <div className="divOne">
              <h3>GUCCI</h3>
              <p>The assignment was to recreate a mockup of an existing site in order to practice wire-framing, containerization, as well as toggles and keyframes.</p>
              <p>I chose the Gucci website for its clean aesthetic where I learned that clean does not always mean easy.</p>
              <ul>
                <li><a href='https://github.com/Bakuchiol/FunctionMockUp' target='_blank' rel='noreferrer'>See the code <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="github" className='github'/></a></li>
              </ul>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  )
}
export default Selected
