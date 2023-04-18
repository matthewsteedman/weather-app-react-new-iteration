import { createContext, useState, useCallback } from "react";
import axios from "axios";
const WeatherContext = createContext();
function Provider({ children }) {
  const [weatherData, setWeatherData] = useState([]);
  const [coOrdinates, setCoOrdinates] = useState({ lat: null, lon: null });
  const [selectedCountry, setSelectedCountry] = useState("");
  const [fiveDayForecast, setFiveDayForecast] = useState([]);
  const countries = [
    { name: "USA", code: "US" },
    { name: "Canada", code: "CA" },
    { name: "Mexico", code: "MX" },
    { name: "United Kingdom", code: "GB" },
    { name: "France", code: "FR" },
    { name: "Germany", code: "DE" },
    { name: "Italy", code: "IT" },
    { name: "Spain", code: "ES" },
    { name: "Japan", code: "JP" },
    { name: "China", code: "CN" },
  ];

  const fetchCurrentWeatherData = async () => {
    if (coOrdinates.lat && coOrdinates.lon) {
      const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?lat=${coOrdinates.lat}&lon=${coOrdinates.lon}&appid=153aa4a7ff3373e1f1beae68b4fecc57&units=metric`;
      const response = await axios.get(API_ENDPOINT);
      setWeatherData(response.data);
    }
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoOrdinates({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        if (error) {
          alert(
            "Please enable location to get live weather reports to your location"
          );
        }
        console.log(error);
      }
    );
  };

  const handleSelectCountry = async (country) => {
    const headers = { "User-Agent": "Weather app" };
    setSelectedCountry(country);
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?country=${country}&format=json&limit=1`,
        headers
      );
      const result = response.data[0];
      const latitude = result.lat;
      const longitude = result.lon;
      setCoOrdinates({ lat: latitude, lon: longitude });
    } catch (error) {
      console.log(error);
    }
  };

  const getFiveDayForecast = async () => {
    if (coOrdinates.lat && coOrdinates.lon) {
      const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/onecall?lat=${coOrdinates.lat}&lon=${coOrdinates.lon}&appid=153aa4a7ff3373e1f1beae68b4fecc57&units=metric&exclude=hourly`;
      const response = await axios.get(API_ENDPOINT);
      const filteredData = response.data.daily.slice(1, 6);
      setFiveDayForecast(filteredData);
    }
  };
  const valueToShare = {
    weatherData,
    fetchCurrentWeatherData,
    getLocation,
    coOrdinates,
    selectedCountry,
    handleSelectCountry,
    countries,
    getFiveDayForecast,
    fiveDayForecast,
  };

  return (
    <WeatherContext.Provider value={valueToShare}>
      {children}
    </WeatherContext.Provider>
  );
}

export { Provider };
export default WeatherContext;
