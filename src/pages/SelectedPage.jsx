import React from 'react'
import { Link } from 'react-router-dom'

import gucci from '../images/gucci1.png'
import gucci2 from '../images/gucci2.png'
import gucci3 from '../images/gucci3.png'

function SelectedPage() {
  return (
    <div id='gucciPage'>
        <h1><Link to='/'>Back to Home</Link></h1>
        <img src={gucci} alt="gucci" className='gucciImage'/>
        <img src={gucci2} alt="gucci" className='gucciImage'/>
        <img src={gucci3} alt="gucci" className='gucciImage'/>
    </div>
  )
}

export default SelectedPage
