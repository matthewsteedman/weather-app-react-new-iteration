import styles from "./styles.module.scss";
import useWeatherContext from "@/hooks/use-weather-context";

const SearchBar = () => {
  const {
    getLocation,
    handleSelectCountry,
    selectedCountry,
    countries,
    setSelectedCountry,
  } = useWeatherContext();

  return (
    <div className={styles.country_dropdown}>
      <select
        value={selectedCountry}
        onChange={(e) => handleSelectCountry(e.target.value)}
      >
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option value={country.name} key={country.code}>
            {country.name}
          </option>
        ))}
      </select>
      <button
        className={styles.live_location}
        onClick={() => {
          getLocation();
          setSelectedCountry("");
        }}
      >
        Use live location
      </button>
    </div>
  );
};

export default SearchBar;
