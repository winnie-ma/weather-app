import TemperatureRange from "../../../TemperatureRange";
import WeatherIcon from "../../../WeatherIcon";
import Meta from "./components/Meta";
import Temperature from "./components/Temperature";
import Date from "../../../Date";
import Name from "../../../Name";
import Image from "./components/Image";
import { getIcon } from "../../../../utils/getIcon";
import { getBg } from "../../../../utils/getBackground";
const CurrentCity = ({ weatherData }) => {
  const weatherIcon = getIcon(weatherData.weather);
  const backgroundImage = getBg(weatherData.weather);
  return (
    <div className="flex flex-col items-center justify-evenly h-full pt-10 lg:space-y-6 lg:p-0">
      <Image
        imageUrl={backgroundImage}
        alt={weatherData.weather}
        className="absolute top-0 right-0"
      />
      <Date
        value={weatherData.dateTime}
        className="text-white absolute top-2 left-4 lg:static"
      />
      <Name
        value={weatherData.cityName}
        className="text-white
      font-bold text-2xl lg:text-3xl"
      />
      <Temperature
        value={weatherData.currentTemp}
        className="text-slate-200 font-bold text-6xl lg:text-8xl"
      />
      <TemperatureRange
        value={`${weatherData.minTemp} ~ ${weatherData.maxTemp}`}
        className="text-white"
      />
      <WeatherIcon imageUrl={weatherIcon} alt={weatherData.weather} />
      <Meta weatherData={weatherData} />
    </div>
  );
};

export default CurrentCity;
