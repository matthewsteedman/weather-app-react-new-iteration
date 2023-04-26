import Carousel from "@/components/carousel";
import HourlyWeatherHousing from "@/components/hourly-weather-housing";
import HourlyWeatherCard from "@/components/hourly-weather-card";
import useWeatherContext from "@/hooks/use-weather-context";
import Loader from "@/components/loader";

const HourlyContainer = () => {
  const { hourlyForecast } = useWeatherContext();
  return (
    <HourlyWeatherHousing title={"Hourly Forecast"}>
      {hourlyForecast.length > 0 ? (
        <Carousel>
          {hourlyForecast.map((weatherData, index) => (
            <HourlyWeatherCard key={index} weatherData={weatherData} />
          ))}
        </Carousel>
      ) : (
        <Loader />
      )}
    </HourlyWeatherHousing>
  );
};

export default HourlyContainer;
