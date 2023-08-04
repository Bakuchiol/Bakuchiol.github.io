import React from 'react'
import { Parallax } from 'react-parallax'
import word from '../images/word.png'

function Word() {
  return (
    <div id='projectWrapper'>
        <Parallax className='testPara' bgImage={word} strength={200}>
            <p>WORD WORD WORD WORD WORD WORD</p>
            <p>WORD WORD WORD WORD WORD WORD</p>
            <p>WORD WORD WORD WORD WORD WORD</p>
            <p>WORD WORD WORD WORD WORD WORD</p>
            <p>WORD WORD WORD WORD WORD WORD</p>
            <p>WORD WORD WORD WORD WORD WORD</p>
            <p>WORD WORD WORD WORD WORD WORD</p>
        </Parallax>
    </div>
  )
}

export default Word
