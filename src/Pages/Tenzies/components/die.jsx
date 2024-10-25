import styles from "../styles/tenzies.module.css";

export default function Die(props) {
  const bgstyles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };
  return (
    <div className={styles.dieFace} style={bgstyles} onClick={props.holdDice}>
      <h2 className={styles.dieNum}>{props.value}</h2>
    </div>
  );
}
