import { Box, Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function GooglePage() {
  const [inputTextOne, setInputTextOne] = useState("");
  const handleInputChange = (event) => {
    setInputTextOne(event.target.value);
  };

  const [buttonHovered, setButtonHovered] = useState(false);
  const handleMouseEnter = () => {
    setButtonHovered(true);
  };
  const handleMouseLeave = () => {
    setButtonHovered(false);
  };

  return (
    <Container maxWidth="xs">
      <Box
        style={{ marginTop: "5%" }}
        className="text-center mt-[8%] text-white text-xl"
      >
        <div>
          <h1 className="mx-auto text-6xl">
            maker
            <span className="bg-white text-black px-1">s</span>
          </h1>
        </div>
      </Box>
      <Box
        // className="textFild"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        style={{ marginTop: "70px" }}
      >
        <p className="googleP">Вход</p>
        <TextField
          margin="normal"
          className="blue-hover"
          label="Телефон или адрес эл.почты"
          name="email"
          autoComplete="email"
          autoFocus
          value={inputTextOne}
          onChange={handleInputChange}
          style={{
            background: inputTextOne ? "blue" : "white",
            color: inputTextOne ? "white" : "black",
            borderRadius: "7px",
            width: "85%",
            marginLeft: "8%",
          }}
        />
      </Box>

      <p className="googleText">
        Приложению “Makers” будет предоставлени доступ к вашим данным: имени,
        адресу электронной почты, языковым настройкам и фото профиля. Прежде чем
        начать работу с приложением “Makers”, вы можете ознакомиться с его
        <p className="googleTextP">
          политикой конфиденциальности и условиям использования.
        </p>
      </p>

      <Box className="googleBox">
        <Button className="googleGoogle">Создать аккаунт</Button>
        <Button
          variant="outline"
          className={buttonHovered ? "blue-button" : ""}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            background: buttonHovered ? "blue" : "white",
            color: buttonHovered ? "white" : "blue",
            width: "85%",
            height: "46px",
            borderRadius: "5px",
            marginTop: "25%",
            marginLeft: "25%",
          }}
        >
          Продолжить <ArrowForwardIosIcon className="iconAuthPassword" />
        </Button>
      </Box>
    </Container>
  );
}

export default GooglePage;
