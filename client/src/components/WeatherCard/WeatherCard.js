import CurrentCity from "./components/CurrentCity/CurrentCity";
import Forecast from "./components/Forecast/Forecast";
import OtherCities from "./components/OtherCities/OtherCities";
import SearchBar from "./components/SearchBar/SearchBar";
import { useState } from "react";

const WeatherCard = () => {
  const otherCities = ["Sydney", "Shanghai", "NewYork", "London"];
  const [cities, setCities] = useState(otherCities);
  return (
    <div className="w-11/12 lg:w-4/5 h-4/5 mx-auto rounded-3xl bg-violet-50 overflow-hidden shadow-blue-800 grid grid-rows-12 min-h-[1100px] lg:grid-cols-6 lg:grid-rows-6 lg:min-h-[680px]">
      <div
        className="row-start-2 row-span-6 md:row-span-5 lg:row-span-6 lg:col-span-2 my-0 mx-4 lg:m-6 rounded-3xl bg-indigo-500 relative
      "
        style={{
          backgroundImage: "linear-gradient(150deg, #899bf0 1%, #3f55e4 54%)",
        }}
      >
        <CurrentCity cities={cities} />
      </div>
      <div
        className="row-start-8 row-span-2 m-4 md:row-span-3 lg:col-start-3 lg:col-span-4
       lg:m-6
      "
      >
        <Forecast />
      </div>
      <div
        className="row-start-1 row-span-1 lg:row-start-4 lg:col-start-3 lg:col-span-4 m-4 lg:m-6
      "
      >
        <SearchBar />
      </div>
      <div
        className="row-start-10 row-span-3 lg:row-span-2 lg:col-span-4 mx-4 mt-0 mb-6 lg:m-6
      "
      >
        <OtherCities cities={cities} />
      </div>
    </div>
  );
};

export default WeatherCard;
