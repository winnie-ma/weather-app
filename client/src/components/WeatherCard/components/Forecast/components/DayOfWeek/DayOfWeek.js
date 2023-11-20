import TemperatureRange from "../../../../../TemperatureRange/TemperatureRange";
import Name from "../../../../../Name";
import Date from "../../../../../Date";
import WeatherIcon from "../../../../../WeatherIcon/WeatherIcon";
const DayOfWeek = ({
  weekday,
  date,
  weatherUrl,
  alt,
  tempRange,
  nameClass,
  dateClass,
  weatherClass,
  tempClass,
}) => {
  return (
    <div className="flex flex-col items-center">
      <Name value={weekday} className={nameClass} />
      <Date value={date} className={dateClass} />
      <WeatherIcon imageUrl={weatherUrl} alt={alt} className={weatherClass} />
      <TemperatureRange value={tempRange} className={tempClass} />
    </div>
  );
};

export default DayOfWeek;
