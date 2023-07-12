import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";

import MainLayout from "../layouts/MainLayout";
import AuthPage from "../pages/AuthPage";
import ForgotPage from "../pages/ForgotPage";
import ActivationPage from "../pages/ActivationPage";
import PasswordPage from "../pages/PasswordPage";
import AuthPasswordPage from "../pages/AuthPasswordPage";
import AuthMainPage from "../pages/AuthMainPage";
import GooglePage from "../pages/GooglePage";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/forgot" element={<ForgotPage />} />
        <Route path="/activation" element={<ActivationPage />} />
        <Route path="/password" element={<PasswordPage />} />
        <Route path="/authPasswordPage" element={<AuthPasswordPage />} />
        <Route path="/authMainPage" element={<AuthMainPage />} />
        <Route path="/goolePage" element={<GooglePage />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
