import Header from "@/components/header";
import Banner from "@/components/banner";
import SearchBar from "@/components/search";
import DisplayOfTheDay from "@/components/display-of-the-day";
import Loader from "@/components/loader";
import useWeatherContext from "@/hooks/use-weather-context";
const Layout = () => {
  const { weatherData } = useWeatherContext();
  return (
    <div>
      <Header />
      <Banner>
        <SearchBar />
        {Object.keys(weatherData).length > 0 ? (
          <DisplayOfTheDay weatherData={weatherData} />
        ) : (
          <Loader />
        )}
      </Banner>
    </div>
  );
};

export default Layout;
