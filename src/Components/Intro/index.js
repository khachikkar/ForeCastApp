import React from 'react'
import { Link } from 'react-router-dom'

const Intro = () => {
  return (
    <div className='wft'>
     <h2>See Weather Forecast</h2>
    
     <img src='https://sun9-47.userapi.com/impg/TRPVPp9mxJn39PDQchwJl5lT5gY6uULREQyGnQ/cCw6A_NTsfs.jpg?size=807x427&quality=95&sign=20fcdff5f15d323bbc832262d2757890&c_uniq_tag=p7y8fckyAMdjEABAqWMgZmKn_el_qG37GZ_UxA7c07M&type=album' alt='cd'/>
     <Link to="/weather">
     <button>See Weather</button>
     </Link>

    </div>
  )
}

export default Intro
