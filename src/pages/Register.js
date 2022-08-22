import { useState } from "react";
import { Box, Container, TextField, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Box component={"div"} className={"login"}>
      <div className={"reg-container"}>
        <Typography
          variant="h4"
          sx={{
            paddingTop: "3rem",
            textAlign: "center",
            color: "#C32148",
            fontWeight: "bold",
          }}
        >
          Sign Up
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ textAlign: "center", pt: 2, fontWeight: "bold" }}
        >
          Please fill in your details to register
        </Typography>
        <Container>
          <form noValidate autoComplete="off" style={{ marginTop: "3rem" }}>
            <div>
              <TextField
                id="outlined-basic"
                type={"text"}
                label="First Name"
                variant="standard"
                fullWidth
                className="form-field"
              />
            </div>
            <div style={{ marginTop: "1rem" }}>
              <TextField
                id="outlined-basic"
                type={"text"}
                label="Last Name"
                variant="standard"
                fullWidth
                className="form-field"
              />
            </div>
            <div style={{ marginTop: "1rem" }}>
              <TextField
                id="outlined-basic"
                type={"text"}
                label="Business Name"
                variant="standard"
                fullWidth
                className="form-field"
              />
            </div>
            <div style={{ marginTop: "1rem" }}>
              <TextField
                id="outlined-basic"
                type={"email"}
                label="Email"
                variant="standard"
                fullWidth
                className="form-field"
              />
            </div>
            <div style={{ marginTop: "1rem" }}>
              <TextField
                id="outlined-basic"
                type={"password"}
                label="Password"
                variant="standard"
                fullWidth
                className="form-field"
              />
            </div>
            <div style={{ marginTop: "1rem" }}>
              <TextField
                id="outlined-basic"
                type={"password"}
                label="Confirm Password"
                variant="standard"
                fullWidth
                className="form-field"
              />
            </div>
            <div style={{ marginTop: "3rem" }}>
              <Button variant="contained" className="login-btn">
                Sign In
              </Button>
            </div>
            <div style={{ textAlign: "center", paddingTop: "1rem" }}>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ pt: 2, pb: 5 }}
              >
                Already have an account? Login{" "}
                <Link
                  style={{
                    color: "#C32148",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                  to="/login"
                >
                  Here
                </Link>
              </Typography>
            </div>
          </form>
        </Container>
      </div>
    </Box>
  );
};

export default Register;
