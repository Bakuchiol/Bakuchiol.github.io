import React, { useRef } from 'react'
import './aboutStyle.css'
// 
const resume = 'http://localhost:3000/Resume.pdf'



function About() {
  // useRef
  const form = useRef()

  const sendEmail = () => {
    
  }

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

        <form id='contactForm' ref={form} onSubmit={sendEmail}>
          <input
            className='form'
            id='name'
            name='name'
            placeholder='Name'
            type='text'
          />
          {/* email */}
          <input
          className='form2'
          id='email'
          name='email'
          placeholder='Email'
          type='email'
        />
        {/* text area */}
        <textarea className='formText' id='message'
                  name='message'
                  placeholder='Message'
        ></textarea>
        <button className='formButton' type='submit'>Send</button>
        </form>
        
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