import React from 'react'
// STYLE AT app.css
// parallax
import { Parallax } from 'react-parallax'

import cliff from '../images/cliff.jpg'

function Home() {
  return (
    <div id='homeTitle'>
      <Parallax className='homePara' bgImage={cliff} strength={200}>
        <h4>HOME TITLE</h4>
        <h4>HOME TITLE</h4>
        <h4>HOME TITLE</h4>
        <h4>HOME TITLE</h4>
      </Parallax>
        
    </div>
  )
}

export default Home
