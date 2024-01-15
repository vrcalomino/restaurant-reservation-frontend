import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import RegisterScreen from "./screens/RegisterScreen";

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
      </Routes>
    </>
  );
}

export default App;
