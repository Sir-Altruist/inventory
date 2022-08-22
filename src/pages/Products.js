import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
// import AddIcon from '@mui/icons-material/Add';
import ProductTable from "../components/table/ProductTable";
import { MdAdd } from "react-icons/md";

const Products = () => {
  return (
    <Box component="div">
      <Container>
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Typography
              variant="h5"
              sx={{ color: "#C32148", fontWeight: "bold" }}
            >
              Product List
            </Typography>
            <Typography variant="body2" color={"textSecondary"}>
              The product list effectively dictates product presentation and
              provides <br />
              space to list to your products and offering in the most appealing
              way
            </Typography>
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              style={{ textTransform: "inherit" }}
            >
              {/* <AddIcon />Add Product */}
              <MdAdd size={"1.5rem"} /> Add Product
            </Button>
          </div>
        </section>
        <ProductTable />
      </Container>
    </Box>
  );
};

export default Products;
