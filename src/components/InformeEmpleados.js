import React from "react";
import Tabla from "./Tabla";
import { getColumnas } from "./columnas";
import "./tabla.css";

const InformeEmpleados = ({ grupo }) => {
  // //! DEFINIR FILAS Y COLUMAS
  const definirFilasColumnas = (filas, columnas) => {
    return {
      columnas,
      filas,
    };
  };

  // //!OBTENER DATOS TEMPLATE (empleados)
  // //!FUNCION PARA QUE TE DEVUELVA LOS TEMPLATES DE TABLAS
  const getDatosTemplate_Fiscalizacion = (tipo, grupo, datosTemplate) => {
    if (tipo === "GRUPO") {
      datosTemplate = grupo.empleados;
    }
    if (tipo === "SUBGRUPO") {
      datosTemplate = grupo.subgrupo[0].empleados;
    }
    return datosTemplate;
  };
  const getDatosTemplate_ContratosTemporarios = (
    tipo,
    grupo,
    datosTemplate
  ) => {
    if (tipo === "GRUPO") {
      datosTemplate = grupo.empleados;
    }
    if (tipo === "SUBGRUPO") {
      datosTemplate = grupo.subgrupo[0].empleados;
    }
    return datosTemplate;
  };
  const getDatosTemplate_Ordenanzas = (tipo, grupo, datosTemplate) => {
    if (tipo === "GRUPO") {
      datosTemplate = grupo.empleados;
    }
    if (tipo === "SUBGRUPO") {
      datosTemplate = grupo.subgrupo[0].empleados;
    }
    console.log(datosTemplate);
    return datosTemplate;
  };
  const getDatosTemplate_General = (tipo, grupo, datosTemplate) => {
    if (tipo === "GRUPO") {
      datosTemplate = grupo.empleados;
    }
    if (tipo === "SUBGRUPO") {
      datosTemplate = grupo.empleados;
    }
    return datosTemplate;
  };

  // //!OBTENER FILAS (empleados)
  const obtenerFilas = (grupo, subgrupo = []) => {
    console.log(grupo);
    let datosTemplate = [];
    if (grupo.subgrupo === undefined) {
      // GRUPOS
      if (grupo.tipo_template === "TEMPLATE_FISCALIZACION") {
        datosTemplate = getDatosTemplate_Fiscalizacion(
          "GRUPO",
          grupo,
          datosTemplate
        );
      }
      if (grupo.tipo_template === "TEMPLATE_CONTRATOS_TEMPORARIOS") {
        datosTemplate = getDatosTemplate_ContratosTemporarios(
          "GRUPO",
          grupo,
          datosTemplate
        );
      }
      if (grupo.tipo_template === "TEMPLATE_ORDENANZAS") {
        datosTemplate = getDatosTemplate_Ordenanzas(
          "GRUPO",
          grupo,
          datosTemplate
        );
      }
      if (grupo.tipo_template === "TEMPLATE_GENERAL") {
        datosTemplate = getDatosTemplate_General(
          "GRUPO",
          subgrupo,
          datosTemplate
        );
      }
    } else {
      //SUBGRUPOS
      if (grupo.subgrupo.empleados === undefined) {
        if (grupo.tipo_template === "TEMPLATE_GENERAL") {
          datosTemplate = getDatosTemplate_General(
            "SUBGRUPO",
            subgrupo,
            datosTemplate
          );
        }
        if (grupo.tipo_template === "TEMPLATE_FISCALIZACION") {
          datosTemplate = getDatosTemplate_Fiscalizacion(
            "SUBGRUPO",
            grupo,
            datosTemplate
          );
        }
        if (grupo.tipo_template === "TEMPLATE_CONTRATOS_TEMPORARIOS") {
          datosTemplate = getDatosTemplate_ContratosTemporarios(
            "SUBGRUPO",
            grupo,
            datosTemplate
          );
        }
        if (grupo.tipo_template === "TEMPLATE_ORDENANZAS") {
          datosTemplate = getDatosTemplate_Ordenanzas(
            "SUBGRUPO",
            grupo,
            datosTemplate
          );
        }
      }
      // else {
      //   // VALORES `POR DEFECTO`
      //   if (
      //     grupo.tipo_template === undefined ||
      //     grupo.tipo_template === "" ||
      //     grupo === undefined
      //   ) {
      //     getValoresPorDefecto();
      //   }
      // }
    }
    return datosTemplate;
  };

  // //!OBTENER COLUMNAS
  const obtenerColumnas = (tipo_template, templateSubgrupo = "") => {
    const columnas = getColumnas(tipo_template, templateSubgrupo);
    return columnas;
  };

  //!RETORNAR TABLA
  const getTable = (columnas, filas, nombreSubGrupo, nombreGrupo) => {
    return (
      <Tabla
        columns={columnas}
        data={filas}
        titulo={nombreSubGrupo}
        nombre={nombreGrupo}
      />
    );
  };

  return (
    <div className="container text-center">
      <h1 className="mt-5 text-center display-2">Informe de Empleados</h1>
      {grupo.map((g) => {
        let nombreGrupo, nombreSubGrupo;

        console.log(g);

        if (g.subgrupo === undefined) {
          nombreGrupo = g.nombre;

          let { columnas, filas } = definirFilasColumnas(
            obtenerFilas(g),
            obtenerColumnas(g.tipo_template)
          );

          return <Tabla columns={columnas} data={filas} titulo={nombreGrupo} />;
        } else {
          if (g.subgrupo.length === 1) {
            nombreSubGrupo = g.subgrupo[0].nombre_subgrupo;
            let { columnas, filas } = definirFilasColumnas(
              obtenerFilas(g),
              obtenerColumnas(g.tipo_template)
            );

            return (
              <Tabla columns={columnas} data={filas} titulo={nombreSubGrupo} />
            );
          }

          if (g.subgrupo.length > 1) {
            for (let i = 0; i < g.subgrupo.length; i++) {
              nombreGrupo = g.nombre;
              nombreSubGrupo = g.subgrupo[i].nombre_subgrupo;

              console.log(nombreGrupo);
              console.log(nombreSubGrupo);

              let { columnas, filas } = definirFilasColumnas(
                obtenerFilas(g, g.subgrupo[i]),
                obtenerColumnas(g.tipo_template, g.subgrupo[i].tipo_template)
              );

              console.log(columnas);
              console.log(filas);

              // let tabla = getTable(columnas, filas, nombreSubGrupo, nombreGrupo);
                
              return (
                <Tabla
                  columns={columnas}
                  data={filas}
                  titulo={nombreSubGrupo}
                  nombre={nombreGrupo}
                />
              );
            }
          }
        }
      })}
    </div>
  );
};

export default InformeEmpleados;
