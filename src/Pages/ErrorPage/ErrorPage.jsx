import { Link } from "react-router-dom"
import { Button } from "../../Components/Button/Button"
import errorGif from "../../assets/Images/error.gif"
import style from "./ErrorPage.module.scss"

// Definerer en komponent kaldet ErrorPage, som repræsenterer en fejlsidesvisning
export const ErrorPage = () => {
  return (
    <section className={style.errpage}>
      <article className={style.errorwrapper}>
        <h2>404</h2>
        <h3>Look like you're lost</h3>
        <p>the page you are looking for not avaible!</p>
        <img src={errorGif} alt="" />
        <div>
            <Link to="/"><Button>Gå tilbage</Button></Link>
        </div>
      </article>
    </section>

  )
}
