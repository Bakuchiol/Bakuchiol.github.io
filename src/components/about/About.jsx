import React from 'react'
import './aboutStyle.css'
// 
const resume = 'http://localhost:3000/Resume.pdf'



function About() {
  // resume download
  const downloadCV = (url) => {
    fetch(url)
      .then(response => response.blob())
      .then(resume => {
        const resumeURL = window.URL.createObjectURL(new Blob([resume]))
        const fileName = url.split('/').pop()
        const aTag = document.createElement('a')
        aTag.href = resumeURL
        aTag.setAttribute('download',fileName);
        document.body.appendChild(aTag)
        aTag.click();
        aTag.remove();
    })
  };

  return (
    <div id='aboutWrapper'>
      <div className='aboutForm'>
        <h2>FORM GOES HERE</h2>
      </div>
      <div className='aboutLinks'>
        <div>
        <div>About Me</div>
        <ul>
          <li><a href='https://www.linkedin.com/in/lynette-anne-cargo/' target='_blank' rel='noreferrer'>LinkedIn</a></li>
          <li><a href='https://github.com/Bakuchiol' target='_blank' rel='noreferrer'>GitHub</a></li>
          <li onClick={()=>{downloadCV(resume)}}>Download Resume</li>
        </ul>
        </div>
        
      </div>
    </div>
  )
}

export default About