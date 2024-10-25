import Navbar from "./navbar";
import Hero from "./Hero";
import Card from "./Card";
import data from "./data";
import styles from "./styles/card.module.css";

export default function Airbnb() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className={styles.cardList}>{cards}</section>
    </div>
  );
}
