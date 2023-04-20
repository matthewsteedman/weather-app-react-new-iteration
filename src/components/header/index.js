import { useState } from "react";
import styles from "./styles.module.scss";
import { MdOutlineSort, MdClose } from "react-icons/md";
import OverlayNavigationBar from "../overlay-nav";
import Link from "next/link";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.container}>
      <Link href="/" onClick={() => setIsOpen(false)}>
        <h1>Weather App</h1>
      </Link>
      <button onClick={toggleNav}>
        {isOpen ? <MdClose /> : <MdOutlineSort />}
      </button>
      <OverlayNavigationBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Header;
