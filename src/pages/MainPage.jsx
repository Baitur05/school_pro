// import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
// import jwtDecode from "jwt-decode";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  const [buttonHovered, setButtonHovered] = useState(false);
  const handleMouseEnter = () => {
    setButtonHovered(true);
  };
  const handleMouseLeave = () => {
    setButtonHovered(false);
  };

  const [googleButtonHovered, setGoogleButtonHovered] = useState(false);
  const handleGoogleMouseEnter = () => {
    setGoogleButtonHovered(true);
  };
  const handleGoogleMouseLeave = () => {
    setGoogleButtonHovered(false);
  };

  return (
    <>
      <div className="text-center mt-[8%] text-white text-xl">
        <div>
          <h1 className="mx-auto text-6xl">
            maker
            <span className="bg-white text-black px-1">s</span>
          </h1>
        </div>

        <Button
          component={Link}
          to="/auth"
          variant="outline"
          className={buttonHovered ? "blue-button" : ""}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            background: buttonHovered ? "blue" : "white",
            color: buttonHovered ? "white" : "blue",
            width: "15%",
            marginTop: "10%",

            height: "40px",
          }}
        >
          Войти
        </Button>

        <ul className="mt-7 mb-14">
          <Button component={Link} to="/authPasswordPage">
            Зарегистрироваться
          </Button>
        </ul>
        <div className="flex justify-center">
          <p>____________</p>
          <p className="mb-2 px-2 pt-2">или</p>
          <p>____________</p>
        </div>

        <Button
          variant="outline"
          component={Link}
          to="/goolePage"
          className={googleButtonHovered ? "blue-button" : ""}
          onMouseEnter={handleGoogleMouseEnter}
          onMouseLeave={handleGoogleMouseLeave}
          style={{
            background: googleButtonHovered ? "blue" : "white",
            color: googleButtonHovered ? "white" : "blue",

            width: "20%",
            height: "40px",
          }}
        >
          Войти через Google
        </Button>
        {/* <GoogleOAuthProvider clientId="151557883450-ellj7a9fr46a4cadbi2d8tkfk0mq9jm1.apps.googleusercontent.com">
            <GoogleLogin
              className="google-login-button"
              onSuccess={responseGoogle}
              onError={responseGoogle}
            ></GoogleLogin>
          </GoogleOAuthProvider> */}
      </div>
    </>
  );
};

export default MainPage;
