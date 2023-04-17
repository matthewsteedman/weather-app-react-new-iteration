import { createContext, useState, useCallback } from "react";
import axios from "axios";
const WeatherContext = createContext();
function Provider({ children }) {
  const [weatherData, setWeatherData] = useState([]);
  const [coOrdinates, setCoOrdinates] = useState({ lat: null, lon: null });

  const fetchWeatherData = async () => {
    if (coOrdinates.lat && coOrdinates.lon) {
      const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?lat=${coOrdinates.lat}&lon=${coOrdinates.lon}&appid=153aa4a7ff3373e1f1beae68b4fecc57&units=metric`;
      const response = await axios.get(API_ENDPOINT);
      setWeatherData(response.data);
      console.log(response);
    }
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position, "position");
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

  const valueToShare = {
    weatherData,
    fetchWeatherData,
    getLocation,
    coOrdinates,
  };

  return (
    <WeatherContext.Provider value={valueToShare}>
      {children}
    </WeatherContext.Provider>
  );
}

export { Provider };
export default WeatherContext;
