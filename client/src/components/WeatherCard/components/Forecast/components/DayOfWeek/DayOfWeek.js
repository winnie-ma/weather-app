import TemperatureRange from "../../../../../TemperatureRange";
import Name from "../../../../../Name";
import Date from "../../../../../Date";
import WeatherIcon from "../../../../../WeatherIcon";
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
  borderBottom,
}) => {
  return (
    <div
      className={`${borderBottom} flex flex-row justify-between md:flex-col items-center`}
    >
      <Name value={weekday} className={nameClass} />
      <Date value={date} className={dateClass} />
      <WeatherIcon imageUrl={weatherUrl} alt={alt} className={weatherClass} />
      <TemperatureRange value={tempRange} className={tempClass} />
    </div>
  );
};

export default DayOfWeek;
