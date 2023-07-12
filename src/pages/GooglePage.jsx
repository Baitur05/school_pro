import { Box, Button, TextField } from "@mui/material";
import React from "react";

function GooglePage() {
  return (
    <>
      <div
        style={{ marginTop: "5%" }}
        className="text-center mt-[8%] text-white text-xl"
      >
        <div>
          <h1 className="mx-auto text-6xl">
            maker
            <span className="bg-white text-black px-1">s</span>
          </h1>
        </div>
      </div>
      <Box
        className="textFild"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        style={{ marginTop: "70px" }}
      >
        <p style={{ color: "white", marginLeft: "48%", marginTop: "-3%" }}>
          Вход
        </p>
        <TextField
          margin="normal"
          className="blue-hover"
          label="Телефон или адрес эл.почты"
          name="email"
          autoComplete="email"
          autoFocus
          style={{
            background: "white",
            borderRadius: "7px",
            width: "30%",
            marginLeft: "35%",
          }}
        />
      </Box>

      <p className="googleP">
        Приложению “Makers” будет предоставлени доступ к вашим данным: имени,
        адресу электронной почты, языковым настройкам и фото профиля. Прежде чем
        начать работу с приложением “Makers”, вы можете ознакомиться с его
        <p style={{ color: "blue" }}>
          политикой конфиденциальности и условиям использования.
        </p>
      </p>

      <Box
        style={{
          borderRadius: "7px",
          width: "30%",
          marginTop: "5%",
          marginLeft: "38%",
        }}
      >
        <Button>Создать аккаунт</Button>
        <Button
          variant="outline"
          style={{ background: "white", color: "blue" }}
        >
          Продолжить
        </Button>
      </Box>
    </>
  );
}

export default GooglePage;
