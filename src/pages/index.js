import { useEffect } from "react";
import useWeatherContext from "@/hooks/use-weather-context";
import Banner from "@/components/banner";
import DisplayOfTheDay from "@/components/display-of-the-day";
import Header from "@/components/header";
import SearchBar from "@/components/search";
import WeatherCard from "@/components/weather-card";
import FiveDayWeatherHousing from "@/components/five-day-weather-housing";
export default function Home() {
  const {
    fetchCurrentWeatherData,
    getLocation,
    weatherData,
    coOrdinates,
    getFiveDayForecast,
    fiveDayForecast,
  } = useWeatherContext();
  console.log("fiveDayForecast :", fiveDayForecast);
  // on initial load gets users Location co-ordinates

  useEffect(() => {
    getLocation();
  }, []);

  // when location co-ordinates are received the second useEffect fires
  // to get weather for users specific location

  useEffect(() => {
    if (coOrdinates.lat && coOrdinates.lon) {
      fetchCurrentWeatherData();
      getFiveDayForecast();
    }
  }, [coOrdinates]);

  // the third useEffect fires every 5 minutes
  // updating the current weather status

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchCurrentWeatherData();
    }, 300000); // 5 minutes in milliseconds
    return () => {
      clearInterval(intervalId);
    };
  }, [coOrdinates]);

  console.log("five day forecast :", fiveDayForecast);

  return (
    <div>
      <FiveDayWeatherHousing>
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
