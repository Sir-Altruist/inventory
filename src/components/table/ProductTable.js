import React, { useState, useEffect, useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
} from "react-table";
import { column } from "./columns";
// import { items } from "../data";
// import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./table.css";
import Filter from "./Filter";
import { Check } from "./Check";
import { productData } from "./productData";
// import axios from "axios";
// import TableToolbar from "../TableTooltip";
import { Box, Button, Container } from "@mui/material";

const ProductTable = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        // const response = productDataawait axios.get("http://localhost:5000/pin");
        // const { data } = response;
        setItems(productData);
        console.log(productData);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  const columns = useMemo(() => column, []);
  const data = useMemo(() => items, [items]);
  const tableInstance = new useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <Check {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <Check {...row.getToggleRowSelectedProps()} />
            ),
          },
          ...columns,
        ];
      });
    }
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    setGlobalFilter,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    // selectedFlatRows,
  } = tableInstance;
  const { globalFilter, pageIndex, pageSize } = state;
//   const { pageIndex, pageSize } = state;

//   const generatePin = async () => {
//     try {
//       // navigate("/admin");
//       const body = selectedFlatRows.map((single) => {
//         const layout = { id: single.original._id };
//         return layout;
//       });
//       const headers = {
//         "Content-Type": "application/json",
//       };

//       const res = await axios.patch("http://localhost:5000/pin", body, headers);
//       if (res) {
//         console.log(res);
//         window.location.reload();
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

  return (
    <Box component={"div"} style={{ padding: "5rem 0" }}>
      <Container>
      <div style={{ display: "flex", justifyContent: 'space-between'}}>
      <div>
      <p>Show <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 15, 20].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select> entries </p>
      </div>
          <Filter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>
        {/* <TableToolbar
          click={selectedFlatRows.length}
          generatePin={generatePin}
        /> */}
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {/* {column.isSorted ? (
                        column.isSortedDesc ? (
                          <ArrowDropDownIcon />
                        ) : (
                          <ArrowDropUpIcon />
                        )
                      ) : (
                        ""
                      )} */}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        style={{ textAlign: "center" }}
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="controller">
          <span>
            Showing{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
            pages
          </span>{" "}
          <Button
        //   variant='outlined'
          onClick={() => gotoPage(0)} 
          disabled={!canPreviousPage}
          style={{ backgroundColor: "#EBF4FA", color: "#000080", fontWeight: 'bold' }}
          >
            {"<<"}
          </Button>
          <Button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            style={{ fontWeight: 'bold', textTransform: 'inherit' }}
          >
            Previous
          </Button>
          <Button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            style={{ fontWeight: 'bold', textTransform: 'inherit' }}
          >
            Next
          </Button>
          <Button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
            style={{ backgroundColor: "#EBF4FA", color: "#000080", fontWeight: 'bold' }}
          >
            {">>"}
          </Button>
        </div>
        {/* <pre>
        <code>
          {JSON.stringify(
            {
              selectedFlatRows: selectedFlatRows.map((row) => row.original),
            },
            null,
            2,
            console.log(
              selectedFlatRows.map((single) => {
                const ids = { id: single.original._id };
                return ids;
              })
            ),
            console.log(selectedFlatRows.length)
          )}
        </code>
      </pre> */}
      </Container>
    </Box>
  );
};

export default ProductTable;