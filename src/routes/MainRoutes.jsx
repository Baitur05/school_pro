import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AuthPage from "../contexts/AuthContext";
import MainLayout from "../layouts/MainLayout";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default MainRoutes;
