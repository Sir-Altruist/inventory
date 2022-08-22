import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";

const Filter = ({ filter, setFilter }) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <TextField
        id="outlined-basic"
        label="Search..."
        variant="outlined"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <AiOutlineSearch size={"1.5rem"} />
            </InputAdornment>
          ),
        }}
        onChange={(e) => setFilter(e.target.value)}
        value={filter || ""}
      />
    </div>
  );
};

export default Filter;
