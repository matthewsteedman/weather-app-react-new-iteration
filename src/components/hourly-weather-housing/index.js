import styles from "./styles.module.scss";

const HourlyWeatherHousing = ({ children, title }) => {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default HourlyWeatherHousing;
