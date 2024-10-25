import Logo from "./assets/react.svg";
import Navbarcss from "./styles/Navbar.module.css";

export default function Navbar(props) {
  return (
    <nav
      className={`${Navbarcss.navbar} ${
        props.darkMode ? Navbarcss.dark : ""
      }`}
    >
      <div className={Navbarcss.navLogo}>
        <img src={Logo} alt="React Logo" className={Navbarcss.navIcon} />
        <h3 className={Navbarcss.navLogoText}>ReactFacts</h3>
      </div>
      <div className={Navbarcss.toggler}>
        <p className={Navbarcss.togglerLight}>Light</p>
        <div className={Navbarcss.togglerSlider} onClick={props.toggleDarkMode}>
          <div className={Navbarcss.togglerSliderCircle}></div>
        </div>
        <p className={Navbarcss.togglerDark}>Dark</p>
      </div>
    </nav>
  );
}
