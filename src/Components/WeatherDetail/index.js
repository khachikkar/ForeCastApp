import React from 'react'
import { useParams } from 'react-router-dom'
import WeatherItem from '../WeatherForecast/WeatherItem'

const WeatherDetail = ({forecastData}) => {

    const {dt} = useParams()
    
 console.log( dt)

const dat = forecastData.list.findIndex(item => item.dt === Number(dt))

console.log( dat)

const showData = forecastData.list.slice(dat, dat + 8)

console.log(showData, ">>>>")


  return (
    <div>
    {
        showData.map((item, i)=>  <WeatherItem key={i} item={item} isslice={false}/>)
    }
    </div>
  )
}

export default WeatherDetail
