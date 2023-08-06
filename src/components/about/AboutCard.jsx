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
            <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzRuenFkODZ4eW1jaHQ4YWV2ODBkanJ4MHloeWowcXVndTFuYThyZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ZefIoePm93MwXpoYxz/giphy-downsized-medium.gif" alt="" className='gifSize'/>
      </div>
    </div>
  )
}

export default AboutCard
