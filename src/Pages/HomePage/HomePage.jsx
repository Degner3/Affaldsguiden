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
      <section className={style.content}>
      <div className={style.recyclingStations}>
        <h3>Find og anmeld genbrugsstationer</h3>
        <div className={style.btnWrapper}>
          <Link to="/genbrugsstationer">
            <Button>Find station</Button>
          </Link>
          {userData ? (
            <Link to="/profile">
              <Button>Profile</Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button>Log ind</Button>
            </Link>
          )}
        </div>
      </div>
        <div className={style.contentWrapper}>
          <article>
            <h2>Din guide til sortering</h2>
            <p>
              Her kan du se hvordan du skal sortere og hvad der skal i hvilke
              beholdere. Du får også tips og tricks til, hvordan du gør det nemt
              at sortere hjemme hos dig.
            </p>
            <div className={style.btnContainer}>
              <Link to="/sortering">
                <Button to height="65px" width="180px">
                  Se affaldsguide
                </Button>
              </Link>
              <Link to="/bestilbeholder">
                <Button
                  height="65px"
                  width="180px"
                  backgroundColor="white"
                  color="var(--lightgreen)"
                  border="1px solid">
                  Bestil storskrald
                </Button>
              </Link>
            </div>
          </article>
          <img
              className={style.imgSorting}
              src={Sorting}
              alt="Sortingbeholder"
            />
            <img
              className={style.imgAffaldsbeholder}
              src={Affaldsbeholder}
              alt="Affaldsbeholder"
            />
            <article>
            <h2>
                Bestil din nye affaldsbeholder
              </h2>
              <p>
                when an unknown printer took a galley of type and scramble it to
                make a type specimen book. It has survived not only
              </p>
              <Link to="/bestilbeholder">
                <Button height="65px" width="180px">
                  Bestil nu
                </Button>
              </Link>
            </article>
        </div>
      </section>
      <img className={style.bg} src={BG} alt="bg wave" />
    </section>
  );
};