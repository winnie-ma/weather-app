import City from "./components/City/City";
import { getIcon } from "../../../../utils/getIcon";
import London from "./assets/London.png";
import Newyork from "./assets/Newyork.png";
import Shanghai from "./assets/Shanghai.png";
import Sydney from "./assets/Sydney.png";
const OtherCities = ({ weatherDataList, switchCurrentCity }) => {
  return (
    <div className="flex justify-between flex-wrap h-full gap-y-2">
      {weatherDataList.map((cityData, index) => (
        <City
          key={`${index} city`}
          weatherIcon={getIcon(cityData.weather)}
          alt={`${cityData.weather} icon`}
          city={cityData.cityName}
          tempRange={`${cityData.minTemp} ~ ${cityData.maxTemp}`}
          backgroundImg={
            (index === 0 && Sydney) ||
            (index === 1 && Shanghai) ||
            (index === 2 && Newyork) ||
            (index === 3 && London)
          }
          switchCurrentCity={switchCurrentCity}
        />
      ))}
    </div>
  );
};

export default OtherCities;
