import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, location, quantity, amount) {
  return { name, location, quantity, amount };
}

const rows = [
  createData("ASOS Ridley High Waist", "Avenue St", 82, 6518.18),
  createData("Marco Lightweight Shirt", "Lauren Bazar", 37, 4754.5),
  createData("ASOS Ridley High Waist", "Avenue St", 82, 6518.18),
];

const Orders = () => {
  return (
    <div className="">
      <h3 className="text-4xl font-semibold text-left m-10">Orders</h3>
      <TableContainer className="bg-gray p-8 m-10" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="">
              <TableCell className="text-tableH text-base" align="left">
                Name
              </TableCell>
              <TableCell className="text-tableH text-base" align="left">
                Location
              </TableCell>
              <TableCell className="text-tableH text-base" align="left">
                Quantity
              </TableCell>
              <TableCell className="text-tableH text-base" align="left">
                Amount
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.location}</TableCell>
                <TableCell align="left">{row.quantity}</TableCell>
                <TableCell align="left">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Orders;
