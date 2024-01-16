import { useState } from "react";
import { login } from "../services/user";
import "../styles/registerScreen.css";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegistration = (event) => {
    event.preventDefault();

    const userData = {
      username,
      password,
    };

    login(userData).then((response) => {
      localStorage.setItem("username", response.data.username);
      localStorage.setItem("name", response.data.name);
      localStorage.setItem("reservation_id", response.data.reservation_id);
    });
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleRegistration}>
        <label>
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};
export default LoginScreen;
