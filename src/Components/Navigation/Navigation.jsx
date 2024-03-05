import { NavLink, Link } from "react-router-dom"
import Logo from "../../assets/Images/Layout/logo.svg"
import style from "./Navigation.module.scss";
import Lock from "../../assets/Images/Layout/icon-unlock.svg"

export const Navigation = () => {


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
        <NavLink to="/login"><img src={Lock} alt="icon unlock" /></NavLink>
      </div>
    </nav>
  );
};
