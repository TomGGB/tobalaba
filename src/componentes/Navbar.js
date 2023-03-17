import React from "react";
import "../styles/Navbar.css";
import logo from "../img/logo.png";

export function Navbar() {

  
  return (
      <div className= "collapseNavbarCollapse" id="navbarNav">
        <a className="logo" href="#presentacion">
          <img src={logo} alt="Logo de Tobalaba Marka" style={{ width: "70px", height: "auto", margin: "10px" }} />
        </a>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#presentacion">Presentación <span className="sr-only"></span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Integrantes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Escuchanos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Contacto</a>
          </li>
        </ul>
      </div>
      )
}
