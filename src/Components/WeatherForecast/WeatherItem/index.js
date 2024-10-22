import React from 'react'
import { Link } from 'react-router-dom'


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




const WeatherItem = ({item, isslice}) => {


    const today = currentDate  ===  item.dt_txt.split(" ")[0]
    console.log(today)

  return (
   




    <Link to={`/weather/${item.dt}`}>

<div className='item' key={item.dt} style={{ border: today ? '2px solid #000' : '1px solid #ccc' }}>
    <h4>{isslice ? getWeekdayFromDate(item.dt_txt.split(" ")[0])  : item.dt_txt.split(" ")[1].slice(0,5) }</h4>
    {/* <h4>{currentDay}</h4> */}
    <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt='ll' />
    
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
   
   

</div>

  </div>
  </Link>
 
  )
}

export default WeatherItem
