import TemperatureRange from "../../../../../TemperatureRange";
import Name from "../../../../../Name";
import WeatherIcon from "../../../../../WeatherIcon/WeatherIcon";
const City = ({
  weatherUrl,
  alt,
  city,
  tempRange,
  imageUrl,
  backgroundColor,
}) => {
  console.log(backgroundColor);
  return (
    <div
      className={`flex flex-col items-center justify-center text-white rounded-2xl  ${backgroundColor} w-[48%] lg:w-[23%]`}
    >
      <WeatherIcon imageUrl={weatherUrl} alt={alt} className="w-10 h-10" />
      <Name value={city} className="text-xl font-semibold" />
      <TemperatureRange value={tempRange} className="text-sm" />
    </div>
  );
};

export default City;
