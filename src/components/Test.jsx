import React from 'react'
import { Parallax } from 'react-parallax'

import sand from '../images/sand.jpg'

function Test() {
  return (
    <div id='testWrap'>
      <Parallax className='testPara' bgImage={sand} strength={200}>
        <h1><span>STUFFFFFSSSSSS</span></h1>
      </Parallax>
    </div>
  )
}

export default Test
