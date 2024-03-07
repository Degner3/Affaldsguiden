import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/Images/Layout/logo.svg";
import style from "./Navigation.module.scss";
import unLock from "../../assets/Images/Layout/icon-unlock.svg";
import Lock from "../../assets/Images/Layout/icon-locked.svg";
import { IoClose, IoMenu } from "react-icons/io5";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

export const Navigation = () => {
  const { userData } = useContext(AuthContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navArr = [
    { Link: "/", Page: "Forside" },
    { Link: "/sortering", Page: "Sortering" },
    { Link: "/genbrugsstationer", Page: "Genbrugsstationer" },
    { Link: "/bestilbeholder", Page: "Bestil beholder" },
  ];

  const toggleMenu = () => {
    // e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={style.navStyle}>
      <div className={style.topBox}></div>
      <div className={style.navWrapper}>
        <div className={style.logoWrapper}>
          <Link to="/">
            <img src={Logo} alt="Affaldsguiden" />
            <span>Affaldsguiden</span>
          </Link>
        </div>
        <ul className={isMenuOpen ? style.open : ""}>
          {navArr.map((item, i) => {
            return (
              <li key={i}>
                <NavLink
                  to={item.Link}
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#6DA830" : "#232F44",
                      borderTop: isActive ? "2px solid #6DA830" : "none",
                      padding: "25px 0px",
                    };
                  }}>
                  {item.Page}
                </NavLink>
              </li>
            );
          })}
        </ul>
        {userData ? (
          <NavLink className={style.lock} to="/profile">
            <img className={style.lock} src={Lock} alt="icon lock" />
          </NavLink>
        ) : (
          <NavLink to="/login">
            <img className={style.lock} src={unLock} alt="icon lock open" />
          </NavLink>
        )}
        <div className={style.mobileMenu} onClick={toggleMenu}>
          {isMenuOpen ? <IoClose /> : <IoMenu />}
        </div>
      </div>
    </nav>
  );
};
