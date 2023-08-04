import React, { useState } from 'react'
// import Draggable from '../Draggable'
import Draggable from 'react-draggable'
import Footer from './Footer'
// STYLE AT app.css

function Home() {

  // state
  const [show, setShow] = useState()

  const showDiv = () => {
    let div = document.getElementById('footerWrapper')
    div.style.display = 'block'
  }



  return (
    <div id='homeHeadline'>
      <Draggable>
        <div id='testDrag'
        onClick={showDiv}
        >
          <p>*click me*</p>
          {/* WORK PLS */}
          {/* <img src="https://64.media.tumblr.com/944613c4f914d1370421dec4e5b5e681/tumblr_onhd79Vi0g1sih1rao1_250.gif" alt="hello" className='helloDance'/> */}
          <img src="https://thumbs.gfycat.com/BoldGiganticErmine-size_restricted.gif" alt="hello" className='helloDance'/>
          <Footer />
        </div>
      </Draggable>
      <div className="homeWrapTxt">
        <h1 className='homeTitle'>Hell<span>o</span>!</h1>
        <p className='homeMe'>I'm Lynette Cargo</p>
        <p className='homeSub'>
          Web Developer, UX/UI Designer
        </p>
      </div>
      <div id='homeWrapper'>
        <h3>nice to meet you</h3>
        <h3>thanks for visiting ;)</h3>
      </div>
      {/* testing drag */}
      {/* <Draggable>
        <div id='testDrag'>WILL IT DRAGGGGGGGGGG???</div>
      </Draggable> */}
      {/* testing drag */}
    </div>
  )
}

export default Home
