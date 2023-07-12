import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Container } from "@mui/material";
import "./style.css";
import { Link } from "react-router-dom";
export default function BasicTextFields() {
  return (
    <Container maxWidth="xs">
      <div
        // style={{ marginTop: "80px" }}
        className="text-center mt-[8%] text-white text-xl"
      >
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
            className="blue-hover"
            label="Email "
            name="email"
            autoComplete="email"
            autoFocus
            style={{
              background: "white",
              borderRadius: "7px",
              width: "85%",
            }}
          />

          <TextField
            margin="normal"
            className="blue-hover"
            name="password"
            label="Пароль"
            autoComplete="current-password"
            style={{
              background: "white",
              borderRadius: "7px",
              width: "85%",
            }}
          />

          <div>
            <Button
              component={Link}
              to="/forgot"
              className="text-[#2B59C3]"
              style={{ marginLeft: "55%", width: "100%" }}
            >
              Забыл пароль
            </Button>

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
              className="blue-hover"
            >
              Войти
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
          <button
            variant="outline"
            style={{
              background: "white",
              color: "blue",
              borderRadius: "5px",
              width: "85%",
              height: "40px",
              marginLeft: "8%",
            }}
          >
            Войти через Google
          </button>
          <Button
            className="text-[#2B59C3]"
            style={{ marginLeft: "28%", width: "85%" }}
          >
            Зарегистрироваться
          </Button>
        </div>
      </div>
    </Container>
  );
}
