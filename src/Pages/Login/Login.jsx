import style from "./Login.module.scss"
import BG from "../../assets/Images/Layout/logo.svg"

export const Login = () => {


  return (
    <section className={style.loginStyle}>
      <div className={style.loginWrapper}>
        <div>
          <div>
            <img src={BG} alt="bg logo" />
            <span>Affaldsguiden</span>
          </div>
          <h3>Log ind på Affaldsguiden for at anmelde stationer</h3>
        </div>
      </div>
    </section>
  );
}
