import React from "react";

const MainPage = () => {
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
        <h2 className="text-[#2B59C3]">google</h2>
      </div>
    </>
  );
};

export default MainPage;
