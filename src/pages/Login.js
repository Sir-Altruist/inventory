import { useState } from "react";
import {
  Box,
  Container,
  TextField,
  Typography,
  Button,
  InputAdornment,
} from "@mui/material";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };
  return (
    <Box component={"div"} className={"login"}>
      <div className={"login-container"}>
        <Typography
          variant="h4"
          sx={{
            paddingTop: "3rem",
            textAlign: "center",
            color: "#C32148",
            fontWeight: "bold",
          }}
        >
          Sign In
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ textAlign: "center", pt: 2, fontWeight: "bold" }}
        >
          Please sign in to continue
        </Typography>
        <Container>
          <form noValidate autoComplete="off" style={{ marginTop: "3rem" }}>
            <div>
              <TextField
                id="outlined-basic"
                type={"email"}
                label="Email"
                variant="standard"
                fullWidth
                className="form-field"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <MdAlternateEmail size={"1.5rem"} />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div style={{ marginTop: "2rem" }}>
              <TextField
                id="outlined-basic"
                type={visible ? "text" : "password"}
                label="Password"
                variant="standard"
                fullWidth
                className="form-field"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {visible ? (
                        <AiOutlineEye
                          onClick={toggle}
                          style={{ cursor: "pointer" }}
                          size={"1.5rem"}
                        />
                      ) : (
                        <AiOutlineEyeInvisible
                          onClick={toggle}
                          style={{ cursor: "pointer" }}
                          size={"1.5rem"}
                        />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div style={{ marginTop: "3rem" }}>
              <Button variant="contained" className="login-btn">
                Sign In
              </Button>
            </div>
            <div style={{ textAlign: "center", paddingTop: "1rem" }}>
              <Link
                style={{
                  color: "#C32148",
                  textDecoration: "inherit",
                  fontWeight: "bold",
                }}
                to="/forgot-password"
              >
                Forgot Password?
              </Link>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ pt: 2, pb: 5 }}
              >
                Do not have an account yet? Register{" "}
                <Link
                  style={{
                    color: "#C32148",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                  to="/register"
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

export default Login;
