import React from 'react'
import { Link } from 'react-router-dom'


function NavBar() {

  return (
    <div id='navBar'>
      <div className='navBox'>
        <ul className='navUl'>
            <li><Link>Projects</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li>TESTING TO SEE IF GIT IS FIXED</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
