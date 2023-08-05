import React from 'react'
import { Parallax } from 'react-parallax'

import mhw from '../images/mhw2.png'

function Gucci() {
  return (
    <div id='testWrap'>
      <Parallax className='=testPara' bgImage={mhw} strength={200}>
        <div id='divTest'>
          <div className="divTwo">
            
          </div>
        </div>
      </Parallax>
    </div>
  )
}

export default Gucci
