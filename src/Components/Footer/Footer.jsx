import Logo from "../../assets/Images/Icons/logo.svg"
import style from "./Footer.module.scss"

export const Footer = () => {
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
        <div className={style.arrowUp}>

        </div>
        <button></button>
        <p>Back to top</p>
      </div>
    </footer>
  )
}
