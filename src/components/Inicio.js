import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import InformeDiario from "./InformeDiario";

const Inicio = () => {
  return (
    <Fragment>
      <div className="container">
        <h1 className="text-center">Gestion de empleados</h1>
      </div>
      <Router>
        <nav className="navbar navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/informeDiario">Informe Diario</Link>
            </li>
          </ul>
        </nav>
      </Router>

      <Route exact path="/" component={Inicio} />
      <Route exact path="/informeDiario" component={InformeDiario} />
    </Fragment>
  );
};

export default Inicio;
