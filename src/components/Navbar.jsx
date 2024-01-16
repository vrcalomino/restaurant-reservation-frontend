/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const Navbar = ({ userInfo, setSessionUsername }) => {
  const navigate = useNavigate();

  const handleRegistration = () => {
    navigate("/register");
  };

  const handleLogIn = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("name");
    localStorage.removeItem("reservation_id");
    setSessionUsername("");
  };

  return (
    <nav>
      {userInfo ? (
        <div>
          Welcome {userInfo} <span onClick={handleLogout}>Log out</span>
        </div>
      ) : (
        <div>
          <span onClick={handleRegistration}>Register</span>{" "}
          <span onClick={handleLogIn}>Log In</span>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
