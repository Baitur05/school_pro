import {
  Avatar,
  Box,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  ThemeProvider,
} from "@mui/material";
import React from "react";

function AuthPage() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            {isLogin ? "Sign in" : "Sign up"}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {!isLogin ? (
              <>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="displayName"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="photo"
                  label="photo"
                  name="photoURL"
                />
              </>
            ) : null}

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPass ? "text" : "password"}
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => setShowPass(e.target.checked)}
                  checked={showPass}
                  color="primary"
                />
              }
              label="Show password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {isLogin ? "Sign in" : "Sign up"}
            </Button>
            <Grid container>
              <Grid item xs>
                {isLogin ? (
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                ) : null}
              </Grid>
              <Grid item>
                <Link
                  onClick={() => setIsLogin(!isLogin)}
                  href="#"
                  variant="body2"
                >
                  {isLogin
                    ? "Don't have an account? Sign Up"
                    : "Already have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default AuthPage;
