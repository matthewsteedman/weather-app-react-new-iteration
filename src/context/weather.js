import { createContext, useState, useEffect } from "react";
import axios from "axios";
import Layout from "@/containers/layout";
import { intToDay } from "@/hooks/use-days";
const WeatherContext = createContext();
function Provider({ children }) {
  const [weatherData, setWeatherData] = useState([]);
  const [coOrdinates, setCoOrdinates] = useState({ lat: null, lon: null });
  const [selectedCountry, setSelectedCountry] = useState("");
  const [fiveDayForecast, setFiveDayForecast] = useState([]);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [isToggle, setIsToggle] = useState(false);
  const countries = [
    { name: "United States", code: "US" },
    { name: "Mexico", code: "MX" },
    { name: "United Kingdom", code: "GB" },
    { name: "France", code: "FR" },
    { name: "Germany", code: "DE" },
    { name: "Italy", code: "IT" },
    { name: "Spain", code: "ES" },
    { name: "Japan", code: "JP" },
    { name: "China", code: "CN" },
  ];

  // functions shared by all components using context

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
      console.log(error, "error");
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
  const getHourlyForecast = async () => {
    if (coOrdinates.lat && coOrdinates.lon) {
      const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/onecall?lat=${coOrdinates.lat}&lon=${coOrdinates.lon}&appid=153aa4a7ff3373e1f1beae68b4fecc57&units=metric&exclude=daily,minutely,current,alerts`;
      const response = await axios.get(API_ENDPOINT);
      const filteredData = response.data.hourly.slice(0, 12);
      setHourlyForecast(filteredData);
    }
  };

  const handleGradientChange = (weatherData) => {
    if (weatherData?.weather?.length > 0) {
      let imageUrl;
      switch (weatherData?.weather[0]?.main) {
        case "Clear":
          imageUrl = "/clear-sky.webp";
          break;
        case "Clouds":
          imageUrl = "/cloudy-day.jpg";
          break;
        case "Rain":
          imageUrl = "/rainy-day.jpg";
          break;
        case "Mist":
          imageUrl = "/mist-day.jpg";
          break;
        // Add additional cases for other weather conditions
        default:
          imageUrl = "/clear-sky.webp";
      }
      document.body.style.backgroundImage = `url(${imageUrl})`;
    }
  };
  // handles the switch to change between cards or charts
  function HandleToggle() {
    setIsToggle(!isToggle);
  }
  // handles change in text for 5 day forecast
  const text = isToggle ? "Chart" : "Cards";

  // gets Max Temperature for 5 day forecast
  const getMaxTemperatureData = () => {
    const data = fiveDayForecast.map((item) => item.temp.max);
    return data;
  };

  // gets minimum temperature for five day forecast
  const getMinTemperature = () => {
    const data = fiveDayForecast.map((item) => item.temp.min);
    return data;
  };

  // handles the date and converts to a day of the week
  const days = fiveDayForecast.map((item) => {
    const date = new Date(item.dt * 1000).getDay();
    return intToDay(date);
  });

  // # UseEffects used bto fetch data on page load
  // on initial load gets users Location co-ordinates
  useEffect(() => {
    getLocation();
  }, []);

  // useEffect(() => {
  //   handleGradientChange(weatherData);
  // }, [Object.keys(weatherData)]);

  // when location co-ordinates are received the second useEffect fires
  // to get weather for users specific location

  useEffect(() => {
    if (coOrdinates.lat && coOrdinates.lon) {
      fetchCurrentWeatherData();
      getFiveDayForecast();
      getHourlyForecast();
    }
  }, [coOrdinates]);

  // the third useEffect fires every 5 minutes
  // updating the current weather status

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchCurrentWeatherData();
      getHourlyForecast();
    }, 300000); // 5 minutes in milliseconds
    return () => {
      clearInterval(intervalId);
    };
  }, [coOrdinates]);

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
    getHourlyForecast,
    hourlyForecast,
    setSelectedCountry,
    HandleToggle,
    isToggle,
    getMaxTemperatureData,
    getMinTemperature,
    days,
    text,
  };
  return (
    <WeatherContext.Provider value={valueToShare}>
      <Layout />
      {children}
    </WeatherContext.Provider>
  );
}

export { Provider };
export default WeatherContext;
