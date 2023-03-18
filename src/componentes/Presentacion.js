import React from "react";
//se importa el logo
import logo from "../img/logo.png";
import "../styles/Presentacion.css";

export function Presentacion() {
  return (
    <div className="container-presentacion">
      <img 
        className="logo"
        src={logo}
        alt="Logo de Tobalaba Marka"
        style={{ width: "200px", height: "auto" }}
      />
      <div className="div-presentacion">
        <h1 className="titulo-presentacion">Tobalaba Marka</h1>
        <p className="texto-presentacion">
        Nació en el año 2000 como un taller de danza y música folclórica en la Escuela Tobalaba de Peñalolén. Su director, el profesor Mauricio Varela, decidió iniciar la música y las danzas andinas en 2001. Tobalaba-Marka ha mantenido un trabajo constante en el desarrollo cultural de danzas andinas, explorando nuevas alternativas musicales con creaciones propias de carácter progresivo, sin perder el alma rítmica de las danzas. Ha realizado más de 560 presentaciones en vivo en diversos escenarios, que van desde peñas folclóricas hasta grandes eventos, compartiendo el escenario con artistas destacados de otras áreas. Cabe mencionar que todas las canciones de ambos grupos artísticos son de autoría propia, sumando a la fecha 48 composiciones musicales y 12 danzas.
        </p>
        
      </div>
      
           
      

    </div>
  );
}