import styles from "./styles/card.module.css";
import star from "./assets/Star.jpg";

export default function Card(props) {

  let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

  return (
    <div className={styles.card}>
      {badgeText && <div className={styles.cardBadge}>{badgeText}</div>}
      <img
        src={`./src/Pages/Airbnb/assets/${props.coverImg}`}
        alt="Course avatar thumbnails"
        className={styles.avatar}
      />
      <div className={styles.cardStats}>
        <img src={star} alt="Star symbol" className={styles.star} />
        <span>{props.stats.rating}</span>
        <span className={styles.gray}>({props.stats.reviewCount}) • </span>
        <span className={styles.gray}> {props.location}</span>
      </div>
      <h2 className={styles.cardText}>{props.title}</h2>
      <p className={styles.cardPrice}>
        <span className={styles.bold}>From ${props.price} </span> / person
      </p>
    </div>
  );
}
