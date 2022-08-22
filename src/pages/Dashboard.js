import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { blue, red } from "@mui/material/colors";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdSell } from "react-icons/md";
// import ShowChartIcon from '@mui/icons-material/ShowChart';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { BarChart } from "../components/chart/Graph";
import { Lines } from "../components/chart/Lines";
import { data } from "../components/products/products";
import Selling from "../components/products/Selling";

function Dashboard() {
  return (
    <Box component={"div"}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={3} spacing={2}>
            <Card className={"card"} elevation={5}>
              <Container>
                <CardContent sx={{ display: "flex" }}>
                  <Avatar sx={{ bgcolor: blue[500] }} aria-label="sales">
                    &#8358;
                  </Avatar>
                  <div style={{ paddingLeft: "2rem" }}>
                    <Typography variant="body2" color={"textSecondary"}>
                      Total Purchases
                    </Typography>
                    <Typography
                      variant="p"
                      style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                    >
                      2,500,000
                    </Typography>
                  </div>
                </CardContent>
              </Container>
            </Card>
          </Grid>
          <Grid item xs={12} md={3} spacing={2}>
            <Card className={"card"} elevation={5}>
              <Container>
                <CardContent sx={{ display: "flex" }}>
                  <Avatar sx={{ bgcolor: blue[500] }} aria-label="sales">
                    {/* <ShoppingCartIcon /> */}
                    <AiOutlineShoppingCart />
                  </Avatar>
                  <div style={{ paddingLeft: "2rem" }}>
                    <Typography variant="body2" color={"textSecondary"}>
                      Purchase Unit
                    </Typography>
                    <Typography
                      variant="p"
                      style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                    >
                      5,000
                    </Typography>
                  </div>
                </CardContent>
              </Container>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card className={"card"} elevation={5}>
              <Container>
                <CardContent sx={{ display: "flex" }}>
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="sales">
                    &#8358;
                  </Avatar>
                  <div style={{ paddingLeft: "2rem" }}>
                    <Typography variant="body2" color={"textSecondary"}>
                      Total Sales
                    </Typography>
                    <Typography
                      variant="p"
                      style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                    >
                      2,000,000
                    </Typography>
                  </div>
                </CardContent>
              </Container>
            </Card>
          </Grid>
          <Grid item xs={12} md={3} spacing={2}>
            <Card className={"card"} elevation={5}>
              <Container>
                <CardContent sx={{ display: "flex" }}>
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="sales">
                    {/* <ShowChartIcon /> */}
                    <MdSell />
                  </Avatar>
                  <div style={{ paddingLeft: "2rem" }}>
                    <Typography variant="body2" color={"textSecondary"}>
                      Sales Unit
                    </Typography>
                    <Typography
                      variant="p"
                      style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                    >
                      2,000
                    </Typography>
                  </div>
                </CardContent>
              </Container>
            </Card>
          </Grid>
        </Grid>

        {/* Chart */}
        <Grid container sx={{ marginTop: "5rem" }}>
          <Grid item xs={12} md={6}>
            <BarChart />
          </Grid>
          <Grid item xs={12} md={6}>
            <Lines />
          </Grid>
        </Grid>

        {/* Products */}
        <Grid container sx={{ marginTop: "5rem" }}>
          <Grid item xs={12} md={5}>
            <Card>
              <CardHeader
                title="Best Selling Products"
                subheader="Ranked on the total amounts generated"
                sx={{ mb: 3 }}
              />
              {data.map((item, i) => (
                <div key={i}>
                  <Selling item={item} />
                </div>
              ))}
            </Card>
          </Grid>
          <Grid item xs={12} md={2}></Grid>
          <Grid item xs={12} md={5}>
            <Card>
              <CardHeader
                title="Recently Added"
                subheader="New products"
                sx={{ mb: 3 }}
              />
              {data.map((item, i) => (
                <div key={i}>
                  <Selling item={item} />
                </div>
              ))}
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Dashboard;
