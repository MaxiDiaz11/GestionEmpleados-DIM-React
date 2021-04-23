import React, { Fragment } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const InformeDiario = ({ grupos }) => {
  //Funcion para obtener el grupo
  function getGrupo(codigoGrupo) {
    let grupoInforme = {};
    grupos.map((grupo) => {
      if (grupo.codigo === codigoGrupo) {
        grupoInforme = grupo;
      }
    });
    return grupoInforme;
  }

  //Funcion para definir las filas
  function headRows(tipoTemplate) {
    if (tipoTemplate === "TEMPLATE_FISCALIZACION") {
      return [
        {
          nro_afiliado: "AF",
          nombre: "Nombre",
          apellido: "Apellido",
          horario: "      ",
          horarioDesde: "Hora",
          firmaEntrada: "Firma",
          horarioHasta: "Hora",
          firmaSalida: "Firma",
        },
      ];
    }
    if (tipoTemplate === "TEMPLATE_CONTRATOS_TEMPORARIO") {
      return [
        {
          nro_afiliado: "AF",
          nombre: "Nombre",
          apellido: "Apellido",
          horario: "      ",
          horarioDesde: "Hora",
          firmaEntrada: "Firma",
          horarioHasta: "Hora",
          firmaSalida: "Firma",
        },
      ];
    }
  }

  // FUNCION PARA QUE ME DEVUELVA LOS DATOS DEL TEMPLATE
  // const getDatosTemplate_Fiscalizacion = (tipo, grupo) =>{
  //   let body = [];
  //   console.log(grupo)
  //   if(tipo==="GRUPO"){
  //     grupo.empleados.map((g) => {
  //       body.push({
  //         nro_afiliado: g.nro_afiliado,
  //         nombre: g.nombre,
  //         apellido: g.apellido,
  //         horario: g.horario_laboral,
  //         horarioDesde: "",
  //         firmaEntrada: "",
  //         horarioHasta: "",
  //         firmaSalida: "",
  //       });
  //     });
  //   }

  //   if(tipo="SUBGRUPO"){
  //     grupo.subgrupo[0].empleados.map((g) => {
  //       body.push({
  //         nro_afiliado: g.nro_afiliado,
  //         nombre: g.nombre,
  //         apellido: g.apellido,
  //         horario: g.horario_laboral,
  //         horarioDesde: "",
  //         firmaEntrada: "",
  //         horarioHasta: "",
  //         firmaSalida: "",
  //       });
  //     });
  //   }
  //   return body;

  // }

  //Funcion para obtener los elementos de la tabla
  const getBodyRowsInforme = (grupo) => {
    let body = [];

    if (grupo.subgrupo === undefined) {
      // GRUPO
      if (grupo.tipo_template === "TEMPLATE_FISCALIZACION") {
        // getDatosTemplate_Fiscalizacion("GRUPO", grupo)
        grupo.empleados.map((g) => {
          body.push({
            nro_afiliado: g.nro_afiliado,
            nombre: g.nombre,
            apellido: g.apellido,
            horario: g.horario_laboral,
            horarioDesde: "",
            firmaEntrada: "",
            horarioHasta: "",
            firmaSalida: "",
          });
        });
      }
      if (grupo.tipo_template === "TEMPLATE_CONTRATOS_TEMPORARIOS") {
        grupo.empleados.map((g) => {
          body.push({
            nro_afiliado: g.nro_afiliado,
            nombre: g.nombre,
            apellido: g.apellido,
            horario: g.horario_laboral,
            horarioDesde: "",
            firmaEntrada: "",
            horarioHasta: "",
            firmaSalida: "",
          });
        });
      }
    } else {
      //SUBGRUPO
      if (grupo.subgrupo.empleados === undefined) {
        if (grupo.tipo_template === "TEMPLATE_FISCALIZACION") {
          grupo.subgrupo.empleados.map((g) => {
            body.push({
              nro_afiliado: g.nro_afiliado,
              nombre: g.nombre,
              apellido: g.apellido,
              horario: g.horario_laboral,
              horarioDesde: "",
              firmaEntrada: "",
              horarioHasta: "",
              firmaSalida: "",
            });
          });
        }

        if (grupo.tipo_template === "TEMPLATE_CONTRATOS_TEMPORARIOS") {
          console.log(grupo.subgrupo[0].empleados);
          grupo.subgrupo[0].empleados.map((g) => {
            body.push({
              nro_afiliado: g.nro_afiliado,
              nombre: g.nombre,
              apellido: g.apellido,
              horario: g.horario_laboral,
              horarioDesde: "",
              firmaEntrada: "",
              horarioHasta: "",
              firmaSalida: "",
            });
          });
        }
      } else {
        // VALORES `POR DEFECTO`
      }
    }
    return body;
  };

  //Funcion para crear el informe
  const crearInformeDiario = () => {
    const doc = new jsPDF();
    doc.text("FISCALIZACION", 15, 15);

    doc.autoTable({
      startY: 20,
      head: headRows("TEMPLATE_FISCALIZACION"),
      body: getBodyRowsInforme(getGrupo(3)),
      theme: "grid",
    });

    let pageNumber = doc.internal.getNumberOfPages();

    doc.text("CONTRATOS TEMPORARIOS", 15, 85);
    doc.autoTable({
      startY: 90,
      showHead: "firstPage",
      head: headRows("TEMPLATE_CONTRATOS_TEMPORARIO"),
      body: getBodyRowsInforme(getGrupo(2)),
      theme: "grid",
    });

    doc.setPage(pageNumber);
    doc.save("InformeDiario.pdf");
  };

  return (
    <Fragment>
      <div className="container text-center">
        <h1 className="mt-5 text-center display-2">Informe diario</h1>
        <button
          className="btn btn-primary mt-2 w-100"
          onClick={crearInformeDiario}
        >
          Obtener Informe
        </button>
      </div>
    </Fragment>
  );
};

export default InformeDiario;
