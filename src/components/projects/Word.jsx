import React from 'react'
import { Parallax } from 'react-parallax'

import Draggable from 'react-draggable'


function Word() {
  return (
    <div id='projectWrapper'>
        <Parallax className='projPara' strength={200}>
          <div className="wordWrap">
            <Draggable>
              <div className="wordDiv"></div>
            </Draggable>
            <Draggable>
              <div className="divThree">
                <h3>Word Duel</h3>
                <p>Word Duel is a rendition of the classic "Hangman" where players compete to guess each other's words in a wizard duel.</p>
                <ul>
                <li><a href="https://bakuchiol.github.io/WordGuess/" target='_blank' rel='noreferrer'>Visit the site ↗</a></li>
                <li><a href='https://github.com/Bakuchiol/WordGuess' target='_blank' rel='noreferrer'>See the code <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="github" className='github'/></a></li>
              </ul>
              </div>
            </Draggable>
          </div>
        </Parallax>
    </div>
  )
}

export default Word
