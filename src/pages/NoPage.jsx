import React from 'react'
import { Link } from 'react-router-dom'

function NoPage() {
  return (
    <div id='errorWrapper'>
        <h1> ** ERROR 404: PAGE NOT FOUND **</h1>
        <p> Go back to the <Link to='/'><span>home page</span></Link></p>

    </div>
  )
}

export default NoPage
