import React from 'react'
import './footerStyle.css'

function FooterLinks() {

  const Mail = ({email, subject, body, children}) => {
    return (
      <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
    )
  }

  return (
    <div id='footerLink'>
      <div className="footHeader">Thanks for visiting!</div>
      <div className="mailLink">
        {/*  */}
        <div className='mailLeft'>
          Let's start a project together.
          <br />
          <Mail email='lynettecargo@gmail.com' subject='Hello' body='Hey there!'>
            Get in touch.
          </Mail>
          {/* <a href='mailto:lynettecargo@gmail.com' subject='Hello' body='Hey there!'>lynettecargo@gmail.com</a> */}
        </div>
        {/*  */}
        <div className="mailRight">
          
        </div>
      </div>
    </div>
  )
}

export default FooterLinks
