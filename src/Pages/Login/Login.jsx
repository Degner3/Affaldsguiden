import style from "./Login.module.scss"
import Logo from "../../assets/Images/Layout/logo.svg"
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { Button } from "../../Components/Button/Button";

// Login, som repræsenterer login-siden for applikationen
export const Login = () => {

  // useNavigate-hooket til at håndtere navigationslogik
  const navigate = useNavigate();

  // Definerer tilstande for brugernavn, adgangskode og fejlmeddelelse
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Tilstand for at vise eller skjule adgangskoden
  const [showPassword, setShowPassword] = useState(false);

  // useContext-hooket til at få adgang til saveUserData-funktionen fra konteksten
  const { saveUserData } = useContext(AuthContext);

  // håndtering af login
  const handleLogin = (e) => {
    // Forhindrer siden at opdatere når man trykker submit
    e.preventDefault();

    let url = "http://localhost:3000/login";

    // Opretter en URLSearchParams-objekt med brugernavn og adgangskode
    let body = new URLSearchParams();
    body.append("username", e.target.username.value);
    body.append("password", e.target.password.value);

    let options = {
      method: "POST",
      body: body,
    };

    fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      // Gemmer brugeroplysninger ved vellykket login
      saveUserData(data);

      // Navigerer til brugerprofilen, hvis login er vellykket
      if (data && data) {
        navigate("/profile");
      } else {
        setErrorMsg("Forkert brugernavn eller adgangskode");
      }
    })
    .catch((err) => {
      console.error(err);
      setErrorMsg("Forkert brugernavn eller adgangskode")
    })
  }
  
  // Funktion til at vise eller skjule adgangskoden
  const showHidePassword = () => {
    setShowPassword(!showPassword);
  };

  // console.log("user ", saveUserData);

  return (
    <section className={style.loginStyle}>
      <div className={style.loginWrapper}>
        <div className={style.titleBox}>
          <div className={style.logoWrapper}>
            <Link to="/">
              <img src={Logo} alt="logo" />
              <span>Affaldsguiden</span>
            </Link>
          </div>
          <h3>Log ind på Affaldsguiden for at anmelde stationer</h3>
          <Link to="/"><Button
            height="50px"
            width="120px"
            backgroundColor="var(--antiwhite)"
            color="var(--lightgreen)"
            border="1px solid"
            fontSize="18px"
            fontWeight="600"
          >Tilbage</Button></Link>
        </div>
        <form onSubmit={(e) => {handleLogin(e)}}>
          <h2>Log ind</h2>
          {errorMsg && <p>{errorMsg}</p>}
          <label className={style.inputGroup}>
            <input className={`${style.input} ${username.length ? style.hasText : ""}`} 
            type="email" 
            name="username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <span className={style.placeholder}>E-mail</span>
          </label>
          <label className={style.inputGroup}>
            <input className={`${style.input} ${password.length ? style.hasText : ""}`}
            type={showPassword ? "text" : "password"} 
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <span className={style.placeholder}>password</span>
            <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          onClick={showHidePassword}
        >
          {showPassword ? (
            <path
              fill="currentColor"
              d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5Z"
            ></path>
          ) : (
            <path
              fill="currentColor"
              d="M12 17.5c-3.8 0-7.2-2.1-8.8-5.5H1c1.7 4.4 6 7.5 11 7.5s9.3-3.1 11-7.5h-2.2c-1.6 3.4-5 5.5-8.8 5.5Z"
            ></path>
          )}
        </svg>
          </label>
          <Button type="submit"
            height="48px"
            width="164px"
            borderRadius="12px"
            fontSize="14px"
            fontWeight="600"
            lineHeight="19px"
          >Log ind</Button>
          <Link to="/signup">sign ind</Link>
        </form>
      </div>
    </section>
  );
}
