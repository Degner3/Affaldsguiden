import { useContext } from "react";
import style from "./UserPage.module.scss";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Components/Button/Button";

export const UserPage = () => {
  const { userData, setUserData } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    setUserData(null);
    navigate("/login");
  };

  return (
    <section className={style.userStyle}>
      <div className={style.userWrapper}>
        {userData && userData.user && (
          <h1>{`${userData.user.firstname} ${userData.user.lastname}'s profile`}</h1>
        )}
        <div>
          <p>Du er logget ind som {userData && userData.user ? `${userData.user.firstname} ${userData.user.lastname}` : ''}</p>
          <Button onClick={handleLogout}>Log ud</Button>
          {/* <button onClick={handleLogout}>sfa</button> */}
        </div>
      </div>
    </section>
  );
};
