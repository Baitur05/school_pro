import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AuthPage from "../contexts/AuthContext";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainPage />} />
      <Route path="/" element={<AuthPage />} />
    </Routes>
  );
}

export default MainRoutes;
