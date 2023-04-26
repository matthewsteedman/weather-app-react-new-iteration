import styles from "./styles.module.scss";

const FiveDayWeatherHousing = ({ children, title, ToggleButton }) => {
  return (
    <div className={styles.containmentHousing}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.buttonContainer}>{ToggleButton}</div>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default FiveDayWeatherHousing;
