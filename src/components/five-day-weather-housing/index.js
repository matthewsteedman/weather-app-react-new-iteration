import styles from "./styles.module.scss";

const FiveDayWeatherHousing = ({ children }) => {
  return (
    <>
      <h2 className={styles.title}>5 Day Forecast</h2>
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default FiveDayWeatherHousing;
