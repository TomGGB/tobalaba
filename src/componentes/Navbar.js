import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import logo from "../img/logo.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop >= 0 && !scrolled) {
      setScrolled(true);
    } else if (scrollTop <= 0 && scrolled) {
      setScrolled(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop >= 0 && !scrolled) {
        setScrolled(true);
      } else if (scrollTop <= 0 && scrolled) {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
      <><button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button><div className={`collapseNavbarCollapse ${scrolled ? "scrolled" : ""}`} id="navbarNav">
        <a className="logo" href="#presentacion">
          <img src={logo} alt="Logo de Tobalaba Marka" style={{ width: "70px", height: "auto", margin: "10px" }} />
        </a>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="www.lanitakun.me">Presentación <span className="sr-only"></span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="www.lanitakun.me">Integrantes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="www.lanitakun.me">Escuchanos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="www.lanitakun.me">Contacto</a>
          </li>
        </ul>
      </div></>
  );
}
