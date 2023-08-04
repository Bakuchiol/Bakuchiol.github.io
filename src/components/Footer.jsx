import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Footer() {
  // state
  const [bored, setBored] = useState('')

  const fetchActivity = async() => {
    const response = await axios.get(`https://www.boredapi.com/api/activity`)
    let info = await response.data
    setBored(info)
  }

  useEffect(() => {
    fetchActivity()
  }, [])

  const randomClick = () => {
    fetchActivity()
    let activity = document.getElementById('activityX')
    activity.style.display = 'block'
  }

  return (
    <div id='footerWrapper'>
      <h4>Feeling Bored? <button onClick={randomClick}>Click Me</button> for an activity.</h4>
      <p id='activityX'>{bored.activity}</p>
      {/* <p>Made by Lynette Cargo ☻</p> */}
    </div>
  )
}

export default Footer
