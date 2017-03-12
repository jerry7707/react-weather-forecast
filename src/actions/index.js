import axios from 'axios';

const API_KEY = '9a9a34fa4377b768e6901948e2fdc2dd';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url= `${ROOT_URL}&q=${city},my`;
  const request = axios.get(url);

  console.log('Request:', request);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
