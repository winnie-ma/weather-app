import TemperatureRange from "../../../TemperatureRange";
import WeatherIcon from "../../../WeatherIcon";
import Meta from "./components/Meta";
import Temperature from "./components/Temperature";
import Date from "../../../Date";
import Name from "../../../Name";
const CurrentCity = () => {
  return (
    <div>
      <Date />
      <Name />
      <Temperature />
      <TemperatureRange />
      <WeatherIcon />
      <Meta />
    </div>
  );
};

export default CurrentCity;
