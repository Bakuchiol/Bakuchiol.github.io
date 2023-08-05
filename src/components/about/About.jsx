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
      <div id='formLinks'>
      <div className='aboutForm'>
      <div>
        {/* <h2>Get in touch.</h2> */}
      </div>
        <form id='contactForm' ref={form} onSubmit={sendEmail}>
          {/* <input
            className='form'
            id='name'
            name='name'
            placeholder='Name'
            type='text'
          />
          <br /> */}
          {/* email */}
          <input
          className='form'
          id='email'
          name='email'
          placeholder='Email'
          type='email'
        />
        <br />
        {/* text area */}
        <textarea className='formText' id='message'
                  name='message'
                  placeholder='Message'
        ></textarea>
        <br />
        <button className='formButton' type='submit'>Send</button>
        </form>
        
      </div>
      <div className="rightWrap">
        <div className='aboutLinks'>
          <h3>Thanks for visiting ;)</h3>
          <p id='aboutTitle'>Let's create something great together!</p>
          <p>TO DO: EMPTY SPACE/ IMG?</p>
          <div className='aboutLinkList'>
            <ul>
              <li><a href='https://www.linkedin.com/in/lynette-anne-cargo/' target='_blank' rel='noreferrer'>LinkedIn</a></li>
              <li><a href='https://github.com/Bakuchiol' target='_blank' rel='noreferrer'>GitHub</a></li>
              <li className='linkLink' onClick={()=>{downloadCV(resume)}}>Download Resume</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About