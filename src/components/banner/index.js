import styles from "./styles.module.scss";
import useWeatherContext from "@/hooks/use-weather-context";
import countryNameFromCode from "@/hooks/convert-country-code-to-country-name";
const Banner = ({ children }) => {
  const { weatherData } = useWeatherContext();
  console.log("weather data:", weatherData);
  return <div className={styles.container}>{children}</div>;
};

export default Banner;
