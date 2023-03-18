import React from "react";
import "../styles/Navbar.css";
import logo from "../img/logo.png";

export function Navbar() {

  /*se crea una funcion para que cuando se scrolee la pagina se active un estado que cambie el color de la barra de navegacion a negro*/
  const [scroll, setScroll] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  /*se crea una funcion que detecta cuando se esta en un dispositivo movil y cambia el menu de navegacion a un menu desplegable*/
  

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
      <div className= "collapseNavbarCollapse" style={{ backgroundColor: scroll ? "rgba(0,0,0,0.7)" : "transparent",transition: "0.5s",}}>
        
        <a className="logonavbar" href="#presentacion">
          <img src={logo} alt="Logo de Tobalaba Marka" style={{ width: "70px", height: "auto", margin: "10px" }} />
        </a>
        <ul className="navbar-nav" style={{ 
                                          display: isMobile ? "flex" : "flex",
                                          flexDirection: isMobile ? "row" : "column",
                                          backgroundColor: isMobile ? "transparent" : "rgba(0,0,0,0.7)",
                                          height: isMobile ? "auto" : "100vh",
                                          width: isMobile ? "auto" : "100vw",
                                          position: isMobile ? "relative" : "fixed",
                                          top: isMobile ? "auto" : "0",
                                          left: isMobile ? "auto" : isOpen ? "0" : "+100%",
                                          zIndex: isMobile ? "auto" : "1000",
                                          transition: "0.5s",
                                          justifyContent: isMobile ? "space-around" : "center",
                                          alignItems: isMobile ? "center" : "center",
                                          padding: isMobile ? "0" : "0",
                                          listStyle: isMobile ? "none" : "none",
                                          }}>
          <li className="nav-item">
            <a className="nav-link" href="#presentacion" onClick={() => window.location.href = '#presentacion'}>Presentación <span className="sr-only"></span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#plataformas" onClick={() => window.location.href = '#plataformas'}>Escuchanos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#contacto" onClick={() => window.location.href = '#contacto'}>Contacto</a>
          </li>
        </ul>
        <div className="menu_bar" style={{ display: isMobile ? "none" : "initial",
                                            position: isMobile ? "relative" : "block",
                                            marginRigth: isMobile ? "auto" : "20px",
                                            zIndex: isMobile ? "auto" : "1000",
                                            //se mostrara en la punta superior derecha de la pantalla del todo
                                            top: isMobile ? "auto" : "0",
                                            right: isMobile ? "auto" : "0",
                                            margin: isMobile ? "0" : "10px"

                                        }} onClick={() => setIsOpen(!isOpen)}>
                                          
          <a className="menu_bar" href="#presentacion">
            <span className="btn_menu">
              <i className="fas fa-bars"></i>
            </span>
          </a>
        </div>
      </div>
      
      )
}
