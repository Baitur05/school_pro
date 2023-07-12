import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

function AuthMainPage() {
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
            className="blue-hover" // Добавляем класс для стилизации при наведении
            style={{
              background: "white",
              borderRadius: "7px",
              width: "85%",
            }}
          />
          {/* Остальные поля ввода */}
          {/* ... */}
          <TextField
            margin="normal"
            label="Название школы"
            name="password"
            autoComplete="password"
            autoFocus
            className="blue-hover"
            style={{
              background: "white",
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
            className="blue-hover" // Добавляем класс для стилизации при наведении
            style={{
              background: "white",
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
            className="blue-hover" // Добавляем класс для стилизации при наведении
            style={{
              background: "white",
              borderRadius: "7px",
              width: "85%",
            }}
          />

          <div>
            <Button
              style={{
                background: "white",
                color: "blue",
                width: "65%",
                marginLeft: "37%",
                marginTop: "13%",
                borderRadius: "5px",
                height: "40px",
              }}
              variant="outline"
              component={Link}
              to="/"
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
