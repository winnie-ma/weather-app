import DayOfWeek from "./components/DayOfWeek/DayOfWeek";
import icon from "../../../WeatherIcon/assets/Rain.png";
const Forecast = () => {
  return (
    <div className="flex py-6">
      <DayOfWeek
        weekday="Monday"
        date="24 July"
        weatherUrl={icon}
        alt="rainy icon"
        tempRange="20 ~ 25"
        nameClass="font-bold text-xl"
        dateClass="font-medium text-xs"
        weatherClass="w-3/4 h-3/4"
        tempClass="font-medium text-sm"
      />
      <DayOfWeek
        weekday="Monday"
        date="24 July"
        weatherUrl={icon}
        alt="rainy icon"
        tempRange="20 ~ 25"
        nameClass="font-bold text-xl"
        dateClass="font-medium text-sm"
        weatherClass="w-2/3 h-2/3"
        tempClass="font-medium text-base"
      />
      <DayOfWeek
        weekday="Monday"
        date="24 July"
        weatherUrl={icon}
        alt="rainy icon"
        tempRange="20 ~ 25"
        nameClass="font-bold text-xl"
        dateClass="font-medium text-sm"
        weatherClass="w-2/3 h-2/3"
        tempClass="font-medium text-base"
      />
      <DayOfWeek
        weekday="Monday"
        date="24 July"
        weatherUrl={icon}
        alt="rainy icon"
        tempRange="20 ~ 25"
        nameClass="font-bold text-xl"
        dateClass="font-medium text-sm"
        weatherClass="w-2/3 h-2/3"
        tempClass="font-medium text-base"
      />
    </div>
  );
};

export default Forecast;
