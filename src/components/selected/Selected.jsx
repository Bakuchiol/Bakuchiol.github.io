import React from 'react'
import { Parallax } from 'react-parallax'
import './selectStyles.css'

import gucci from '../../images/gucci.png'

function Selected() {
    
  return (
    <div id='selectCard'>
      <Parallax className='selectPara' strength={200}>
        <div className="testyPara">
          <h1>Portfolio</h1>
          <div id='divTest'>
            <div className="divOne"></div>
              <div className="gucci">
              <img src={gucci} alt="gucci" className='gucciImg'/>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  )
}

export default Selected
