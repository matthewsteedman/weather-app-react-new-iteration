import useWeatherContext from "@/hooks/use-weather-context";
import WeatherCard from "@/components/weather-card";
import FiveDayWeatherHousing from "@/components/five-day-weather-housing";
export default function Home() {
  const { fiveDayForecast } = useWeatherContext();

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
