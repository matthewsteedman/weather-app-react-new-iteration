import { useEffect } from "react";
import useWeatherContext from "@/hooks/use-weather-context";
import Image from "next/image";
import Banner from "@/components/banner";
import DisplayOfTheDay from "@/components/display-of-the-day";
import Header from "@/components/header";
export default function Home() {
  const { fetchWeatherData, getLocation, weatherData, coOrdinates } =
    useWeatherContext();

  // on initial load gets users Location co-ordinates

  useEffect(() => {
    getLocation();
  }, []);

  // when location co-ordinates are received the second useEffect fires
  // to get weather for users specific location

  useEffect(() => {
    if (coOrdinates.lat && coOrdinates.lon) {
      fetchWeatherData();
    }
  }, [coOrdinates]);

  // the third useEffect fires every 5 minutes
  // updating the current weather status

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchWeatherData();
    }, 300000); // 5 minutes in milliseconds
    return () => {
      clearInterval(intervalId);
    };
  }, [coOrdinates]);

  console.log("weatherData1 :", weatherData);
  return (
    <div>
      <Header />
      <Banner>
        {weatherData ? (
          <DisplayOfTheDay weatherData={weatherData} />
        ) : (
          <p>Loading ....</p>
        )}
      </Banner>
      <div></div>
    </div>
  );
}
