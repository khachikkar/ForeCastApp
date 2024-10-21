import React from "react";
import WeatherItem from "./WeatherItem";
import Link from "antd/es/typography/Link";

const WeatherForecast = ({ forecastData }) => {
  console.log(forecastData);

  const firstItem = forecastData.list[0];
  const sixteenthItem = forecastData.list[8];
  const thirtySecondItem = forecastData.list[16];

  let showArr = [firstItem, sixteenthItem, thirtySecondItem];

  return (
    <div>
      <h2>
        Weather Forecast for {forecastData.city.name},{" "}
        {forecastData.city.country}
      </h2>
      <div>
        {showArr.map((item, i) => (

          <WeatherItem key={i} item={item} isslice={true}/>

           
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
