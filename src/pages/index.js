import useWeatherContext from "@/hooks/use-weather-context";
import WeatherCard from "@/components/weather-card";
import FiveDayWeatherHousing from "@/components/five-day-weather-housing";
import Loader from "@/components/loader";
import LineChart from "@/components/chart";
import { intToDay } from "@/hooks/use-days";
import Toggle from "@/components/toggle";
import { useState } from "react";
export default function Home() {
  const { fiveDayForecast } = useWeatherContext();
  const [isToggle, setIsToggle] = useState(false);
  const getMaxTemperatureData = () => {
    const data = fiveDayForecast.map((item) => item.temp.max);
    return data;
  };
  const getMinTemperature = () => {
    const data = fiveDayForecast.map((item) => item.temp.min);
    return data;
  };
  const days = fiveDayForecast.map((item) => {
    const date = new Date(item.dt * 1000).getDay();
    return intToDay(date);
  });
  console.log("fiveDayForecast :", fiveDayForecast);
  const text = isToggle ? "Chart" : "Cards";
  function HandleToggle() {
    setIsToggle(!isToggle);
  }
  return (
    <div>
      <FiveDayWeatherHousing
        title={"5 Day Forecast"}
        ToggleButton={
          <Toggle text={text} onClick={HandleToggle} isToggle={isToggle} />
        }
      >
        {fiveDayForecast.length > 0 ? (
          !isToggle ? (
            fiveDayForecast.map((weatherData, index) => (
              <WeatherCard key={index} weatherData={weatherData} />
            ))
          ) : (
            <LineChart
              getMaxTemperatureData={getMaxTemperatureData}
              getMinTemperature={getMinTemperature}
              labels={days}
            />
          )
        ) : (
          <Loader />
        )}
      </FiveDayWeatherHousing>
    </div>
  );
}
