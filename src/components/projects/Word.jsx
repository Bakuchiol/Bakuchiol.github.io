import React from 'react'
import { Parallax } from 'react-parallax'
import word from '../../images/word.png'

function Word() {
  return (
    <div id=''>
        <Parallax className='projPara' strength={200}>
          <img src={word} alt="" className='gucciImg'/>
          <div className="divThree"></div>
        </Parallax>
    </div>
  )
}

export default Word
