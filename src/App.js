import React, { useEffect, useState } from "react";
import InformeDiario from "./components/InformeDiario";
import axios from "axios";
import "./App.css";

function App() {
  const [grupos, setGrupos] = useState([]);

  useEffect(() => {
    const obtenerInforme = () => {
      const consultarApi = async () => {
        const url = "http://127.0.0.1:3000/informeDiario/generarInforme";
        const resultado = await axios.get(url);
        console.log(resultado.data.grupos.grupo)
        setGrupos(resultado.data.grupos.grupo);
      };
      consultarApi();
    };
    obtenerInforme();
  }, []);

  return <InformeDiario grupos={grupos}></InformeDiario>;
}

export default App;
