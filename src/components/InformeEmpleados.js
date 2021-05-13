import React, { useState, useEffect } from "react";
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
    console.log(datosTemplate)
    return datosTemplate;
  };
  const getDatosTemplate_General = (tipo, grupo, datosTemplate) => {
    if (tipo === "GRUPO") {
      datosTemplate = grupo.empleados;
    }
    if (tipo === "SUBGRUPO") {
      console.log(grupo.subgrupo);
      // if (grupo.subgrupo.length > 1) {
      //   for (let index = 0; index < grupo.subgrupo.length; index++) {
      //     console.log(grupo.subgrupo[index].empleados);
      //   }
      // }
    }
    return datosTemplate;
  };

  // //!OBTENER FILAS (empleados)
  const obtenerFilas = (grupo) => {
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
        datosTemplate = getDatosTemplate_General("GRUPO", grupo, datosTemplate);
      }
    } else {
      //SUBGRUPOS
      if (grupo.subgrupo.empleados === undefined) {
        if (grupo.tipo_template === "TEMPLATE_GENERAL") {
          datosTemplate = getDatosTemplate_General(
            "SUBGRUPO",
            grupo,
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

  // // const getValoresPorDefecto = () => {
  // //   body.push({
  // //     mensaje: "No hay campos disponibles",
  // //   });
  // //   return body;
  // // };

  // //!OBTENER COLUMNAS
  const obtenerColumnas = (tipo_template) => {
    const columnas = getColumnas(tipo_template);
    return columnas;
  };

  return (
    <div className="container text-center">
      <h1 className="mt-5 text-center display-2">Informe de Empleados</h1>
      {grupo.map((g) => {
        let nombreGrupo, nombreSubGrupo;

        let { columnas, filas } = definirFilasColumnas(
          obtenerFilas(g),
          obtenerColumnas(g.tipo_template)
        );

        if (g.subgrupo === undefined) {
          nombreGrupo = g.nombre;
          return <Tabla columns={columnas} data={filas} titulo={nombreGrupo} />;
        } else {
          nombreSubGrupo = g.subgrupo[0].nombre_subgrupo;
          return (
            <Tabla columns={columnas} data={filas} titulo={nombreSubGrupo} />
          );
        }
      })}
    </div>
  );
};

export default InformeEmpleados;
