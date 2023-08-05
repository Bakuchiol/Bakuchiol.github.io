import React from 'react'
import './aboutStyle.css'
import Draggable from 'react-draggable'

function AboutCard() {
  return (
    <div id='aboutCard'>
      <div className="aboutCard">
        <div className='aboutMe'>
          <p>About Me</p>
        </div>
        <Draggable>
        <div className='centerText'>
          <div className='aboutTextBox'>
            <p>I am a creative developer with a passion for UX/UI design. 
                As someone who's always been interested in tech, I took the plunge 
                and enrolled myself into an immersive and rigorous Software Engineering program at Per Scholas. 
                Going from no coding knowledge to making mockups and apps, 
                my goal is to craft visually appealing, user-friendly websites that 
                provide a seamless browsing experience.
            </p>
            <br />
            <p>In my leisure time, I enjoy playing video games like this <a href='https://www.google.com/' target='_blank' rel='noreferrer'>one where I made a fan website</a>.</p>
          </div>
        </div>
        </Draggable>
      </div>
    </div>
  )
}

export default AboutCard
