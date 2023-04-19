import styles from "./styles.module.scss";
import Link from "next/link";
const OverlayNavigationBar = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`${styles.overlay_nav} ${isOpen ? styles.open : ""}`}>
      <ul>
        <li>
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link onClick={() => setIsOpen(false)} href="/hourly">
            Hourly
          </Link>
        </li>
        <li>Link 2</li>
        <li>Link 3</li>
      </ul>
    </div>
  );
};

export default OverlayNavigationBar;
