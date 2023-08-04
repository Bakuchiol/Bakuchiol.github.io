import React from 'react'
import './projectStyle.css'
import { Parallax } from 'react-parallax'



function SpaceTxt() {
  return (
    <div id='spaceTxt'>
      <Parallax className='projDescBox' strength={200}>
        <div id='projDescription'>
            <h3>Space Battle was a mini project .... blah</h3>
            <h3>Space Battle was a mini project .... blah</h3>
            <h3>Space Battle was a mini project .... blah</h3>
            <h3>Space Battle was a mini project .... blah</h3>
            <h3>Space Battle was a mini project .... blah</h3>
            <p>LINKY LINKY LINKY LINK</p>
            <p><a href='https://www.google.com/'>Visit the site ↗</a></p>
            <p><a href='https://github.com/Bakuchiol/SpaceGame' target='_blank' rel='noreferrer'>See the code (^-^)</a></p>
        </div>
      </Parallax>
    </div>
  )
}

export default SpaceTxt
