import dayjs from "dayjs";
import { fetchWeather } from "../apis/fetchWeather";

export const getCityData = async (cityName) => {
  const weatherData = await fetchWeather(cityName);
  console.log(weatherData.coord);
  const airPolluteData = await fetchWeather(
    null,
    null,
    weatherData.coord.lon,
    weatherData.coord.lat
  );
  const singleCityData = {
    dateTime: dayjs().format("DD MMMM, dddd HH:mm"),
    cityName: weatherData.name,
    currentTemp: Math.ceil(weatherData.main.temp),
    minTemp: Math.ceil(weatherData.main.temp_min),
    maxTemp: Math.ceil(weatherData.main.temp_max),
    weather: weatherData.weather[0].main,
    windSpeed: Math.ceil(weatherData.wind.speed),
    humidity: Math.ceil(weatherData.main.humidity),
    PM25: Math.ceil(airPolluteData.list[0].components.pm2_5),
  };
  return singleCityData;
};
