import useWeatherContext from "@/hooks/use-weather-context";
import WeatherCard from "@/components/weather-card";
import FiveDayWeatherHousing from "@/components/five-day-weather-housing";
import Loader from "@/components/loader";
import LineChart from "@/components/chart";
import Toggle from "@/components/toggle";

const HomeContainer = () => {
  const {
    fiveDayForecast,
    HandleToggle,
    isToggle,
    getMaxTemperatureData,
    getMinTemperature,
    days,
    text,
  } = useWeatherContext();

  return (
    <div>
      <FiveDayWeatherHousing
        title={"5 Day Forecast"}
        ToggleButton={
          <Toggle text={text} onClick={HandleToggle} isToggle={isToggle} />
        }
      >
        {fiveDayForecast.length > 0 ? (
          !isToggle ? (
            fiveDayForecast.map((weatherData, index) => (
              <WeatherCard key={index} weatherData={weatherData} />
            ))
          ) : (
            <LineChart
              getMaxTemperatureData={getMaxTemperatureData}
              getMinTemperature={getMinTemperature}
              labels={days}
            />
          )
        ) : (
          <Loader />
        )}
      </FiveDayWeatherHousing>
    </div>
  );
};

export default HomeContainer;
