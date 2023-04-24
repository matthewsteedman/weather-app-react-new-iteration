import styles from "./styles.module.scss";

const Toggle = ({ onClick, isToggle, text }) => {
  return (
    <button
      className={`${styles.toggle_button} ${isToggle ? styles.on : styles.off}`}
      onClick={onClick}
    >
      <div className={styles.slider} />
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default Toggle;
