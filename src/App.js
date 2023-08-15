import React, { Component } from 'react';
import { Presentacion } from './componentes/Presentacion';
import { Navbar } from './componentes/Navbar';
import { Contacto } from './componentes/Contacto';
import { Plataformas } from './componentes/Plataformas';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    comentarios: []
  };

  componentDidMount() {
    this.peticionGet();
  }

  
  peticionGet = () => {
    const DBurl = process.env.REACT_APP_DB_URL;
    fetch(DBurl)
      .then(response => response.json())
      .then(data => {
        const comentarios = data.items; // aquí asignamos los comentarios del array , que es lo que nos interesa
        this.setState({ comentarios });
      })
      .catch(err => console.log(err));
  }
  




  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="separador"></div>
        <div className="ContainerPrincipal">
          <h1 className='titulo' id='presentacion'>Presentación</h1>
          <Presentacion />
          <h1 className='titulo' id='instagram'>Instagram</h1>
          <iframe className='frameInstagram' title='PostInstagram' width="auto" height="500" src="https://www.instagram.com/p/Cp0aOBAOO0W/embed" frameBorder="0"></iframe>
          <Plataformas />
          <Contacto />
          <div className="table-responsive mx-auto" width="90% !important" >
            <table className="table table-striped table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Correo</th>
                  <th>Descripción:</th>
                </tr>
              </thead>
              <tbody>
                {this.state.comentarios.map(comentario => {
                  return (
                    <tr key={comentario.id_comentario}>
                      <td>{comentario.correo}</td>
                      <td>{comentario.descripcion}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
