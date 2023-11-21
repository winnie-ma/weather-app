import City from "./components/City/City";
import WeatherIcon from "../../../WeatherIcon/assets/Rain.png";
const OtherCities = ({ cities }) => {
  const citiesData = cities.map((city) => {
    return {
      name: city,
      weatherIcon: WeatherIcon,
      tempRange: "29 ~ 32",
      alt: "rainy",
      backgroundColor: "bg-indigo-400",
    };
  });
  return (
    <div className="flex justify-between flex-wrap h-full gap-y-2">
      {citiesData.map((city) => (
        <City
          key={`${city.name}`}
          weatherUrl={city.weatherIcon}
          alt={city.alt}
          city={city.name}
          tempRange={city.tempRange}
          backgroundColor={city.backgroundColor}
        />
      ))}
    </div>
  );
};

export default OtherCities;
