import { Link } from "react-router-dom"
import Logo from "../../assets/Images/Layout/footerlogo.svg"
import arrowUp from "../../assets/Images/Layout/icon-arrow-up.svg"
import style from "./Footer.module.scss"

export const Footer = () => {

  // Funktion for at rulle til toppen af siden
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth"});
  }

  return (
    <footer className={style.footerStyle}>
      <div className={style.footerWrapper}>
        <div className={style.footerContent}>
          <div className={style.logoWrapper}>
            <img src={Logo} alt="Affaldsguiden" />
            <h4>Affaldsguiden</h4>
          </div>
          <p>Vi arbejder for at informere om korrekt affaldssortering. Ved at sortere hjælper du os, men også klimaet.</p>
          <span>&copy;2023 Affaldsguiden. </span>
        </div>
        <Link className={style.arrowUp} onClick={handleScroll}>Tilbage til toppen <img src={arrowUp} alt="Icon arrow up" /></Link>
      </div>
    </footer>
  )
}
