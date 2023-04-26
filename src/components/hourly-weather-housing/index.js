import styles from "./styles.module.scss";

const HourlyWeatherHousing = ({ children, title }) => {
  return (
    <div className={styles.containmentHousing}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default HourlyWeatherHousing;
