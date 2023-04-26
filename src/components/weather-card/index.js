import styles from "./styles.module.scss";
import { intToDay } from "@/hooks/use-days";
import { getIcon } from "@/hooks/use-icons";
const WeatherCard = ({ weatherData }) => {
  const date = new Date(weatherData.EpochDate * 1000).getDay();
  const day = intToDay(date);
  return (
    <div className={styles.container}>
      <h3>{day}</h3>
      {getIcon(weatherData.Day.Icon)}
      <p>{weatherData.Day.IconPhrase}</p>
      <p>Max: {Math.round(weatherData.Temperature.Maximum.Value)}&deg;C</p>
      <p>Min: {Math.round(weatherData.Temperature.Minimum.Value)}&deg;C</p>
      {/* <p>Wind: {Math.round(weatherData.wind_speed)}kmh</p>
      <p>Humidity: {Math.round(weatherData.humidity)}%</p> */}
    </div>
  );
};

export default WeatherCard;
