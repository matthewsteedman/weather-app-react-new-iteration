import { createContext, useState, useCallback, useEffect } from "react";
import axios from "axios";
import Header from "@/components/header";
import Banner from "@/components/banner";
import DisplayOfTheDay from "@/components/display-of-the-day";
import SearchBar from "@/components/search";
import Loader from "@/components/loader";
const WeatherContext = createContext();
function Provider({ children }) {
  const [weatherData, setWeatherData] = useState([]);
  const [coOrdinates, setCoOrdinates] = useState({ lat: null, lon: null });
  const [selectedCountry, setSelectedCountry] = useState("");
  const [fiveDayForecast, setFiveDayForecast] = useState([]);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [geolocation, setGeolocation] = useState("");
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

  // needed for acu weather to get location key
  const GetLocationKey = async () => {
    const API_ENDPOINT = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=FMXwjlEEWF915HX2VtZLtPBPFOE8U2lN&q=${-33.9297043}%2C%20${18.4435522}`;
    const response = await axios.get(API_ENDPOINT);
    setGeolocation(response.data);
  };
  const GetCurrentWeatherForecast = async () => {
    const API_ENDPOINT = `http://dataservice.accuweather.com/currentconditions/v1/${geolocation.Key}?apikey=FMXwjlEEWF915HX2VtZLtPBPFOE8U2lN`;
    const response = await axios.get(API_ENDPOINT);
    setWeatherData(response.data[0]);
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
      },
      {
        enableHighAccuracy: true,
        maximumAge: 10000,
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
    if (coOrdinates.lat && coOrdinates.lon && geolocation.Key) {
      const API_ENDPOINT = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${geolocation.Key}?apikey=FMXwjlEEWF915HX2VtZLtPBPFOE8U2lN&metric=true`;
      const response = await axios.get(API_ENDPOINT);
      console.log(response);
      const filteredData = response.data.DailyForecasts;
      setFiveDayForecast(filteredData);
    }
  };

  console.log("fiveDayForecast :", fiveDayForecast);
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
          imageUrl = "/sky.jpg";
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
          imageUrl = "/sky.jpg";
      }
      document.body.style.backgroundImage = `url(${imageUrl})`;
    }
  };

  // # UseEffects used bto fetch data on page load
  // on initial load gets users Location co-ordinates

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    handleGradientChange(weatherData);
  }, [Object.keys(weatherData)]);

  // when location co-ordinates are received the second useEffect fires
  // to get weather for users specific location

  useEffect(() => {
    if (coOrdinates.lat && coOrdinates.lon) {
      GetLocationKey();
      getHourlyForecast();
    }
  }, [coOrdinates]);

  useEffect(() => {
    if (Object.keys(geolocation).length > 0) {
      GetCurrentWeatherForecast();
      getFiveDayForecast();
    }
  }, [geolocation]);

  // the third useEffect fires every 5 minutes
  // updating the current weather status

  useEffect(() => {
    const intervalId = setInterval(() => {
      GetLocationKey();
      if (Object.keys(geolocation).length > 0) {
        GetCurrentWeatherForecast();
        getHourlyForecast();
      }
    }, 300000); // 5 minutes in milliseconds
    return () => {
      clearInterval(intervalId);
    };
  }, [coOrdinates]);

  const valueToShare = {
    weatherData,
    GetCurrentWeatherForecast,
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
    geolocation,
  };
  return (
    <WeatherContext.Provider value={valueToShare}>
      <Header />
      <Banner>
        <SearchBar />
        {Object.keys(weatherData).length > 0 ? <DisplayOfTheDay /> : <Loader />}
      </Banner>
      {children}
    </WeatherContext.Provider>
  );
}

export { Provider };
export default WeatherContext;
