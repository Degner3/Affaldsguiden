import { NavLink, Link } from "react-router-dom"
import Logo from "../../assets/Images/Layout/logo.svg"
import style from "./Navigation.module.scss";
import unLock from "../../assets/Images/Layout/icon-unlock.svg"
import Lock from "../../assets/Images/Layout/icon-locked.svg"
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

export const Navigation = () => {

  const { userData } = useContext(AuthContext);


  const navArr = [
    { Link: "/", Page: "Forside"},
    { Link: "/sortering", Page: "Sortering"},
    { Link: "/genbrugsstationer", Page: "Genbrugsstationer"},
    { Link: "/bestilbeholder", Page: "Bestil beholder"},
  ]

  return (
    <nav className={style.navStyle}>
      <div className={style.navWrapper}>
        <div className={style.logoWrapper}>
          <Link to="/">
            <img src={Logo} alt="Affaldsguiden" />
            <span>Affaldsguiden</span>
          </Link>
        </div>
        <ul>
          {navArr.map((item, i) => {
            return (
              <li key={i}>
                <NavLink
                  to={item.Link}
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#6DA830" : "#232F44",
                    };
                  }}
                >
                  {item.Page}
                </NavLink>
              </li>
            );
          })}
        </ul>
        {userData ? (
          <NavLink to="/profile"><img src={Lock} alt="icon locked" /></NavLink>
        ) : (
          <NavLink to="/login"><img src={unLock} alt="icon unlock" /></NavLink>
        )}
      </div>
    </nav>
  );
};
