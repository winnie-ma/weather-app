import DayOfWeek from "./components/DayOfWeek";
import { getIcon } from "../../../../utils/getIcon";
const Forecast = ({ forecastData }) => {
  return (
    <div className="flex flex-col border-solid border border-slate-300 rounded-xl md:border-0 md:flex-row md:px-0">
      {forecastData.length > 0 &&
        forecastData.map((data, index) => {
          const isLastForecastData = index === forecastData.length - 1;
          const borderStyle = isLastForecastData
            ? undefined
            : "border-solid border-b border-slate-300 md:border-b-0";
          return (
            <DayOfWeek
              key={`next ${index + 1} weather`}
              weekday={data.dayOfWeek}
              date={data.date}
              weatherUrl={getIcon(data.weather)}
              alt={data.weather}
              tempRange={`${data.minTemp} ~ ${data.maxTemp}`}
              nameClass="font-bold text-sm ml-6 md:ml-0 md:text-xl"
              dateClass="hidden md:block md:font-medium md:text-xs"
              weatherClass="w-8 h-8 my-1 md:w-3/4 md:h-3/4 md:my-4"
              tempClass="font-medium text-sm mr-6 md:mr-0"
              borderBottom={borderStyle}
            />
          );
        })}
    </div>
  );
};

export default Forecast;
