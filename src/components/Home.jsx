import React from 'react'
// import Draggable from '../Draggable'
import Draggable from 'react-draggable'
import Footer from './Footer'
// STYLE AT app.css

function Home() {
  return (
    <div id='homeHeadline'>
      <Draggable>
        <div id='testDrag'>
          WORK PLS
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
