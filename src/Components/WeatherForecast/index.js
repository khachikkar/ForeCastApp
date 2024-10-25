import React from "react";
import WeatherItem from "./WeatherItem";
import  logo from "../../../src/img/logo.png"

const WeatherForecast = ({ forecastData }) => {
  console.log(forecastData);

  const firstItem = forecastData.list[0];
  const sixteenthItem = forecastData.list[8];
  const thirtySecondItem = forecastData.list[16];
  const twentyfour = forecastData.list[24];
  const thirthytwo = forecastData.list[32];


  let showArr = [firstItem, sixteenthItem, thirtySecondItem, twentyfour, thirthytwo];
const sundata = [forecastData.city.sunrise, forecastData.city.sunset ]
  return (
    <div className="forecastCont">
      <img className="logo" src={logo} alt="kk"  />
      <h2>
        Weather Forecast for {forecastData.city.name},{" "}
        {forecastData.city.country}
      </h2>
      <div  className="weatherForecast">
        {showArr.map((item, i) => (

          <WeatherItem key={i} item={item} isslice={true} sundata = {sundata}/>

           
        ))}
      </div>
     <img className="mm" src='https://i.pinimg.com/originals/3d/1c/e3/3d1ce3fb1985505ba88e01e525a8f841.gif' alt='cd'/>

    </div>
  );
};

export default WeatherForecast;
