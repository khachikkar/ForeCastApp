import React from "react";
import WeatherItem from "./WeatherItem";

const WeatherForecast = ({ forecastData }) => {
  console.log(forecastData);

  const firstItem = forecastData.list[0];
  const sixteenthItem = forecastData.list[8];
  const thirtySecondItem = forecastData.list[16];

  let showArr = [firstItem, sixteenthItem, thirtySecondItem];

  return (
    <div className="forecastCont">
      <h2>
        Weather Forecast for {forecastData.city.name},{" "}
        {forecastData.city.country}
      </h2>
      <div  className="weatherForecast">
        {showArr.map((item, i) => (

          <WeatherItem key={i} item={item} isslice={true}/>

           
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
