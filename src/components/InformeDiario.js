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
  function headRows(tipoTemplate, templateSubgrupo = "") {
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

    if (
      tipoTemplate === "TEMPLATE_GENERAL" &&
      templateSubgrupo === "TEMPLATE_GENERAL_SUB1"
    ) {
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
    if (
      tipoTemplate === "TEMPLATE_GENERAL" &&
      templateSubgrupo === "TEMPLATE_GENERAL_SUB1"
    ) {
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
    if (
      tipoTemplate === "TEMPLATE_GENERAL" &&
      templateSubgrupo === "TEMPLATE_GENERAL_SUB2"
    ) {
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
    if (
      tipoTemplate === "TEMPLATE_GENERAL" &&
      templateSubgrupo === "TEMPLATE_GENERAL_SUB3"
    ) {
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
  const getDatosTemplate_General = (tipo, grupo, body) => {
    if (tipo === "GRUPO") {
      grupo.map((g) => {
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
      //  console.log(grupo.subgrupo)
      if (grupo.subgrupo.length > 1) {
        for (let index = 0; index < grupo.subgrupo.length; index++) {
          console.log(grupo.subgrupo[index].empleados);
        }
      }
      // grupo.map(sb=>{
      //   console.log(sb)
      // })

      // grupo.subgrupo.map((sb) => {
      // sb.empleados.map((e) => {
      // console.log(sb)
      // body.push({
      //   nro_afiliado: e.nro_afiliado,
      //   nombre: e.nombre,
      //   apellido: e.apellido,
      //   horario: e.horario_laboral,
      //   horarioDesde: "",
      //   firmaEntrada: "",
      //   horarioHasta: "",
      //   firmaSalida: "",
      // });
      // });
      // });
      // grupo.subgrupo.map((g) => {
      //   g[0].empleados.map()
      // });
      // [0].empleados.map((g) => {
      // body.push({
      //   nro_afiliado: g.nro_afiliado,
      //   nombre: g.nombre,
      //   apellido: g.apellido,
      //   horario: g.horario_laboral,
      //   horarioDesde: "",
      //   firmaEntrada: "",
      //   horarioHasta: "",
      //   firmaSalida: "",
      // });
      // });
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
    let body = [];
    console.log(grupo.subgrupo);

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
      if (grupo.tipo_template === "TEMPLATE_GENERAL") {
        getDatosTemplate_General("GRUPO", grupo, body);
      }
    } else {
      //SUBGRUPOS
      if (grupo.subgrupo.empleados === undefined) {
        if (grupo.tipo_template === "TEMPLATE_GENERAL") {
          getDatosTemplate_General("SUBGRUPO", grupo, body);
        }
        if (grupo.tipo_template === "TEMPLATE_FISCALIZACION") {
          getDatosTemplate_Fiscalizacion("SUBGRUPO", grupo, body);
        }
        if (grupo.tipo_template === "TEMPLATE_CONTRATOS_TEMPORARIOS") {
          getDatosTemplate_ContratosTemporarios("SUBGRUPO", grupo, body);
        }
        if (grupo.tipo_template === "TEMPLATE_ORDENANZAS") {
          getDatosTemplate_Ordenanzas("SUBGRUPO", grupo, body);
        }
      }
      //  else if(grupo){
      //   if (grupo.tipo_template === "TEMPLATE_GENERAL") {
      //     getDatosTemplate_General("SUBGRUPO", grupo, body);
      //   }
      // }
      else {
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

  //!Funcion para retornar valores de grupos y subgrupos
  const getCodigo = (grupo) => {
    let codigo;
    for (const g in grupo) {
      if (g === "codigo") {
        codigo = grupo[g];
      }
    }
    // console.log(`Codigo: ${codigo}`);
    return codigo;
  };

  const getTipoTemplate = (grupo) => {
    let tipoTemplate;
    for (const g in grupo) {
      if (g === "tipo_template") {
        tipoTemplate = grupo[g];
      }
    }
    // console.log(`tipoTemplate: ${tipoTemplate}`);
    return tipoTemplate;
  };

  const getSubGrupo = (grupo) => {
    let subGrupos;
    for (const g in grupo) {
      if (g === "subgrupo") {
        subGrupos = grupo[g];
      }
    }
    // if (subGrupos.length > 1) {
    //   subGrupos.map((sb) => {
    //     console.log(sb)
    //   });
    // } else
    return subGrupos;
  };

  //!Funcion para crear el informe
  const crearInformeDiario = (grupo) => {
    const doc = new jsPDF();

    let finalY = doc.lastAutoTable.finalY || 25;

    doc.setFontSize(22);
    doc.text("INFORME DIARIO", 80, 15);
    doc.setFontSize(17);

    for (let i = 0; i < grupo.length; i++) {
      let nombreGrupo, nombreSubGrupo, subGrupos_nombres, tipoTemplate;

      //TITULO DE LA PRIMERA TABLA
      if (grupo[i].subgrupo === undefined) {
        nombreGrupo = grupo[i].nombre;
      } else {
        nombreSubGrupo = grupo[i].subgrupo[0].nombre_subgrupo;
      }

      //GENERAR LA PRIMERA TABLA
      if (i === 0) {
        grupo[i].subgrupo[0] === undefined
          ? doc.text(nombreGrupo, 15, finalY)
          : doc.text(nombreSubGrupo, 15, finalY);

        doc.autoTable({
          startY: finalY + 5,
          showHead: "firstPage",
          head: headRows(grupo[i].tipo_template),
          body: getBodyRowsInforme(getGrupo(grupo[i].codigo)),
          theme: "grid",
        });
      } else {
        finalY = doc.lastAutoTable.finalY;

        //GENERAR TABLAS EN BASE A SUBGRUPOS
        if (grupo[i].subgrupo !== undefined) {
          //GENERAR TABLAS EN BASE A UN SUBGRUPO
          if (getSubGrupo(grupo[i]).length === 1) {
            nombreSubGrupo = getSubGrupo(grupo[i])[0].nombre_subgrupo;
            doc.text(nombreSubGrupo, 15, finalY + 20);
            doc.autoTable({
              startY: finalY + 25,
              showHead: "firstPage",
              head: headRows(getTipoTemplate(grupo[i])),
              body: getBodyRowsInforme(getGrupo(getCodigo(grupo[i]))),
              theme: "grid",
            });
          } else {
            //GENERAR TABLAS EN BASE A MAS DE UN SUBGRUPO
            finalY = doc.lastAutoTable.finalY;
            nombreGrupo = grupo[i].nombre;
            doc.text(nombreGrupo, 80, finalY + 20);
            finalY += 15;

            //!
            // console.log(getGrupo(getCodigo(grupo[i])).subgrupo);

            let subGrupo_iterador = getGrupo(getCodigo(grupo[i]));
            // getGrupo(getCodigo(grupo[i])).subgrupo.map(sb=>{
            //   console.log(sb.empleados)
            // })
            // console.log(subGrupo_iterador)
            //!

            getSubGrupo(grupo[i]).map((sb) => {
              //  console.log(getBodyRowsInforme(getGrupo(getCodigo(grupo[i]))))

              subGrupos_nombres = sb.nombre_subgrupo;
              tipoTemplate = sb.tipo_template;
              doc.text(subGrupos_nombres, 15, finalY + 20);
              doc.autoTable({
                startY: finalY + 25,
                showHead: "firstPage",
                head: headRows(getTipoTemplate(grupo[i]), tipoTemplate),
                body: getBodyRowsInforme(subGrupo_iterador),
                theme: "grid",
              });

              // console.log(getBodyRowsInforme(subGrupo_iterador))

              finalY = doc.lastAutoTable.finalY;
            });
          }
        } else {
          //CREACION DE TABLAS DE GRUPOS
          finalY = doc.lastAutoTable.finalY;
          doc.text(nombreGrupo, 15, finalY + 20);
          doc.autoTable({
            startY: finalY + 25,
            showHead: "firstPage",
            head: headRows(grupo[i].tipo_template),
            body: getBodyRowsInforme(getGrupo(grupo[i].codigo)),
            theme: "grid",
          });
        }
      }
    }

    const fecha = new Date();
    const fechaHoy =
      fecha.getDay().toString() +
      "/" +
      fecha.getMonth().toString() +
      "/" +
      fecha.getFullYear().toString();

    // doc.save(`InformeDiario-${fechaHoy}.pdf`);
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
