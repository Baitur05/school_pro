import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

function ForgotPage() {
  const [inputText, setInputText] = useState("");
  const handleInputChange = (event) => {
    setInputText(event.target.value);
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
          style={{ marginTop: "70px" }}
        >
          <TextField
            margin="normal"
            label="Email "
            name="email"
            autoComplete="email"
            autoFocus
            className="blue-hover"
            value={inputText}
            onChange={handleInputChange}
            style={{
              background: inputText ? "blue" : "white",
              color: inputText ? "white" : "black",
              borderRadius: "7px",
              width: "85%",
            }}
          />

          <div>
            <Button
              component={Link}
              to="/activation"
              variant="outline"
              className={buttonHovered ? "blue-button" : ""}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                background: buttonHovered ? "blue" : "white",
                color: buttonHovered ? "white" : "blue",
                width: "75%",
                marginTop: "13%",
                marginLeft: "35%",
                borderRadius: "5px",
                height: "40px",
              }}
            >
              Сбросить пароль
            </Button>
            <Button
              component={Link}
              to="/auth"
              className="buttonFotgot"
              // style={{ marginLeft: "55%", width: "100%" }}
            >
              Вспомнил пароль
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
          <Button
            component={Link}
            to="/authPasswordPage"
            className="buttonAll"
            // style={{ marginLeft: "28%", width: "85%" }}
          >
            Зарегистрироваться
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default ForgotPage;
