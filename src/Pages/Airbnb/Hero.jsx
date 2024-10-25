import styles from "./styles/hero.module.css";
import photoGrid from "./assets/Photo-grid.png";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <img
        src={photoGrid}
        alt="Photo grid airbnb activities"
        className={styles.heroGrid}
      />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Online Experience</h1>
        <p className={styles.heroText}>
          Join unique interactive activities led by one-of-a-kind hosts-all
          without leaving home.
        </p>
      </div>
    </section>
  );
}
