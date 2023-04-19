import useWeatherContext from "@/hooks/use-weather-context";
import HourlyWeatherCard from "@/components/hourly-weather-card";
import HourlyWeatherHousing from "@/components/hourly-weather-housing";
const Hourly = () => {
  const { hourlyForecast } = useWeatherContext();
  console.log("getHourlyForecast:", hourlyForecast);
  return (
    <div>
      <HourlyWeatherHousing title={"Hourly Forecast"}>
        {hourlyForecast.length > 0 ? (
          hourlyForecast.map((weatherData, index) => (
            <HourlyWeatherCard key={index} weatherData={weatherData} />
          ))
        ) : (
          <p>Loading ...</p>
        )}
      </HourlyWeatherHousing>
    </div>
  );
};

export default Hourly;
