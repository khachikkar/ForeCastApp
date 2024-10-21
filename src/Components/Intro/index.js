import React from 'react'
import { Link } from 'react-router-dom'

const Intro = () => {
  return (
    <div>
     <h2>See Weather Forecast</h2>
     <Link to="/weather">
     <button>See Weather</button>
     </Link>

    </div>
  )
}

export default Intro
