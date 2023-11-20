import CurrentCity from "./components/CurrentCity/CurrentCity";
import Forecast from "./components/Forecast/Forecast";
import OtherCities from "./components/OtherCities/OtherCities";
import SearchBar from "./components/SearchBar/SearchBar";
import { useState } from "react";

const WeatherCard = () => {
  const otherCities = ["Sydney", "Shanghai", "NewYork", "London"];
  const [cities, setCities] = useState(otherCities);
  return (
    <div className="w-4/5 h-4/5 mx-auto rounded-3xl bg-violet-50 overflow-hidden shadow-blue-800 grid grid-cols-6 grid-rows-6">
      <div
        className="row-span-6 col-span-2 m-6 rounded-3xl bg-indigo-500 relative
      "
        style={{
          backgroundImage:
            "linear-gradient(150deg, #899bf0 1%, #3ff55e4 54%, #3ff5e4 96%)",
        }}
      >
        <CurrentCity cities={cities} />
      </div>
      <div
        className="row-span-3 col-span-4 my-6
      "
      >
        <Forecast />
      </div>
      <div
        className="row-span-1 col-span-4 m-6
      "
      >
        <SearchBar />
      </div>
      <div
        className="row-span-2 col-span-4 m-6
      "
      >
        <OtherCities cities={cities} />
      </div>
    </div>
  );
};

export default WeatherCard;
