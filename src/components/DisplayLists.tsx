import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import data from "../data/mock_data.json";
import { Button } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));





export default function DisplayLists() {
  const patients = data;
  console.log(patients);

  return (
    <TableContainer component={Paper} sx={{ marginTop: 20 }}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="left">Firstname</StyledTableCell>
            <StyledTableCell align="left">Lastname</StyledTableCell>
            <StyledTableCell align="left">Detail</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patients.map((patient) => (
            <StyledTableRow key={patient.patient_id}>
              <StyledTableCell component="th" scope="row">
                {patient.patient_id}
              </StyledTableCell>
              <StyledTableCell align="left">
                {patient.first_name}
              </StyledTableCell>
              <StyledTableCell align="left">
                {patient.last_name}
              </StyledTableCell>
              <StyledTableCell align="left">
                <Button>View Detail</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}