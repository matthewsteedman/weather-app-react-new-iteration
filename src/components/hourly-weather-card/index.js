import styles from "./styles.module.scss";
import { getIcon } from "@/hooks/use-icons";

const HourlyWeatherCard = ({ weatherData }) => {
  const currentTime = new Date().getHours();
  const time = new Date(weatherData.dt * 1000);
  const hour = time.getHours();
  const format = hour == 0 ? 12 : hour;
  const ampm = hour >= 12 ? "pm" : "am";
  console.log(currentTime === hour);
  return (
    <div
      className={`${styles.container} ${
        currentTime == hour ? styles.active : ""
      }`}
    >
      <p>
        {format}:00
        {ampm}
      </p>
      <div className={styles.icon_temp}>
        {getIcon(weatherData.weather[0].icon)}
        <p>
          {Math.round(weatherData.temp)}/ {Math.round(weatherData.feels_like)}
        </p>
      </div>
      <p>{weatherData.weather[0].description}</p>
    </div>
  );
};

export default HourlyWeatherCard;
