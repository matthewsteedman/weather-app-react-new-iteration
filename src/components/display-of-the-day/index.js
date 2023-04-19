import Styles from "./styles.module.scss";
import { getIcon } from "@/hooks/use-icons";
import useWindowSize from "@/hooks/use-window-dimensions";
import countryNameFromCode from "@/hooks/convert-country-code-to-country-name";
const DisplayOfTheDay = ({ weatherData }) => {
  const { width } = useWindowSize();
  console.log("weatherData?.sys?.country :", weatherData);
  return (
    <div className={`bg-white rounded-md drop-shadow-md ${Styles.card}`}>
      <div className={Styles.svgTemp}>
        <div className={Styles.temp}>
          {weatherData?.weather &&
            getIcon(weatherData?.weather && weatherData?.weather[0]?.icon)}
          <h2>
            {Math.round(weatherData?.main?.temp)}
            <span>&deg;C</span>
          </h2>
        </div>
        <p>
          Location : {weatherData.name},{" "}
          {weatherData?.sys && countryNameFromCode(weatherData?.sys?.country)}
        </p>
      </div>
      {width > 1023 && (
        <div className={Styles.descriptionContainer}>
          {weatherData.weather && <p>{weatherData.weather[0].description}</p>}
          <p>Feels like : {Math.round(weatherData?.main?.temp)}&deg;C</p>
          <p>Location : {weatherData.name}</p>
        </div>
      )}
    </div>
  );
};

export default DisplayOfTheDay;
