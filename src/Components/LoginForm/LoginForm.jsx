import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

export const LoginForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const { saveUserData } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    let url = "http://localhost:3000/login";

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
        console.log(data);

        saveUserData(data);

        if (data && data.access_token) {
          navigate("/profile");
        } else {
          setErrorMsg("Fejl: Forkert brugernavn eller adgangskode");
        }
      })
      .catch((err) => {
        console.error(err);
        setErrorMsg("Fejl: Forkert brugernavn eller adgangskode");
      });
  };

  return <div>LoginForm</div>;
};
