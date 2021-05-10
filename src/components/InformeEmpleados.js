import React from 'react';
import Tabla from './Tabla';



const InformeEmpleados = ({ grupos }) => {
  console.log(grupos[0].subgrupo[0].empleados)
  return (
    <div className="container text-center">
      <h1 className="mt-5 text-center display-2">Informe de Empleados</h1>
      <Tabla grupos={grupos[0].subgrupo[0].empleados} />
    </div>
  );
}

export default InformeEmpleados;