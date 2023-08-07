import React, { useEffect, useState } from 'react'
import './aboutStyle.css'
import Draggable from 'react-draggable'

function AboutCard() {
  const [changeColor, setChangeColor] = useState('#406df4')
  const colors = ['#f93700', '#ff00ff', '#adff2f', '#ffc0cb', '#000']

  const randomize = () => {
    const randomColors = colors[Math.floor(Math.random() * colors.length)]
    setChangeColor(randomColors)
  }

  useEffect (() => {
    let div = document.querySelector('.aboutMe')
    div.style.backgroundColor = changeColor
  })

  return (
    <div id='aboutCard'>
      <div className="aboutCard">
        <p className='randomColor'>*click me*</p>
        <div className='aboutMe'
              onClick={randomize}>
          <p>About Me</p>
        </div>
        <Draggable>
        <div className='centerText'>
          <div className='aboutTextBox'>
            <p>I am Lynette Cargo, a creative developer with a passion for UX/UI design. 
                As someone who's always been interested in tech, I took the plunge 
                and enrolled myself into an immersive and rigorous Software Engineering program at Per Scholas. 
                Going from no coding knowledge to making mockups and apps, 
                my goal is to craft visually appealing, user-friendly websites that 
                provide a seamless browsing experience.
            </p>
            {/* <br />
            <p>In my leisure time, I enjoy playing video games.</p> */}
          </div>
        </div>
        </Draggable>
        <div className="gifs">
          <Draggable>
            <div className='gifSize'></div>
          </Draggable>
          <Draggable>
            <div className='gifSize2'></div>
          </Draggable>
          <div className='letsWork'>Let's work together!</div>
        </div>
      </div>
    </div>
  )
}

export default AboutCard
