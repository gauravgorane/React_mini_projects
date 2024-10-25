import Maincss from "./styles/Main.module.css";

export default function Main(props) {
  return (
    <main
      className={`${Maincss.infoMain} ${
        props.darkMode ? Maincss.dark : ""
      }`}
    >
      <h1 className={Maincss.mainTitle}>Fun Facts about React</h1>
      <ul className={Maincss.mainFacts}>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}
