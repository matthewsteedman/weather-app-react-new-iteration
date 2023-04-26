import Styles from "./styles.module.scss";
import { getIcon } from "@/hooks/use-icons";
import useWindowSize from "@/hooks/use-window-dimensions";
import countryNameFromCode from "@/hooks/convert-country-code-to-country-name";
import useWeatherContext from "@/hooks/use-weather-context";
const DisplayOfTheDay = () => {
  const { width } = useWindowSize();
  const { weatherData, geolocation } = useWeatherContext();
  return (
    <div className={`rounded-md drop-shadow-md ${Styles.card}`}>
      <div className={Styles.svgTemp}>
        <div className={Styles.temp}>
          {weatherData && getIcon(weatherData?.WeatherIcon)}
          <h2>
            {Math.round(weatherData?.Temperature?.Metric.UnitType)}
            <span>&deg;{weatherData?.Temperature?.Metric.Unit}</span>
          </h2>
        </div>
        {weatherData && width < 1024 ? (
          <>
            <p>{weatherData.WeatherText}</p>
            <p>
              {geolocation.LocalizedName},
              {geolocation?.ParentCity?.LocalizedName}
            </p>
          </>
        ) : (
          ""
        )}
      </div>
      {width > 1023 && (
        <div className={Styles.descriptionContainer}>
          {weatherData && <p>{weatherData.WeatherText}</p>}
          <p>
            <strong>Feels like :</strong>{" "}
            {Math.round(weatherData?.Temperature?.Metric.UnitType)}
            &deg;C
          </p>
          <p>
            <strong>Location :</strong> {geolocation.LocalizedName},{" "}
            {geolocation?.ParentCity?.LocalizedName}
          </p>
        </div>
      )}
    </div>
  );
};

export default DisplayOfTheDay;
