import { useState } from "react";
import { register } from "../services/user";
import "../styles/registerScreen.css";
import { useNavigate } from "react-router-dom";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegistration = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      console.log("Passwords don't match");
      return;
    }

    const userData = {
      name,
      surname: lastname,
      username,
      password,
    };

    register(userData).then((response) => {
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
          Name: <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Lastname:{" "}
          <input
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </label>
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
        <label>
          Confirm password:{" "}
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default RegisterScreen;
