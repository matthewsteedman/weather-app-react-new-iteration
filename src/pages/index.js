import { useEffect } from "react";
import useWeatherContext from "@/hooks/use-weather-context";
import Banner from "@/components/banner";
import DisplayOfTheDay from "@/components/display-of-the-day";
import Header from "@/components/header";
import SearchBar from "@/components/search";
import WeatherCard from "@/components/weather-card";
import FiveDayWeatherHousing from "@/components/five-day-weather-housing";
export default function Home() {
  const { fiveDayForecast } = useWeatherContext();
  console.log("fiveDayForecast :", fiveDayForecast);

  return (
    <div>
      <FiveDayWeatherHousing title={"5 Day Forecast"}>
        {fiveDayForecast.length > 0 ? (
          fiveDayForecast.map((weatherData, index) => (
            <WeatherCard key={index} weatherData={weatherData} />
          ))
        ) : (
          <p>Loading.....</p>
        )}
      </FiveDayWeatherHousing>
    </div>
  );
}
