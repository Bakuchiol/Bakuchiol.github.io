import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div id='navBar'>
      <div className='navBox'>
        <ul className='navUl'>
            <li><Link to='/'>Home</Link></li>
            <li><Link>Projects</Link></li>
            <li><Link>About</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
