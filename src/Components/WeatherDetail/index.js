import React from 'react'
import { useParams } from 'react-router-dom'
import WeatherItem from '../WeatherForecast/WeatherItem'

const WeatherDetail = ({forecastData}) => {

    const {dt} = useParams()
    
 console.log( dt)

const dat = forecastData.list.findIndex(item => item.dt === Number(dt))

console.log( dat)

const showData = forecastData.list.slice(dat, dat + 8)




const findata = showData.filter((item)=> item.dt_txt.split(" ")[0] === showData[0].dt_txt.split(" ")[0] )
console.log(findata, ">>>>")

  return (
    <div>
      <h1>Weather Detail</h1>
      <h2>
      {
        showData[0].dt_txt.split(" ")[0]
      }
      </h2>
    <div className='details'>
    
      
    {
        findata.map((item, i)=>  <WeatherItem key={i} item={item} isslice={false}/>)
    }
    </div>
    </div>
  )
}

export default WeatherDetail
