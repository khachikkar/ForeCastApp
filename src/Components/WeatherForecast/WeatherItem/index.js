import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";

function getCurrentDate() {
    const today = new Date(); // Get the current date
    const year = today.getFullYear(); // Get the current year
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Get the current month (0-indexed, so add 1) and format it to 2 digits
    const day = String(today.getDate()).padStart(2, '0'); // Get the current day and format it to 2 digits

    return `${year}-${month}-${day}`; // Return the formatted date
}

const currentDate = getCurrentDate();
console.log(currentDate); 




function getWeekdayFromDate(dateString) {
    // Convert the date string to a Date object
    const date = new Date(dateString);

    // Get the day of the week (0 = Sunday, 6 = Saturday)
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const weekday = weekdays[date.getDay()];

    return weekday;
}



const WeatherItem = ({item, isslice, sundata}) => {


    const today = currentDate  ===  item.dt_txt.split(" ")[0]
    console.log(today)



const headert = item.dt_txt.split(" ")[1] === "00:00:00"


  const [sunrise, sunset] = sundata


function getSunTimes(time){

  let date = new Date(time * 1000); // Convert to milliseconds
  
  let hours = date.getHours().toString().padStart(2, '0');
  let minutes = date.getMinutes().toString().padStart(2, '0');
  
  return `${hours}:${minutes}`;
  
  }





  return (
   




    <Link to={`/weather/${item.dt}`}>

<div className='item' key={item.dt} style={{ border: today ? '2px solid #000' : '1px solid #ccc' }}>
    <h4>{isslice ? getWeekdayFromDate(item.dt_txt.split(" ")[0])  : item.dt_txt.split(" ")[1].slice(0,5) }</h4>
    {/* <h4>{currentDay}</h4> */}

    <motion.img 
    src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} 
    alt='weather-icon'
    animate={{ y: [0, -20, 0] }} // Move up by 20px, then back down to 0
    transition={{ 
      duration: 2, // Total time for one full up and down cycle
      repeat: Infinity, // Loop animation infinitely
      ease: "easeInOut" // Smooth easing
    }}
  />



    
<div className='tempInfo'>

    <div className='temp'>
        <p className='tm'>{Math.floor(item.main.temp_max)} °C</p>
        <p className='fl'>{Math.floor(item.main.feels_like)} °C</p>
    </div>

<div className='desc'>
<p >{item.weather[0].description}</p>
<p>{item.main.humidity}%</p>
</div>

<div className='wd'>
<p>Wind Speed: {item.wind.speed} m/s</p>
</div>
   
{ today && headert && <div className='sun'>
  
<div className='sunrise'>
  <FiSunrise  size={16}/>
  <p>Sunrise</p>
  <p>{getSunTimes(sunrise)}</p>
  </div>
<div className='sunset'><FiSunset size={16} />
<p>Sunset</p>
<p>{getSunTimes(sunset)}</p>
</div>
  
  </div>}

</div>

  </div>
  </Link>
 
  )
}

export default WeatherItem
