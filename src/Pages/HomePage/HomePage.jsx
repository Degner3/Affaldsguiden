import style from "./HomePage.module.scss";
import Sorting from "../../assets/Images/Layout/sorting.png";
import Affaldsbeholder from "../../assets/Images/Layout/affaldsbeholder.png";
import { SlideShow } from "../../Components/SlideShow/SlideShow";
import { Link } from "react-router-dom";
import BG from "../../assets/Images/Layout/bg-wave-1.svg";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Button } from "../../Components/Button/Button";

export const HomePage = () => {

  const { userData } = useContext(AuthContext);

  return (
    <section className={style.homePage}>
      <SlideShow />
      <div className={style.recyclingStations}>
        <h3>Find og anmeld genbrugsstationer</h3>
        <div className={style.btnWrapper}>
          <Link to="*">
            {/* <button>Find station</button> */}
            <Button>Find station</Button>
          </Link>
          {userData ? (
            <Link to="/profile"><Button>Profile</Button></Link>
          ) : (
            <Link to="/login"><Button>Log ind</Button></Link>
          )}
        </div>
      </div>
      <section className={style.content}>
        <div className={style.contentWrapper}>
          <figure>
            <figcaption>
              <h2>
                Din guide til sortering
                {/* <span className={style.shadowText}>Din </span>
                <span className={style.shadowText}>guide </span>
                <span className={style.shadowText}>til </span>
                <span className={style.shadowText}>sortering</span> */}
              </h2>
              <p>
                Her kan du se hvordan du skal sortere og hvad der skal i hvilke
                beholdere. Du får også tips og tricks til, hvordan du gør det
                nemt at sortere hjemme hos dig.
              </p>
              <div className={style.btnContainer}>
                <Link to="/sortering">
                <Button to
                  height="65px" 
                  width="180px">Se affaldsguide</Button>
                </Link>
                <Button 
                  height="65px" 
                  width="180px" 
                  backgroundColor="white" 
                  color="var(--lightgreen)"
                  border="1px solid"
                  >Bestil storskrald</Button>
              </div>
            </figcaption>
            <img
              className={style.imgSorting}
              src={Sorting}
              alt="Sortingbeholder"
            />
          </figure>
          <figure>
            <img
              className={style.imgAffaldsbeholder}
              src={Affaldsbeholder}
              alt="Affaldsbeholder"
            />
            <figcaption>
              <h2>
                Bestil din nye affaldsbeholder
                {/* <span className={style.shadowText}>Bestil </span>
                <span className={style.shadowText}>din </span>
                <span className={style.shadowText}>nye </span>
                <span className={style.shadowText}>affaldsbeholder</span> */}
              </h2>
              <p>
                when an unknown printer took a galley of type and scramble it to
                make a type specimen book. It has survived not only
              </p>
              <Button height="65px" width="180px">Bestil nu</Button>
            </figcaption>
          </figure>
        </div>
      </section>
      <img className={style.bg} src={BG} alt="bg wave" />
    </section>
  );
};
