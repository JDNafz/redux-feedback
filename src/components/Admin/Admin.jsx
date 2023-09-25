import Box from "@mui/material/Box";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "@mui/base";
import './Admin.css'

export default function Admin() {
  const [rows, setRows] = useState([]);

  useEffect(() =>{
      getRows()
    }, []);

  const getRows = () => {
    axios
      .get("/feedback")
      .then((res) => {
        console.log("got data back!");
        setRows(res.data);
      })
      .catch((err) => console.log("Error get feedback for admin", err));
  }; //end getRows

  const handleDelete = (id) => {
    // console.log("sending delete")
    axios
    .delete(`/feedback/delete/${id}`)
    .then((res) => {
      console.log("deleted",id);
      getRows();
    })
    .catch((err) => console.log("Error get feedback for admin", err));
  }//end handleDelete


  return (
    <div className="successContainer">
      <Box className="firstBox" sx={{ width: 500, height: 75, border: 2 }}>
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 60, md: 75 },
            maxWidth: { xs: 90, md: 100 },
          }}
          alt="The house from the offer."
          src="https://i.etsystatic.com/16421349/r/il/1d4b0f/2983712461/il_fullxfull.2983712461_6kwo.jpg"
        />

        <h2 style={{ margin: "auto 0px auto 55px", textAlign: "center" }}>
          Feedback Results!
        </h2>
      </Box>
      <TableContainer className={'tableContainer'} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Feeling</TableCell>
              <TableCell align="right">Comprehension</TableCell>
              <TableCell align="right">Support</TableCell>
              <TableCell align="right">Comments</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.feeling}</TableCell>
              <TableCell align="right">{row.understanding}</TableCell>
              <TableCell align="right">{row.support}</TableCell>
              <TableCell align="right">{row.comments}</TableCell>
              <TableCell align="right"><Button onClick={()=>handleDelete(row.id)}>Delete</Button></TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
