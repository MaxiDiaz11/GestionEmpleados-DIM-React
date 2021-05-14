import React, { useEffect, useState, Fragment } from "react";
import InformeDiario from "./components/InformeDiario";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import InformeEmpleados from "./components/InformeEmpleados";

function App() {
  const [grupo, setGrupos] = useState([]);

  useEffect(() => {
    const obtenerInforme = () => {
      const consultarApi = async () => {
        const url = "http://127.0.0.1:3000/informeDiario/generarInforme";
        const resultado = await axios.get(url);
        console.log(resultado.data.grupos.grupo);
        setGrupos(resultado.data.grupos.grupo);
      };
      consultarApi();
    };
    obtenerInforme();
  }, []);

  console.log(grupo);
  return (
    // <Fragment>
    //   <div className="container">
    //     <h1 className="text-center">Gestion de empleados</h1>
    //   </div>
    //   <Router>
    //     <nav className="navbar navbar-light bg-light">
    //       <ul className="navbar-nav mr-auto">
    //         {/* <li className="nav-item">
    //           <Link to="/">Inicio</Link>
    //         </li> */}
    //         <li className="nav-item">
    //           <Link to="/informeDiario">Informe Diario</Link>
    //         </li>
    //       </ul>
    //     </nav>
    //   </Router>
    //   {/* <Route exact path="/" component={Inicio} /> */}
    //   <Route exact path="/informeDiario" component={InformeDiario} />
    // </Fragment>

    //  <InformeDiario grupos={grupos}></InformeDiario>
    <InformeEmpleados grupo={grupo} />
  );
}
export default App;

//   return {
//     //   <Fragment>
//     //   <div className="container">
//     //     <h1 className="text-center">Gestion de empleados</h1>
//     //   </div>
//     //   <Router>
//     //     <nav className="navbar navbar-light bg-light">
//     //       <ul className="navbar-nav mr-auto">
//     //         <li className="nav-item">
//     //           <Link to="/">Inicio</Link>
//     //         </li>
//     //         <li className="nav-item">
//     //           <Link to="/informeDiario">Informe Diario</Link>
//     //         </li>
//     //       </ul>
//     //     </nav>
//     //   </Router>
//     //   <Route exact path="/" component={Inicio} />
//     //   <Route exact path="/informeDiario" component={InformeDiario} />
//     // </Fragment>
//     // <InformeDiario grupos={grupos}></InformeDiario>
//   };
// }

// export default App;
