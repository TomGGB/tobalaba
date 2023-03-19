import React from "react";
import "../styles/Contacto.css";

export function Contacto() {
    return (
        //aqui van los logos de las plataformas junto con hipervinculos a las paginas de cada una
        <div className="container-contacto" id="contacto">
            <h1 className='titulo' id='contacto'>Contacto</h1>
            <div className="whatsapp">
                <a href="https://wa.me/+56956570689" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="whatsapp" />
                </a>
            </div>
            </div>
    );
}

