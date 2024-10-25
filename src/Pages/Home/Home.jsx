import { Link } from "react-router-dom";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Link to="/info-site">React Info Site</Link>
      <Link to="/airbnb">AirBnb</Link>
      <Link to="/meme-generator">Meme Generator</Link>
      <Link to="/notes-app">Notes App</Link>
      <Link to="/tenzies">Tenzies Game</Link>
    </div>
  );
}
