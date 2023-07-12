import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

function ActivationPage() {
  return (
    <div className="text-center mt-[8%] text-white text-xl">
      <div>
        <h1 className="mx-auto text-6xl">
          maker
          <span className="bg-white text-black px-1">s</span>
        </h1>
      </div>

      <h1 className="mail">
        НА ВАШУ ПОЧТУ ОТПРАВЛЕНА ССЫЛКА ДЛЯ СБРОСА ПАРОЛЯ
      </h1>
      <Button component={Link} to="/password" style={{ marginTop: "3%" }}>
        <ArrowForwardIcon />
      </Button>

      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert className="alert" severity="info">
          Подтвердите почту, чтобы активировать аккаунт
          <p style={{ color: "black" }}>
            Если письмо не пришло, проверьте папку “спам” или{" "}
            <p style={{ color: "red" }}>повторите активацию</p>
          </p>
        </Alert>
      </Stack>
    </div>
  );
}

export default ActivationPage;
