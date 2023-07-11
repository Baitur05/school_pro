import React from "react";
import "./App.css";
import MainPage from "./components/RegisterPage/MainPage";
import { GoogleLogout } from "react-google-login";

const App = () => {
  return (
    <div>
      <MainPage />
    </div>
  );
};

export default App;
