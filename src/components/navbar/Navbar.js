import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Button,
  ButtonBase,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Link,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { data } from "./navlist";
import { Link as RouterLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();
  const [navState, setNavState] = useState({
    mobile: false,
    isOpen: false,
  });
  const { mobile, isOpen } = navState;
  const [navColor, setNavColor] = useState(false);
  const changeNav = () => {
    return window.scrollY >= 100 ? setNavColor(true) : setNavColor(false);
  };

  useEffect(() => {
    const responsive = () => {
      return window.innerWidth < 900
        ? setNavState((prevState) => ({
            ...prevState,
            mobile: true,
          }))
        : setNavState((prevState) => ({
            ...prevState,
            mobile: false,
          }));
    };
    responsive();
    window.addEventListener("resize", () => responsive());

    return () => {
      window.removeEventListener("resize", () => responsive());
    };
  }, []);

  const desktopView = () => {
    window.addEventListener("scroll", changeNav);
    return (
      <Toolbar>
        <Container className="menu">
          <Box component="div">
            <Typography
              variant="h5"
              color={navColor ? "black" : "white"}
              className="logo"
              onClick={() => navigate("/")}
            >
              ATLAST
            </Typography>
          </Box>
          <Box component={"div"}>
            {data.map(({ name, path }) => (
              <ButtonBase
                className={navColor ? "menu-links-2" : "menu-links-1"}
                {...{
                  key: name,
                  to: path,
                  component: RouterLink,
                }}
                disableRipple={true}
                disableTouchRipple={true}
                focusRipple={true}
              >
                {name}
              </ButtonBase>
            ))}
          </Box>
          <Box component={"div"}>
            <Button
              variant="contained"
              color="success"
              sx={{ textTransform: "inherit" }}
            >
              <RouterLink
                to="/login/seller"
                style={{
                  fontWeight: "bold",
                  color: "#ffffff",
                  textDecoration: "none",
                }}
              >
                Sign In
              </RouterLink>
              <FiLogIn size={"1.5rem"} />
            </Button>
          </Box>
        </Container>
      </Toolbar>
    );
  };

  const mobileView = () => {
    window.addEventListener("scroll", changeNav);
    const menuIconOpen = () =>
      setNavState((prevState) => ({
        ...prevState,
        isOpen: true,
      }));
    const menuIconClose = () =>
      setNavState((prevState) => ({
        ...prevState,
        isOpen: false,
      }));
    return (
      <Toolbar className="menu">
        {/* <Container className="menu"> */}
        <IconButton onClick={menuIconOpen}>
          {/* <MenuIcon /> */}
          <AiOutlineMenu
            size={"1.5rem"}
            style={{ color: navColor ? "#000" : "#fff" }}
          />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: isOpen,
            onClose: menuIconClose,
          }}
        >
          <div>{drawerLinks()}</div>
        </Drawer>
        <Button
          color="success"
          variant="contained"
          size="small"
          sx={{ textTransform: "inherit" }}
        >
          Sign In <FiLogIn size={"1.5rem"} />
        </Button>
        <Box component={"div"}>
          <Typography
            variant="h6"
            color={navColor ? "black" : "white"}
            sx={{ fontWeight: "bold" }}
          >
            ATLAST
          </Typography>
        </Box>
        {/* </Container> */}
      </Toolbar>
    );
  };
  const drawerLinks = () => {
    return data.map(({ name, path }) => (
      <Link
        {...{
          to: path,
          key: name,
          component: RouterLink,
        }}
        style={{
          textDecoration: "none",
          color: "black",
        }}
      >
        <MenuItem>{name}</MenuItem>
      </Link>
    ));
  };
  return (
    <AppBar className={navColor ? "navbar-1" : "navbar-2"}>
      {mobile ? mobileView() : desktopView()}
    </AppBar>
  );
};

export default Navbar;
