import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Footer() {
  // state
  const [bored, setBored] = useState('')

  const fetchActivity = async() => {
    // const response = await axios.get(`https://www.boredapi.com/api/activity`)
    // let info = await response.data
    // setBored(info)
    await axios.get('https://www.boredapi.com/api/activity')
    .then((response) => { setBored(response.data)})
    .catch((error) => { console.log(error)})
  }

  useEffect(() => {
    fetchActivity()
  }, [])

  const randomClick = () => {
    fetchActivity()
    let activity = document.getElementById('activityX')
    activity.style.visibility = 'visible'
  }
  console.log(bored.activity)

  return (
    <div id='footerWrapper'>
      <h4>Do this after visiting!
        <button onClick={randomClick}>Click Me</button></h4>
        <div id='activityX'>✨{bored.activity}✨</div>
        <div><a href="https://www.boredapi.com/" className='api' target='_blank' rel='noreferrer'>boredApi</a></div>
    </div>
  )
}

export default Footer
