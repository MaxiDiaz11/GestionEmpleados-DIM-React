import React, { useMemo } from "react";
import { columnas } from "./columnas";
import { useTable } from "react-table";
import "./tabla.css";

const Tabla = ({ grupos }) => {
  console.log("en tabla");
  console.log(grupos);

  const columns = useMemo(() => columnas, []);
  const data = useMemo(() => grupos, [grupos]);

  const tabla = useTable({
    columns,
    data,
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tabla;

  return (
    <div>
      <h1>Tabla</h1>

      <table {...getTableProps()}>
        <thead>
        {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;
