import MetaItem from "./components/MetaItem";
import wind from "./assets/wind.svg";
import humidity from "./assets/humidity.svg";
import airQuality from "./assets/PM2.5.svg";
import somatosensory from "./assets/somatosensory.svg";
const Meta = ({ weatherData }) => {
  return (
    <div className="flex justify-between bg-slate-50 rounded-2xl w-11/12 lg:w-5/6 p-4 mb-2">
      <MetaItem
        imageUrl={wind}
        alt="humidity icon"
        value={`${weatherData.humidity}%`}
      />
      <MetaItem
        imageUrl={humidity}
        alt="windSpeed icon"
        value={`${weatherData.windSpeed}km/h`}
      />
      <MetaItem
        imageUrl={airQuality}
        alt="PM25 icon"
        value={`${weatherData.PM25}μg`}
      />
      <MetaItem
        imageUrl={somatosensory}
        alt="Somatosensory icon"
        value={`${weatherData.maxTemp}°`}
      />
    </div>
  );
};

export default Meta;
