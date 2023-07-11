import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import React from "react";

const MainPage = ({ user, setUser }) => {
  const responseGoogle = (res) => {
    const details = jwtDecode(res.credential);
    console.log(res);
    console.log(details);
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

        <button className="text-[#2B59C3] bg-white px-16  pb-1.5 pt-1 rounded-lg mt-[14%]">
          Войти
        </button>
        <ul className="mt-7 mb-14">
          <a className="text-[#2B59C3]">Зарегистрироваться</a>
        </ul>
        <div className="flex justify-center">
          <p>____________</p>
          <p className="mb-2 px-2 pt-2">или</p>
          <p>____________</p>
        </div>
        <button className="">
          <GoogleOAuthProvider clientId="151557883450-ellj7a9fr46a4cadbi2d8tkfk0mq9jm1.apps.googleusercontent.com">
            <GoogleLogin
              className="google-login-button"
              onSuccess={responseGoogle}
              onError={responseGoogle}
            ></GoogleLogin>
          </GoogleOAuthProvider>
        </button>
      </div>
    </>
  );
};

export default MainPage;
