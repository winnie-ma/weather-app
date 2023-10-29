import CurrentCity from "./components/CurrentCity/CurrentCity";
import Forecast from "./components/Forecast/Forecast";
import OtherCities from "./components/OtherCities/OtherCities";
import SearchBar from "./components/SearchBar/SearchBar";

const WeatherCard = () => {
  return (
    <div className="w-4/5 h-4/5 mx-auto rounded-3xl bg-white overflow-hidden flex p-6">
      <CurrentCity />
      <div>
        <Forecast />
        <SearchBar />
        <OtherCities />
      </div>
    </div>
  );
};

export default WeatherCard;
