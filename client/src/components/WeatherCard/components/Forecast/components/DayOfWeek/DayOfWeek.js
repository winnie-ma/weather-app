import TemperatureRange from "../../../../../TemperatureRange/TemperatureRange";
import Name from "../../../../../Name";
import Date from "../../../../../Date";
import WeatherIcon from "../../../../../WeatherIcon/WeatherIcon";
const DayOfWeek = () => {
  return (
    <div>
      <Name />
      <Date />
      <WeatherIcon />
      <TemperatureRange />
    </div>
  );
};

export default DayOfWeek;
