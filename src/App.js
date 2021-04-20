import React, {useEffect, useState} from 'react';
import InformeDiario from './components/InformeDiario';
import axios from 'axios';
import './App.css';

function App() {
  const [informe, setInforme] = useState([]);

  useEffect(() => {
    const obtenerInforme = () => {
      const consultarApi = async () => {
        const url = 'http://127.0.0.1:3000/informeDiario/generarInforme';
        const resultado = await axios.get(url);
        setInforme(resultado.data.empleado);
      };
      consultarApi();
    };
    obtenerInforme();
  }, []);

  return(
    <InformeDiario informe={informe}></InformeDiario>
  )
}

export default App;
