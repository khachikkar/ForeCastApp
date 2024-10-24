import "./styles/global.css";
import WeatherForecast from './Components/WeatherForecast';
import { useEffect, useState } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import Main from './Layout/Main';
import WeatherDetail from './Components/WeatherDetail';
import Intro from './Components/Intro';

const API_KEY = "5e3559acd128d7c61a2d0792c7bbbb9b";
const lat = 40.1792;
const lon = 44.4991;

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const shouldFetchNewData = () => {
      const lastFetchTime = localStorage.getItem('lastFetchTime');
      
      // If no fetch time exists, we need to fetch new data
      if (!lastFetchTime) return true;

      const now = new Date().getTime();
      const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

      // Check if 24 hours have passed
      return now - parseInt(lastFetchTime) > oneDayInMilliseconds;
    };

    const fetchWeatherData = () => {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
          console.log("Fetched new weather data:", data);
          setData(data);

          // Save the weather data and the current time to localStorage
          localStorage.setItem('weatherData', JSON.stringify(data));
          localStorage.setItem('lastFetchTime', new Date().getTime().toString());
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    };

    const storedWeatherData = localStorage.getItem('weatherData');
    
    if (shouldFetchNewData()) {
      fetchWeatherData();
    } else if (storedWeatherData) {
      console.log("Using cached weather data");
      setData(JSON.parse(storedWeatherData)); // Use cached data
    }
  }, []);

  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path='/' element={<Main />}>
            <Route path="/" element={data ? <Intro/> : <div>...Loading</div>} />
            <Route path="weather" element={data ? <WeatherForecast forecastData={data}/> : <div>...Loading</div>} />
            <Route path="weather/:dt" element={data ? <WeatherDetail forecastData={data} /> : <div>...Loading</div>} />
          </Route>
        )
      )}
    />
  );
}

export default App;
