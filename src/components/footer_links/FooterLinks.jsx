import React from 'react'
import './footerStyle.css'
// 
const resume = 'http://localhost:3000/Resume.pdf'

function FooterLinks() {
  // mail
  const Mail = ({email, subject, body, children}) => {
    return (
      <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
    )
  }
  // resume
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
        // aTag.remove();
    })
  };

  return (
    <div id='footerLink'>
      <div className="footHeader">Thanks for visiting <span>!</span></div>
      <div className="mailLink">
        {/*  */}
        <div className='mailLeft'>
          Let's start a project together.
          <br />
          <Mail email='lynettecargo@gmail.com' subject='Hello' body='Hey there!'>
            <span>Get in touch.</span>
          </Mail>
          {/* <a href='mailto:lynettecargo@gmail.com' subject='Hello' body='Hey there!'>lynettecargo@gmail.com</a> */}
        </div>
        {/*  */}
        <div className="mailRight">
          <ul>
            <li><a href='https://www.linkedin.com/in/lynette-anne-cargo/' target='_blank' rel='noreferrer'>LinkedIn</a></li>
            <li><a href='https://github.com/Bakuchiol' target='_blank' rel='noreferrer'>GitHub</a></li>
            <li className='linkLink' onClick={()=>{downloadCV(resume)}}><a href={resume} target='_blank' rel='noreferrer'>Download Resume</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FooterLinks
