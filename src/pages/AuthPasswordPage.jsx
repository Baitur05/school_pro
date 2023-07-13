import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function AuthPasswordPage() {
  const [inputTextOne, setInputTextOne] = useState("");
  const handleInputChange = (event) => {
    setInputTextOne(event.target.value);
  };

  const [inputTextTwo, setInputTextTwo] = useState("");
  const handleInputTwoChange = (event) => {
    setInputTextTwo(event.target.value);
  };

  const [inputTextThree, setInoutTextThree] = useState("");
  const handleInputThreeChange = (event) => {
    setInoutTextThree(event.target.value);
  };

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
    <Container maxWidth="xs">
      <div className="text-center mt-[8%] text-white text-xl">
        <div>
          <h1 className="mx-auto text-6xl">
            maker
            <span className="bg-white text-black px-1">s</span>
          </h1>
        </div>
        <Box
          className="textFild"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          style={{ marginTop: "4%" }}
        >
          <TextField
            margin="normal"
            label="email"
            name="Email"
            autoComplete="email"
            className="blue-hover"
            value={inputTextOne}
            onChange={handleInputChange}
            autoFocus
            style={{
              background: inputTextOne ? "blue" : "white",
              color: inputTextOne ? "white" : "black",
              borderRadius: "7px",
              width: "85%",
            }}
          />
          <TextField
            margin="normal"
            name="password"
            label="Пароль"
            autoComplete="current-password"
            className="blue-hover"
            value={inputTextTwo}
            onChange={handleInputTwoChange}
            style={{
              background: inputTextTwo ? "blue" : "white",
              color: inputTextTwo ? "white" : "black",
              borderRadius: "7px",
              width: "85%",
            }}
          />
          <TextField
            margin="normal"
            name="password"
            label="Повторите пароль"
            autoComplete="current-password"
            className="blue-hover"
            value={inputTextThree}
            onChange={handleInputThreeChange}
            style={{
              background: inputTextThree ? "blue" : "white",
              color: inputTextThree ? "white" : "black",
              borderRadius: "7px",
              width: "85%",
            }}
          />

          <div>
            <Button
              variant="outline"
              component={Link}
              to="/authMainPage"
              className={buttonHovered ? "blue-button" : ""}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                background: buttonHovered ? "blue" : "white",
                color: buttonHovered ? "white" : "blue",
                width: "65%",
                marginLeft: "37%",
                marginTop: "13%",
                borderRadius: "5px",
                height: "40px",
              }}
            >
              Продолжить <ArrowForwardIosIcon className="iconAuthPassword" />
            </Button>
          </div>
        </Box>
        <ul className="mt-7 mb-18"></ul>
        <div className="flex justify-center">
          <p>_________________</p>
          <p className="mb-2 px-2 pt-2">или</p>
          <p>_________________</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Button
            variant="outline"
            component={Link}
            to="/googlePage"
            className={googleButtonHovered ? "blue-button" : ""}
            onMouseEnter={handleGoogleMouseEnter}
            onMouseLeave={handleGoogleMouseLeave}
            style={{
              background: googleButtonHovered ? "blue" : "white",
              color: googleButtonHovered ? "white" : "blue",
              borderRadius: "5px",
              width: "85%",
              height: "40px",
              marginLeft: "8%",
            }}
          >
            Войти через Google
          </Button>
          <Box className="authPasswordBox">
            <p className="authPasswordP">У меня есть акаунт</p>
            <Button
              className="buttonGo"
              component={Link}
              to="/authPasswordPage"
            >
              Войти
            </Button>
          </Box>
        </div>
      </div>
    </Container>
  );
}

export default AuthPasswordPage;
