import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Chart from "../images/chart.png";
import Notes from "../images/notes.svg";
import TypeWriter from "react-typewriter";
import { features } from "../components/Features/features";
import FeaturesCard from "../components/Features/FeaturesCard";
import { footer } from "../components/footerList";
import { FiMail } from "react-icons/fi";
import { AiOutlinePhone } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { FcLike } from "react-icons/fc";
import { Navbar } from "../components/navbar";

const Landing = () => {
  const year = new Date().getFullYear();
  return (
    <>
      {/* Navigation */}
      <Navbar />
      {/* End of Navigation */}
      {/* Landing section */}
      <Box component={"section"} className="landing">
        <Container>
          <Grid container className="landing-content" spacing={5}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                component={"h3"}
                sx={{ color: "#fff", paddingTop: "5rem", fontSize: "3em" }}
              >
                Conveniently Manage Your Inventories
              </Typography>
              <Typography
                variant="body1"
                component={"p"}
                sx={{
                  pt: 2,
                  // fontSize: "1.2em",
                  wordBreak: "break-word",
                  color: "#fff",
                }}
              >
                Our inventory management system enables businesses <br /> to
                manage stocks effectively and efficiently. Access to <br />{" "}
                modern and sophisticated features with seamless usage <br /> and
                experience
              </Typography>
              <Button
                variant="contained"
                // className="landing-btn"
                color="success"
                sx={{
                  textTransform: "inherit",
                  mt: 3,
                  // backgroundColor: "#4e46e2",
                }}
                size={"large"}
              >
                Explore
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <img src={Chart} alt="chart" className="bg-img" />
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* End of Landing Section */}
      {/* About Section */}
      <Box component={"section"} className="about">
        <Container>
          <Grid container className="about-content" spacing={5}>
            <Grid item xs={12} md={6}>
              <img src={Notes} alt="notes" className="about-img" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                align="center"
                sx={{ paddingTop: "3rem", color: "#C32148" }}
              >
                About the App?
              </Typography>
              <div style={{ paddingTop: "3rem" }}>
                <TypeWriter typing={1}>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum
                  </span>
                </TypeWriter>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* End of About Section */}
      {/* Features Section */}
      <Box component={"section"} className={"features"}>
        <Container>
          <Typography
            variant="h4"
            sx={{ color: "#C32148", paddingTop: "5rem" }}
            align="center"
          >
            Features
          </Typography>
          <Grid container spacing={5} className="features-content">
            {features.map((item, i) => (
              <Grid item xs={12} sm={6} md={4}>
                <FeaturesCard item={item} key={i} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      {/* End of Features Section */}
      {/* Footer */}
      <Box component={"section"} className={"footer"}>
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Typography variant="h5" className={"footer-content-1"}>
                ATLAST INVENTORY SYSTEM
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#fff", paddingTop: "1rem" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography
                variant="h6"
                sx={{}}
                align="center"
                className={"footer-content-2"}
              >
                Social Links
              </Typography>
              <List
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {footer.map(({ name, icon }) => (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingTop: "1rem",
                    }}
                  >
                    <span style={{ paddingTop: ".5rem", color: "#fff" }}>
                      {icon}
                    </span>
                    <ListItem sx={{ color: "#fff" }}>{name}</ListItem>
                  </div>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography
                variant="h6"
                align="center"
                className={"footer-content-2"}
              >
                Contacts
              </Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  paddingTop: "2rem",
                }}
              >
                <FiMail />
                <Typography variant="body2" sx={{ pl: 1 }}>
                  devaltruist@gmail.com
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  paddingTop: "2rem",
                }}
              >
                <AiOutlinePhone />
                <Typography variant="body2" sx={{ pl: 1 }}>
                  +234-8180907820
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  paddingTop: "2rem",
                }}
              >
                <ImLocation />
                <Typography variant="body2" sx={{ pl: 1 }}>
                  5, Victoria Island, Lagos
                </Typography>
              </div>
            </Grid>
          </Grid>
          <div style={{ textAlign: "center", padding: "3rem 0 2rem 0" }}>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              &copy; Copyright {year}. All Rights Reserved
            </Typography>
            <Typography variant="body2" sx={{ color: "#fff", pt: 1 }}>
              Built with <FcLike /> by Altruist
            </Typography>
          </div>
        </Container>
      </Box>
      {/* End of Footer */}
    </>
  );
};

export default Landing;
