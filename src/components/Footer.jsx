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
    activity.style.display = 'block'
  }
  console.log(bored.activity)

  return (
    <div id='footerWrapper'>
      <h4>Feeling Bored?
        <button onClick={randomClick}>Click Me</button></h4>
        <br />
        <div id='activityX'>✨{bored.activity}✨</div>
      {/* <p>Made by Lynette Cargo ☻</p> */}
    </div>
  )
}

export default Footer
