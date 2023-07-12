// import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
// import jwtDecode from "jwt-decode";
import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  //   const { user, logout, isAdmin } = useAuthContext();
  const responseGoogle = (res) => {
    // const details = jwtDecode(res.credential);
    console.log(res);
    // console.log(details);
    // setUser(details);
  };
  return (
    <>
      {/* <div className="flex items-center h-screen ">
        <h1 className="text-white mx-auto text-4xl">makers</h1>
      </div> */}
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
          className="blue-hover"
          style={{
            background: "white",
            color: "blue",
            width: "15%",
            // marginLeft: "37%",
            marginTop: "10%",
            borderRadius: "5px",
            height: "40px",
          }}
          //   className="text-[#2B59C3] bg-white px-16  pb-1.5 pt-1 rounded-lg mt-[14%]"
        >
          Войти
        </Button>
        <ul className="mt-7 mb-14">
          <Button className="text-[#2B59C3]">Зарегистрироваться</Button>
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
          style={{
            background: "white",
            color: "blue",
            borderRadius: "5px",
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
