import { useContext } from "react";
import WeatherContext from "@/context/weather";

function useWeatherContext() {
  return useContext(WeatherContext);
}

export default useWeatherContext;
