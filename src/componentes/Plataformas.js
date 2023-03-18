import React from "react";
import "../styles/Plataformas.css"

export function Plataformas() {
    return (
        //aqui van los logos de las plataformas junto con hipervinculos a las paginas de cada una
        <div className="container-plataformas" id="plataformas">
            <div className="div-plataformas">
                <p className="texto-plataformas">
                    <a href="https://www.facebook.com/tobalabamarka" target="_blank" rel="noreferrer" className="plataforma">
                        <img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" alt="Facebook" className="icono"/>
                    </a>
                    <a href="https://www.instagram.com/tobalabamarka/" target="_blank" rel="noreferrer" className="plataforma">
                        <img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt="Instagram" className="icono"/>
                    </a>
                    <a href="https://www.youtube.com/@angelicasaldias1/videos" target="_blank" rel="noreferrer" className="plataforma">
                        <img src="https://img.icons8.com/ios-filled/50/000000/youtube-play.png" alt="Youtube" className="icono"/>
                    </a>
                    <a href="https://open.spotify.com/artist/3cZqNdN6ZUj2aupKTgihDS" target="_blank" rel="noreferrer" className="plataforma">
                        <img src="https://img.icons8.com/ios-filled/50/000000/spotify.png" alt="Spotify" className="icono"/>
                    </a>
                    <a href="https://www.deezer.com/mx/artist/55798032" target="_blank" rel="noreferrer" className="plataforma">
                        <img src="https://img.icons8.com/ios-filled/50/000000/deezer.png" alt="Deezer" className="icono"/>
                    </a>
                    <a href="https://music.apple.com/cl/artist/tobalaba-marka/1454727154" target="_blank" rel="noreferrer" className="plataforma">
                        <img src="https://img.icons8.com/ios-filled/50/000000/apple-music.png" alt="Apple Music" className="icono"/>
                    </a>
                    </p>
            </div>
        </div>
        


        
    )
}
