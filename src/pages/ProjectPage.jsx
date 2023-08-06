import React from 'react'
import { Link } from 'react-router-dom'

import space1 from '../images/space1.png'
import spaceWin from '../images/spaceWin.png'
import space2 from '../images/space2.png'

function ProjectPage() {
  return (
    <div id='projectPageWrap'>
      <h1><Link to='/'>Back to Home</Link></h1>
      <div className="spaceImgBox">
        <img src={space1} alt="console wars" className='spaceImg'/>
        <img src={space2} alt="console wars" className='spaceImg1'/>
        <img src={spaceWin} alt="console wars" className='spaceImg2'/>
      </div>
    </div>
  )
}

export default ProjectPage
