import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Navbar from "./components/Navbar";
import { useState } from "react";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";

function App() {
  const [sessionUsername, setSessionUsername] = useState("");

  return (
    <>
      <Navbar
        userInfo={sessionUsername}
        setSessionUsername={setSessionUsername}
      />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route
          path="/register"
          element={<RegisterScreen setSessionUsername={setSessionUsername} />}
        />
        <Route
          path="/login"
          element={<LoginScreen setSessionUsername={setSessionUsername} />}
        />
      </Routes>
    </>
  );
}

export default App;
