import styles from "./styles.module.scss";
const Loader = () => {
  return (
    <div className={styles.loader_container}>
      <svg
        className={styles.loader_icon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="green"
      >
        <path d="M3.27 4.28l1.42 1.42A8.018 8.018 0 0 0 4 12c0 4.41 3.59 8 8 8s8-3.59 8-8a8.018 8.018 0 0 0-0.69-3.3l1.42-1.42A9.969 9.969 0 0 1 22 12c0 5.52-4.48 10-10 10S2 17.52 2 12a9.969 9.969 0 0 1 1.27-4.72zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    </div>
  );
};

export default Loader;
