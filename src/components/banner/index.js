import styles from "./styles.module.scss";
const Banner = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Banner;
