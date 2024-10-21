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




const WeatherItem = ({item, isslice}) => {


    const today = currentDate  ==  item.dt_txt.split(" ")[0]
    console.log(today)

  return (
   




    <Link to={`/weather/${item.dt}`}>

<div key={item.dt} style={{ margin: '20px', padding: '10px', border: today ? '2px solid #000' : '1px solid #ccc' }}>
    <h4>{isslice ? item.dt_txt.split(" ")[0] : item.dt_txt.split(" ")[1] }</h4>
    <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt='ll' />
    <p>Temperature: {item.main.temp} °C</p>
    <p>Feels Like: {item.main.feels_like} °C</p>
    <p>Weather: {item.weather[0].description}</p>
    <p>Wind Speed: {item.wind.speed} m/s</p>
    <p>Humidity: {item.main.humidity}%</p>
  </div>
  </Link>
 
  )
}

export default WeatherItem
