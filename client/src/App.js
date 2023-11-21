import WeatherCard from "./components/WeatherCard";
import BackgroundImage from "./components/BackgroundImage";
import bg from "./assets/bg.png";

const App = () => (
  <BackgroundImage
    imageUrl={bg}
    alt="cloud"
    className={
      "h-screen bg-cover flex items-center mx-auto font-alimama min-h-[1200px] min-w-[480px] max-w-[1280px] lg:min-h-[800px]"
    }
  >
    <WeatherCard />
  </BackgroundImage>
);

export default App;
