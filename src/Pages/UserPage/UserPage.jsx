import { useContext } from "react";
import style from "./UserPage.module.scss";
import { AuthContext } from "../../Context/AuthContext";
import Logo from "../../assets/Images/Layout/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../Components/Button/Button";

// UserPage, som repræsenterer brugersiden
export const UserPage = () => {
  // useContext-hooket til at hente brugerdata og funktionen til at rydde brugerdata fra konteksten
  const { userData, clearUserData } = useContext(AuthContext);

  const navigate = useNavigate();
  // håndtere logud-handling
  const handleLogout = () => {
    clearUserData();
    navigate("/login");
  };

  return (
    <section className={style.userStyle}>
      <div className={style.userWrapper}>
        <div className={style.titleBox}>
          <div className={style.logoWrapper}>
            <Link to="/">
              <img src={Logo} alt="logo" />
              <span>Affaldsguiden</span>
            </Link>
          </div>
          <h3>Velkommen ind på Affaldsguiden</h3>
          <Link to="/">
            <Button
              height="50px"
              width="120px"
              backgroundColor="var(--antiwhite)"
              color="var(--lightgreen)"
              border="1px solid"
              fontSize="18px"
              fontWeight="600">
              Tilbage
            </Button>
          </Link>
        </div>
        <article>
          {userData && userData.user && (
            <h2>{`${userData.user.firstname} ${userData.user.lastname}'s profile`}</h2>
          )}
            <p>
              Du er logget ind som{" "}
              {userData && userData.user
                ? `${userData.user.firstname} ${userData.user.lastname}`
                : ""}
            </p>
            <Button onClick={handleLogout}>Log ud</Button>
        </article>
      </div>
    </section>
  );
};
