import style from "./HomePage.module.scss"
import Sorting from "../../assets/Images/Layout/sorting.png"
import Affaldsbeholder from "../../assets/Images/Layout/affaldsbeholder.png"
import { SlideShow } from "../../Components/SlideShow/SlideShow";
import BG from "../../assets/Images/Layout/bg-wave-1.svg"

export const HomePage = () => {
  return (
    <section className={style.homePage}>
      <SlideShow />
      <div className={style.recyclingStations}>
        <h3>Find og anmeld genbrugsstationer</h3>
        <div>
          <button>Find station</button>
          <button>Log ind</button>
        </div>
      </div>
      <section className={style.content}>
        <div className={style.contentWrapper}>
          <figure>
            <figcaption>
              <h2>Din guide til sortering
                <span className={style.shadowText}>Din </span>
                <span className={style.shadowText}>guide </span>
                <span className={style.shadowText}>til </span>
                <span className={style.shadowText}>sortering</span>
              </h2>
              <p>Her kan du se hvordan du skal sortere og hvad der skal i hvilke beholdere. Du får også tips og tricks til, hvordan du gør det nemt at sortere hjemme hos dig.</p>
              <div>
                <button>Se affaldsguide</button>
                <button>Bestil storskrald</button>
              </div>
            </figcaption>
            <img className={style.imgSorting} src={Sorting} alt="Sortingbeholder" />
          </figure>
          <figure>
            <img className={style.imgAffaldsbeholder} src={Affaldsbeholder} alt="Affaldsbeholder" />
            <figcaption>
              <h2>Bestil din nye affaldsbeholder
                {/* <span className={style.shadowText}>Bestil </span>
                <span className={style.shadowText}>din </span>
                <span className={style.shadowText}>nye </span>
                <span className={style.shadowText}>affaldsbeholder</span> */}
              </h2>
              <p>when an unknown printer took a galley of type and scramble it to make a type specimen book. It has survived not only</p>
              <button>Bestil nu</button>
            </figcaption>
          </figure>
        </div>
      </section>
      <img className={style.bg} src={BG} alt="bg wave" />
    </section>
  );
}
