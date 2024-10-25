import logo from "./assets/airbnb-logo.png";
import styles from "./styles/navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.airbnbNav}>
      <img src={logo} alt="AirBnb Logo" className={styles.logo}/>
    </nav>
  );
}
