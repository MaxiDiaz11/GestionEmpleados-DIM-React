import React, { Fragment } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const InformeDiario = ({ grupos }) => {
  //!Funcion para obtener el grupo
  function getGrupo(codigoGrupo) {
    let grupoInforme = {};
    grupos.map((grupo) => {
      if (grupo.codigo === codigoGrupo) {
        grupoInforme = grupo;
      }
    });
    return grupoInforme;
  }

  //!Funcion para definir las filas
  function headRows(tipoTemplate) {
    if (tipoTemplate === "TEMPLATE_FISCALIZACION") {
      const template = [
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
      return template;
    }
    if (tipoTemplate === "TEMPLATE_CONTRATOS_TEMPORARIOS") {
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
    if (tipoTemplate === "TEMPLATE_ORDENANZAS") {
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
    if (tipoTemplate === undefined || tipoTemplate === null) {
      return [
        {
          mensaje: "No hay datos para mostrar",
        },
      ];
    }
  }

  //!FUNCION PARA QUE TE DEVUELVA LOS TEMPLATES DE TABLAS
  const getDatosTemplate_Fiscalizacion = (tipo, grupo, body) => {
    if (tipo === "GRUPO") {
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
    if (tipo === "SUBGRUPO") {
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
    return body;
  };
  const getDatosTemplate_ContratosTemporarios = (tipo, grupo, body) => {
    if (tipo === "GRUPO") {
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
    if (tipo === "SUBGRUPO") {
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
    return body;
  };
  const getDatosTemplate_Ordenanzas = (tipo, grupo, body) => {
    if (tipo === "GRUPO") {
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
    if (tipo === "SUBGRUPO") {
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
    return body;
  };

  const getValoresPorDefecto = (body) => {
    body.push({
      mensaje: "No hay campos disponibles",
    });
    return body;
  };

  //!Funcion para obtener los elementos de la tabla
  const getBodyRowsInforme = (grupo) => {
    console.log(grupo);
    let body = [];
    if (grupo.subgrupo === undefined) {
      // GRUPOS
      if (grupo.tipo_template === "TEMPLATE_FISCALIZACION") {
        getDatosTemplate_Fiscalizacion("GRUPO", grupo, body);
      }
      if (grupo.tipo_template === "TEMPLATE_CONTRATOS_TEMPORARIOS") {
        getDatosTemplate_ContratosTemporarios("GRUPO", grupo, body);
      }
      if (grupo.tipo_template === "TEMPLATE_ORDENANZAS") {
        getDatosTemplate_Ordenanzas("GRUPO", grupo, body);
      }
    } else {
      //SUBGRUPOS
      if (grupo.subgrupo.empleados === undefined) {
        if (grupo.tipo_template === "TEMPLATE_FISCALIZACION") {
          getDatosTemplate_Fiscalizacion("SUBGRUPO", grupo, body);
        }
        if (grupo.tipo_template === "TEMPLATE_CONTRATOS_TEMPORARIOS") {
          getDatosTemplate_ContratosTemporarios("SUBGRUPO", grupo, body);
        }
        if (grupo.tipo_template === "TEMPLATE_ORDENANZAS") {
          getDatosTemplate_Ordenanzas("SUBGRUPO", grupo, body);
        }
      } else {
        // VALORES `POR DEFECTO`
        if (
          grupo.tipo_template === undefined ||
          grupo.tipo_template === "" ||
          grupo === undefined
        ) {
          getValoresPorDefecto(body);
        }
      }
    }
    return body;
  };

  //!Funcion para crear el informe
  const crearInformeDiario = (grupo) => {
    console.log("dsafsdf");
    const doc = new jsPDF();

    let finalY = doc.lastAutoTable.finalY || 25;
    doc.setFontSize(20);
    doc.text("INFORME DIARIO", 80, 15);

    doc.setFontSize(15);
    for (let i = 0; i < grupo.length; i++) {
      let nombreGrupo, nombreSubGrupo;

      grupo[i].subgrupo === undefined
        ? (nombreGrupo = grupo[i].nombre)
        : (nombreSubGrupo = grupo[i].subgrupo[0].nombre_subgrupo);

      if (i === 0) {
        grupo[i].subgrupo[0] === undefined
          ? doc.text(nombreGrupo, 90, finalY)
          : doc.text(nombreSubGrupo, 90, finalY);

        doc.autoTable({
          startY: finalY + 5,
          showHead: "firstPage",
          head: headRows(grupo[i].tipo_template),
          body: getBodyRowsInforme(getGrupo(grupo[i].codigo)),
          theme: "grid",
        });
      } else {
        finalY = doc.lastAutoTable.finalY;
        grupo[i].subgrupo === undefined
          ? doc.text(nombreGrupo, 90, finalY + 20)
          : doc.text(nombreSubGrupo, 90, finalY + 20);

        console.log(nombreGrupo);
        console.log(nombreSubGrupo);
        console.log(getBodyRowsInforme(getGrupo(grupo[i].codigo)));

        doc.autoTable({
          startY: finalY + 25,
          showHead: "firstPage",
          head: headRows(grupo[i].tipo_template),
          body: getBodyRowsInforme(getGrupo(grupo[i].codigo)),
          theme: "grid",
        });
      }
    }
    doc.save("InformeDiario.pdf");
  };

  return (
    <Fragment>
      <div className="container text-center">
        <h1 className="mt-5 text-center display-2">Informe diario</h1>
        <button
          className="btn btn-primary mt-2 w-100"
          onClick={() => crearInformeDiario(grupos)}
        >
          Obtener Informe
        </button>
      </div>
    </Fragment>
  );
};

export default InformeDiario;
