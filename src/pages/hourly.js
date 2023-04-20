import useWeatherContext from "@/hooks/use-weather-context";
import HourlyWeatherCard from "@/components/hourly-weather-card";
import HourlyWeatherHousing from "@/components/hourly-weather-housing";
import Carousel from "@/components/carousel";
const Hourly = () => {
  const { hourlyForecast } = useWeatherContext();
  return (
    <div>
      <HourlyWeatherHousing title={"Hourly Forecast"}>
        {hourlyForecast.length > 0 ? (
          <Carousel>
            {hourlyForecast.map((weatherData, index) => (
              <HourlyWeatherCard key={index} weatherData={weatherData} />
            ))}
          </Carousel>
        ) : (
          <p>Loading ...</p>
        )}
      </HourlyWeatherHousing>
    </div>
  );
};

export default Hourly;
