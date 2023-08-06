import React from 'react'
import Draggable from 'react-draggable'
import Footer from './Footer'
// STYLE AT app.css


function Home() {

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
          <p>*Give the bear a high five!*</p>
          <Footer />
        </div>
      </Draggable>

      <div className="homeWrapTxt">
        <h1 className='homeTitle'>Hello,</h1>
      </div>
      <div id='homeWrapper'>
        <h3>nice to meet you!</h3>
      </div>
    </div>
  )
}

export default Home
