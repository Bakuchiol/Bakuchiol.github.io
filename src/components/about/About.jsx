import React from 'react'
import './aboutStyle.css'
// 
const resume = 'http://localhost:3000/Resume.pdf'

function About() {
  // resume download
  const downloadCV = (url) => {
    const fileName = url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('download',fileName);
    document.body.appendChild(aTag)
    aTag.click();
    aTag.remove();
  }

  return (
    <div id='aboutWrapper'>
      <div className='aboutForm'>
        <h2>FORM GOES HERE</h2>
      </div>
      <div className='aboutLinks'>
        <h4>contact me/let's work together</h4>
        <ul>
          <li><a href='https://www.linkedin.com/in/lynette-anne-cargo/'>LinkedIn</a></li>
          <li><a href='https://github.com/Bakuchiol'>GitHub</a></li>
          <li onClick={()=>{downloadCV(resume)}}>Resume</li>
        </ul>
      </div>
    </div>
  )
}

export default About