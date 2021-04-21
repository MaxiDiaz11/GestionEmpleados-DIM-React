import React, { Fragment } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const InformeDiario = ({ informe }) => {
  function headRows() {
    return [
      {
        nro_afiliado: "AF",
        apellido: "Apellido",
        nombre: "Nombre",
        horarioDesde: "Hora entrada",
        firmaEntrada: "Firma",
        horarioHasta: "Hora salida",
        firmaSalida: "Firma",
      },
    ];
  }
  const getRowsInforme = () => {
    let body = [];
    informe.forEach((i) => {
      body.push({
        nro_afiliado: i.nro_afiliado,
        nombre: i.nombre,
        apellido: i.apellido,
        horarioDesde: i.horario_laboral_desde,
        firmaEntrada: "",
        horarioHasta: i.horario_laboral_hasta,
        firmaSalida: "",
      });
    });
    return body;
  };

  const crearInformeDiario = () => {
    console.log(informe);
    const doc = new jsPDF();
    doc.text("INFORME DE EMPLEADOS", 40,30);

    doc.autoTable({ html: "#my-table" });

    doc.autoTable({
      head: headRows(),
      body: getRowsInforme(),
      theme: "grid",
    });
    doc.save("InformeDiario.pdf");
  };

  return (
    <Fragment>
      <div className="container text-center">
        <h1 className="mt-5 text-center">Informe diario</h1>
        <button className="btn btn-primary mt-2" onClick={crearInformeDiario}>
          Obtener Informe
        </button>
      </div>
    </Fragment>
  );
};

export default InformeDiario;
