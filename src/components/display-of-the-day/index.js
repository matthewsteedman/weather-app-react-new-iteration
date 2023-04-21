import Styles from "./styles.module.scss";
import { getIcon } from "@/hooks/use-icons";
import useWindowSize from "@/hooks/use-window-dimensions";
import countryNameFromCode from "@/hooks/convert-country-code-to-country-name";
const DisplayOfTheDay = ({ weatherData }) => {
  const { width } = useWindowSize();

  return (
    <div className={`rounded-md drop-shadow-md ${Styles.card}`}>
      <div className={Styles.svgTemp}>
        <div className={Styles.temp}>
          {weatherData?.weather &&
            getIcon(weatherData?.weather && weatherData?.weather[0]?.icon)}
          <h2>
            {Math.round(weatherData?.main?.temp)}
            <span>&deg;C</span>
          </h2>
        </div>
        {weatherData.weather && width < 1024 ? (
          <>
            <p>{weatherData.weather[0].description}</p>
            <p>
              {weatherData.name},{" "}
              {weatherData?.sys &&
                countryNameFromCode(weatherData?.sys?.country)}
            </p>
          </>
        ) : (
          ""
        )}
      </div>
      {width > 1023 && (
        <div className={Styles.descriptionContainer}>
          {weatherData.weather && <p>{weatherData.weather[0].description}</p>}
          <p>
            <strong>Feels like :</strong> {Math.round(weatherData?.main?.temp)}
            &deg;C
          </p>
          <p>
            <strong>Location :</strong> {weatherData.name},{" "}
            {weatherData?.sys && countryNameFromCode(weatherData?.sys?.country)}
          </p>
        </div>
      )}
    </div>
  );
};

export default DisplayOfTheDay;
