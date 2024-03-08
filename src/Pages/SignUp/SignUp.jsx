import style from "./SignUp.module.scss";
import Logo from "../../assets/Images/Layout/logo.svg";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { Button } from "../../Components/Button/Button";

export const SignUp = () => {
  const navigate = useNavigate();


  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const handleSignUp = (e) => {
    e.preventDefault();

    const is_Active = 1;
    const org_idValue = 1;
    const refresh_tokenValue = "1234";
    const groupsValue = 1;

    let url = "http://localhost:3000/users"

    let body = new URLSearchParams();
    body.append("firstname", e.target.firstname.value);
    body.append("lastname", e.target.lastname.value);
    body.append("email", e.target.email.value);
    body.append("password", e.target.email.value);

    body.append("is_active", is_Active);
    body.append("org_id", org_idValue);
    body.append("refresh_token", refresh_tokenValue);
    body.append("groups", groupsValue);

    let options = {
      method: "POST",
      body: body,
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const showHidePassword = () => {
    setShowPassword(!showPassword);
  };


  return (
    <section className={style.signUpStyle}>
      <div className={style.signUpWrapper}>
        <div className={style.titleBox}>
          <div className={style.logoWrapper}>
            <Link to="/">
              <img src={Logo} alt="logo" />
              <span>Affaldsguiden</span>
            </Link>
          </div>
          <h3>Sign up på Affaldsguiden for at anmelde stationer</h3>
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
        <form onSubmit={(e) => handleSignUp(e)}>
          <h2>Sign ind</h2>
          <label className={style.inputGroup}>
            <input
              className={`${style.input} ${
                firstname.length ? style.hasText : ""
              }`}
              type="text"
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <span className={style.placeholder}>Fornavn</span>
          </label>
          <label className={style.inputGroup}>
            <input
              className={`${style.input} ${
                firstname.length ? style.hasText : ""
              }`}
              name="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <span className={style.placeholder}>Efternavn</span>
          </label>
          <label className={style.inputGroup}>
            <input
              className={`${style.input} ${
                firstname.length ? style.hasText : ""
              }`}
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className={style.placeholder}>E-Mail</span>
          </label>
          <label className={style.inputGroup}>
            <input
              className={`${style.input} ${
                firstname.length ? style.hasText : ""
              }`}
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
          <div>
            <Button
              type="submit"
              height="48px"
              width="164px"
              borderRadius="12px"
              fontSize="14px"
              fontWeight="600"
              lineHeight="19px">
              Tilmeld
            </Button>
            <Link to="/login">
                <Button
                type="submit"
                height="48px"
                width="164px"
                borderRadius="12px"
                fontSize="14px"
                fontWeight="600"
                lineHeight="19px">
                Log ind
                </Button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};
