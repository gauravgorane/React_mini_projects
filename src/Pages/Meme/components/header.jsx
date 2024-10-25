import styles from "../styles/header.module.css";
import Logo from "../assets/Troll Face.png";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <img src={Logo} alt="Troll Face" className={styles.logo} />
        <h2 className={styles.title}>Meme Generator</h2>
      </div>
    </header>
  );
}
