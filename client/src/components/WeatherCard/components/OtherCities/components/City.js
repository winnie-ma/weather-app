import TemperatureRange from "../../../../TemperatureRange";
import Name from "../../../../Name";
import WeatherIcon from "../../../../WeatherIcon/WeatherIcon";
const City = () => {
  return (
    <div>
      <WeatherIcon />
      <Name />
      <TemperatureRange />
    </div>
  );
};

export default City;
