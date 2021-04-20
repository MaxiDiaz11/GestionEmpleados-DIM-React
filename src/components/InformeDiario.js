import React, {Fragment} from 'react';
import {jsPDF} from 'jspdf';

const InformeDiario = ({informe}) => {
  const crearInformeDiario = () => {
    let n1 = 30,
      n2 = 10;
    console.log(informe);
    const doc = new jsPDF();
    doc.text(n1, n2, 'INFORME DE EMPLEADOS');
    informe.map((i) => {
      n2 += 10;
      doc.text(
        n1,
        n2,
        `Nro de afiliado:${i.nro_afiliado} - Nombre: ${i.nombre} - Apellido: ${i.apellido}`
      );
    });
    doc.save('InformeDiario.pdf');
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
