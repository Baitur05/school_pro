import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

function AuthMainPage() {
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

  const [inputTextFour, setInoutTextFour] = useState("");
  const handleInputFourChange = (event) => {
    setInoutTextFour(event.target.value);
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
            label="Город или Область проживания"
            name="password"
            autoComplete="password"
            autoFocus
            className="blue-hover"
            value={inputTextOne}
            onChange={handleInputChange}
            style={{
              background: inputTextOne ? "blue" : "white",
              color: inputTextOne ? "white" : "black",
              borderRadius: "7px",
              width: "85%",
            }}
          />

          <TextField
            margin="normal"
            label="Название школы"
            name="password"
            autoComplete="password"
            autoFocus
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
            label="Номер школы"
            name="password"
            autoComplete="password"
            autoFocus
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

          <TextField
            margin="normal"
            label="Номер класса"
            name="password"
            autoComplete="password"
            autoFocus
            className="blue-hover"
            value={inputTextFour}
            onChange={handleInputFourChange}
            style={{
              background: inputTextFour ? "blue" : "white",
              color: inputTextFour ? "white" : "black",
              borderRadius: "7px",
              width: "85%",
            }}
          />

          <div>
            <Button
              variant="outline"
              component={Link}
              to="/"
              className={buttonHovered ? "blue-button" : ""}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                background: buttonHovered ? "blue" : "white",
                color: buttonHovered ? "white" : "blue",
                width: "65%",
                width: "65%",
                marginLeft: "37%",
                marginTop: "13%",
                borderRadius: "5px",
                height: "40px",
              }}
            >
              Войти
            </Button>
          </div>
        </Box>
      </div>
    </Container>
  );
}

export default AuthMainPage;
