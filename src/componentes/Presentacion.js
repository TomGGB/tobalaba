import React from "react";
//se importa el logo
import logo from "../img/logo.png";
import "../styles/Presentacion.css";

export function Presentacion() {
  return (
    <div className="container-presentacion">
      
      <p className="sep"></p>
      <img 
        className="logo"
        src={logo}
        alt="Logo de Tobalaba Marka"
        style={{ width: "200px", height: "auto" }}
      />
      <div className="div-presentacion">
        <h1 className="titulo-presentacion">Tobalaba Marka</h1>
        <p className="texto-presentacion">
        Surgió iniciales del año 2000 como un centro de enseñanza de danzas y música folclórica en la Escuela Tobalaba de Peñalolén. Su líder, el maestro Mauricio Varela, optó por introducir melodías y bailes andinos en 2001. Tobalaba-Marka ha mantenido una dedicación constante al enriquecimiento cultural de las danzas andinas, explorando nuevas direcciones musicales mediante creaciones originales de estilo progresivo, sin abandonar la esencia rítmica inherente a las danzas. Ha llevado a cabo más de 560 presentaciones en directo en una variedad de escenarios, desde reuniones folclóricas hasta eventos de gran magnitud, compartiendo escenario con destacados artistas de otras disciplinas. Es relevante señalar que todas las canciones de ambos grupos artísticos son de autoría exclusiva, sumando hasta la fecha un total de 48 composiciones musicales y 12 danzas propias.        
        </p>
      </div>
      
           
      

    </div>
  );
}