import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";

function App() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (localStorage.getItem("username") !== null) {
      setUsername(localStorage.getItem("username"));
    }
  }, []);

  return (
    <>
      <Navbar userInfo={username} />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </>
  );
}

export default App;
