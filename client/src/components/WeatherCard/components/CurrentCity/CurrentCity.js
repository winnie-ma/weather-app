import TemperatureRange from "../../../TemperatureRange";
import WeatherIcon from "../../../WeatherIcon";
import Meta from "./components/Meta";
import Temperature from "./components/Temperature";
import Date from "../../../Date";
import Name from "../../../Name";
import Image from "./components/Image";
import bg from "./assets/Cloudy_day_background.png";
import icon from "../../../WeatherIcon/assets/Cloudy_day.png";
const CurrentCity = () => {
  return (
    <div className="flex flex-col items-center justify-evenly h-full pt-10 lg:space-y-6 lg:p-0">
      <Image imageUrl={bg} alt="cloud" className="absolute top-0 right-0" />
      <Date
        value="20 July, Sunday 12:00"
        className="text-white absolute top-2 left-4 lg:static"
      />
      <Name
        value="New York"
        className="text-white
      font-bold text-2xl lg:text-3xl"
      />
      <Temperature
        value="20"
        className="text-slate-200 font-bold text-6xl lg:text-8xl"
      />
      <TemperatureRange value="18 ~ 20" className="text-white" />
      <WeatherIcon imageUrl={icon} alt="cloud" />
      <Meta />
    </div>
  );
};

export default CurrentCity;
