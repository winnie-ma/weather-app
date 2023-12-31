import { fetchWeather } from "../../apis/fetchWeather";
import { getCityData } from "../../utils/getCityData";
import { formatForecastData } from "../../utils/formatForecastData";
import CurrentCity from "./components/CurrentCity";
import Forecast from "./components/Forecast";
import OtherCities from "./components/OtherCities";
import SearchBar from "./components/SearchBar";
import { useEffect, useState } from "react";

const WeatherCard = () => {
  const cities = ["Sydney", "Shanghai", "Melbourne", "London", "Beijing"];
  const [allCities, setCities] = useState(cities);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [weatherDataList, setWeatherDataList] = useState([]);
  const [forecastData, setForecastData] = useState([]);
  useEffect(() => {
    const getAllData = async () => {
      const citiesData = await Promise.all(
        allCities.map(async (city) => {
          const cityData = await getCityData(city);
          return cityData;
        })
      );
      setWeatherDataList(citiesData);
      const forecastResult = await fetchWeather(null, allCities[0]);
      const formatedData = formatForecastData(forecastResult);
      setForecastData(formatedData);
      setIsLoading(false);
    };
    getAllData();
  }, [allCities]);

  const handleCitySearch = async (targetCity) => {
    const isExistCity = allCities.find(
      (city) => city.toLowerCase() === targetCity.toLowerCase()
    );
    if (isExistCity) {
      switchCurrentCity(targetCity);
    } else {
      const result = await fetchWeather(targetCity);
      if (!result) {
        setIsError(true);
        return;
      }
      const newCitiesList = [...allCities];
      newCitiesList.pop();
      newCitiesList.unshift(targetCity);
      setCities(newCitiesList);
    }
  };

  const switchCurrentCity = (targetCity) => {
    const newCitiesList = [...allCities];
    const newCitiesFilterList = newCitiesList.filter(
      (city) => city.toLowerCase() !== targetCity.toLowerCase()
    );
    newCitiesFilterList.unshift(targetCity);
    setCities(newCitiesFilterList);
  };

  const onModalConfirmBtnClick = () => {
    setIsError(false);
  };
  return (
    <div className="w-11/12 lg:w-4/5 h-4/5 mx-auto rounded-3xl bg-violet-50 overflow-hidden shadow-blue-800 grid grid-rows-12 min-h-[1200px] lg:grid-cols-6 lg:grid-rows-6 lg:min-h-[680px] lg:max-h-[900px]">
      {isLoading ? (
        <div className="row-span-6 col-span-6 max-md:h-screen text-5xl flex items-center justify-center">
          <p>Data is loading...</p>
        </div>
      ) : (
        <>
          <div
            className="row-start-2 row-span-6 md:row-span-5 lg:row-span-6 lg:col-span-2 my-0 mx-4 lg:m-6 rounded-3xl bg-indigo-500 relative
    "
            style={{
              backgroundImage:
                "linear-gradient(150deg, #899bf0 1%, #3f55e4 54%)",
            }}
          >
            {weatherDataList[0] && (
              <CurrentCity weatherData={weatherDataList[0]} />
            )}
          </div>
          <div
            className="row-start-8 row-span-2 m-4 md:row-span-3 lg:col-start-3 lg:col-span-4
     lg:m-6
    "
          >
            {forecastData && <Forecast forecastData={forecastData} />}
          </div>
          <div
            className="row-start-1 row-span-1 lg:row-start-4 lg:col-start-3 lg:col-span-4 m-4 lg:m-6
    "
          >
            <SearchBar
              handleCitySearch={handleCitySearch}
              onModalConfirmBtnClick={onModalConfirmBtnClick}
              isError={isError}
            />
          </div>
          <div
            className="row-start-10 row-span-3 lg:row-span-2 lg:col-span-4 mx-4 mt-0 mb-6 lg:m-6
    "
          >
            <OtherCities
              weatherDataList={weatherDataList.slice(1)}
              switchCurrentCity={switchCurrentCity}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherCard;
