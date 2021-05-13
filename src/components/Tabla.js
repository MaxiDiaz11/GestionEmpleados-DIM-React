import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./tabla.css";

const Tabla = ({ columns, data, titulo }) => {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
      marginTop: 20,
      marginBottom: 20,
    },
  });

  const classes = useStyles();

  return (
    <div>
      <h1 className="my-3">{titulo}</h1>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell align="center">{col.Header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((fila) => (
              <TableRow key={Math.random() * (1000 - 1) + 1}>
                {/* <TableCell component="th" scope="fila">
                {fila.nro_afiliado}
              </TableCell>  */}
                <TableCell align="center"> {fila.nro_afiliado}</TableCell>
                <TableCell align="center">{fila.nombre}</TableCell>
                <TableCell align="center">{fila.apellido}</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Tabla;
