import React from 'react'
import { Parallax } from 'react-parallax'
import './selectStyles.css'

function Selected() {
    
  return (
    <div id='selectCard'>
      <Parallax>
        <h1>Selected Works</h1>
        <div className="divOne"></div>
        <div className="divTwo"></div>
        <div className="divThree"></div>
      </Parallax>
    </div>
  )
}

export default Selected
