import React from 'react'
import { Parallax } from 'react-parallax'
import './selectStyles.css'

import sand from '../../images/sand.jpg'
import port from '../../images/portfolio.png'
import Gucci from '../Gucci'

function Selected() {
    
  return (
    <div id='selectCard'>
      <Parallax className='selectPara' bgImage={port} strength={200}>
        <div className="testyPara">
        <h1>Selected Works</h1>
        <div id='divTest'>
          <div className="divOne"></div>
        </div>
        <div id='divTest'>
        <div className="divTwo"></div>
        </div>
        <img src={sand} alt="" className='sandImg'/>
        <div className="divThree"></div>
        </div>
      </Parallax>
    </div>
  )
}

export default Selected
