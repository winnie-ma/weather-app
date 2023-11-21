import MetaItem from "./components/MetaItem";
import wind from "./assets/wind.svg";
import humidity from "./assets/humidity.svg";
import airQuality from "./assets/PM2.5.svg";
import somatosensory from "./assets/somatosensory.svg";
const Meta = () => {
  return (
    <div className="flex justify-between bg-slate-50 rounded-2xl w-11/12 lg:w-5/6 p-4 mb-2">
      <MetaItem imageUrl={wind} alt="wind icon" value="9km/h" />
      <MetaItem imageUrl={humidity} alt="wind icon" value="85%" />
      <MetaItem imageUrl={airQuality} alt="wind icon" value="75µg" />
      <MetaItem imageUrl={somatosensory} alt="wind icon" value="26°" />
    </div>
  );
};

export default Meta;
