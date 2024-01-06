import TemperatureRange from "../../../../../TemperatureRange";
import Name from "../../../../../Name";
import WeatherIcon from "../../../../../WeatherIcon";
import Image from "../../../CurrentCity/components/Image";
const City = ({
  weatherIcon,
  alt,
  city,
  tempRange,
  backgroundImg,
  switchCurrentCity,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-white rounded-2xl w-[48%] lg:w-[23%] relative`}
    >
      <Image
        imageUrl={backgroundImg}
        alt="bg"
        className="absolute blur-xs drop-shadow h-full w-full top-0 left-0"
      />
      <WeatherIcon
        imageUrl={weatherIcon}
        alt={alt}
        className="w-10 h-10 z-10"
      />
      <Name value={city} className="text-xl font-semibold z-10" />
      <TemperatureRange value={tempRange} className="text-sm z-10" />
    </div>
  );
};

export default City;
