import './App.css';
import WeatherForecast from './Components/WeatherForecast';
import { useEffect, useState } from 'react';

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom"
import Main from './Layout/Main';
import WeatherDetail from './Components/WeatherDetail';
import Intro from './Components/Intro';


const API_KEY = "5e3559acd128d7c61a2d0792c7bbbb9b"
const lat = 40.1792;
const lon = 44.4991;


function App() {

const [data, setData] = useState(null)

useEffect(()=>{
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    // console.log(data);
   setData(data)
  })
  .catch(error => {
    console.error('Error:', error);
  });
}, [])

console.log(data)
  return (
    <RouterProvider
    router={createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<Main />}>
          <Route path="/" element={ data ? <Intro/> : <div>...Loading</div>} />
          <Route path="weather" element={ data ? <WeatherForecast forecastData={data}/> : <div>...Loading</div>} />
          <Route path="weather/:dt" element={data ? <WeatherDetail forecastData={data} /> :  <div>...Loading</div>} />
        </Route>
      )
    )}
   />
  );
}

export default App;
