import React, { useState } from 'react'
// import Draggable from 'react-draggable'
import Footer from './Footer'
// STYLE AT app.css

function Home() {

  // state
  // const [show, setShow] = useState()

  // const showDiv = () => {
  //   let div = document.getElementById('footerWrapper')
  //   div.style.display = 'block'
  // }



  return (
    <div id='homeHeadline'>
      {/* <Draggable>
        <div id='testDrag'
        onClick={showDiv}
        >
          <p>*click me*</p>
          <img src="https://thumbs.gfycat.com/BoldGiganticErmine-size_restricted.gif" alt="hello" className='helloDance'/>
          <Footer />
        </div>
      </Draggable> */}

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
    </div>
  )
}

export default Home
